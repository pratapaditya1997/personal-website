import frontMatter from 'front-matter';

const modules = import.meta.glob('../articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export const getLocalArticles = () => {
  return Object.keys(modules).map((path) => {
    const content = modules[path];
    const { attributes, body } = frontMatter(content);

    // Extract slug from filename (e.g., "../articles/my-post.md" -> "my-post")
    const slug = path.split('/').pop().replace('.md', '');

    return {
      title: attributes.title,
      description: attributes.description,
      pubDate: attributes.pubDate,
      link: `/blog/${slug}`, // Internal link
      isLocal: true, // Flag to identify local vs external
      content: body, // The actual markdown body
      categories: attributes.categories || [],
      guid: slug, // Unique ID for finding it later
    };
  });
};

export const getArticleBySlug = (slug) => {
  const articles = getLocalArticles();
  return articles.find((article) => article.guid === slug);
};
