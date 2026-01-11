# Aditya Pratap Singh - Personal Portfolio

My personal website. The site features a responsive layout, a dynamic Substack integration, and a clean, minimalist design.

🔗 **Live Site:** [https://pratapaditya.com](https://pratapaditya.com)

## 🛠️ Tech Stack

- **Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS (v4)](https://tailwindcss.com/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data:** RSS to JSON (for Substack feed)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/pratapaditya1997/personal-website.git](https://github.com/pratapaditya1997/personal-website.git)
   cd personal-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:5173](http://localhost:5173)

### 📂 Project Structure

```text
├── src/
│   ├── components/      # Reusable UI (Sidebar, PostCard)
│   ├── pages/           # Page views (Home, About, Projects)
│   ├── App.jsx          # Main Router setup
│   ├── index.css        # Tailwind imports
│   └── main.jsx         # Entry point
├── index.html           # Main HTML file
└── vite.config.js       # Vite configuration
```

### 🚢 Deployment

The project is deployed on Netlify.

Build Command: `npm run build`
Publish Directory: `dist`
