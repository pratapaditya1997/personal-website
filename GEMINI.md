# 🧠 Project Context: Aditya Pratap Singh Portfolio

## 1. Project Overview
A personal portfolio and digital garden built as a React SPA.
- **Core Goal:** Showcase bio, projects, and Substack writings.
- **Migration Status:** Moved from Hugo to React (Vite) in Jan 2026.

## 2. Tech Stack
- **Build:** React + Vite
- **Styling:** Tailwind CSS v4 (using `@import "tailwindcss";`)
- **Routing:** `react-router-dom`
- **Icons:** `lucide-react`

## 3. Development Conventions
- **Styling Strategy:**
  - Prioritize Tailwind utility classes over custom CSS.
  - Keep the `index.css` clean.
- **Component Structure:**
  - `src/components/`: Reusable UI parts (Sidebar, Cards, etc.).
  - `src/pages/`: Main page views mapped to routes.
- **Formatting:**
  - The project uses **Prettier**. Please respect the `.prettierrc` settings (2 spaces, single quotes).

## 4. Key Features & Integrations
- **Substack Feed:** We display articles dynamically. Currently using `rss2json` to proxy the RSS feed (`https://pratapaditya1997.substack.com/feed`) to avoid CORS.
- **Layout:** A persistent Sidebar layout with a scrollable main content area.

## 5. AI Assistant Role
- **Persona:** Experienced Frontend Developer.
- **Workflow:**
  - When creating new files, check existing naming conventions first.
  - If a file needs a major refactor, explain the plan briefly before writing code.
  - Assume modern React patterns (Hooks, Functional Components).