---
title: "Postgres Database Migration"
tags:
- postgres
date: "2020-04-17"
draft: false
---

Often times we find ourselves in situations where we need to migrate our databases from one server to another. Sometimes the reason can be infrastructure cost-cutting in our organisation or other times you may just want to do it for fun.

Recently, I had to do one such migration for my team's postgreSQL databases. My plan was to copy the schemas using _pg_dump_, then migrating the data using _foreign data wrapper_ utility and finally updating the destination database's sequences using the _pg_dump_ again. I am sharing the experience and steps in detail for doing this activity.

## Schema Migration

Firstly, we need to create new empty database in the new server.
```sql
create database destination_db;
```

Now, we need to migrate all our table schemas into this new above created database. We will use pg_dump for this.

> But before this, what exactly is _pg_dump_ - _pg_dump_ is a utility for backing up a PostgreSQL database. It makes consistent backups even if the database is used concurrently. pg_dump does not block other users accessing the database (readers or writers). pg_dump provides a lot of command-line options to control the content and format of the output. You can read more about them [here](https://www.postgresql.org/docs/12/app-pgdump.html)

```bash
pg_dump $source_db_conn_string --schema-only > schemas.sql
```

this command will generate schemas.sql file, which we will use now to migrate schemas in our new server's database.

```bash
psql $destination_db_conn_string -f schemas.sql
```

## Data Migration

Before starting the data migration, what exactly is foreign data wrapper?

> The postgres_fdw module provides the foreign-data wrapper postgres-fdw, which can be used to access data stored in external PostgreSQL servers. The functionality provided by this module overlaps substantially with the functionality of the older dblink module. But postgres_fdw provides more transparent and standards-compliant syntax for accessing remote tables, and can give better performance in many cases. You can read more about this [here](https://www.postgresql.org/docs/current/postgres-fdw.html)

Now, we will set up foreign data wrapper on the destination server

create the postgres_fdw extension in the destination database from where we wish to access the tables of source server.
```sql
create extension postgres_fdw;
```

we can validate if the extension is created using `\dx` command.

Now, we will create a foreign server using the connection details of the source server
```sql
create server foreign_server foreign data wrapper postgres_fdw options (dbname 'source_db', host 'source_host', port '5432');
```

Now, we create a mapping between destination user to remote source user
```sql
create user mapping for destination_user server foreign_server options (user 'source_user', password 'source_password');
```

Now, we create schema to access schema of source database
```sql
create schema source_schema;
```

Now, we will just import the schema from source database to the destination database. Usually, we need to import the `public` schema
```sql
import foreign schema public from server source_db into source_schema;
```

Now, we will just use the schema created above to insert the data into the destination tables. We can do the insert table by table or we can just write a simple script if there are too many tables
```sql
insert into table_name (select * from source_schema.table_name);
```

## What about the sequences
Phew. Looks like all our data is migrated and we are finally free. But are we? Suddenly you remember while you have moved all the tables data but all your sequences counters are still at 1.

Now if there is a insert operation and sequence's counter is used, there are chances that it will clash with the existing primary key data in the table.

There is a very simple solution to this. We can just take the data dump of sequences. But if we normally take the data dump of source database, it will include the data of all the tables, which we clearly don't want.

Luckily, pg_dump's pattern matching feature comes to our rescue here. We can explicitly provide a wildcard pattern to the -t flag to provide the dump of only the tables which adhere to the pattern.

> --table flag dump only tables(or views or sequences) matching the provided wildcard pattern. So, multiple tables(or sequences) can be selected by writing the appropriate pattern

As we know, all the sequences contains `id_seq` as the suffix in their name. We use this pattern to take data dump of _only_ the sequences from the source database.
```bash
pg_dump $source_db_conn_string -t *_seq  -a > sequences.sql
```

Now, we just re-store this data into the destination database.
```bash
psql $destination_db_conn_string -f sequences.sql
```

## Conclusion
Finally, the task is complete for real. I know there might be other and better ways to do this activity and I would love to learn about them. So, if you have other approaches in mind, I would be grateful if you please comment them here.