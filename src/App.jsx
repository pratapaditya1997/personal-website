import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar (Fixed Width) */}
        <Sidebar />
        <main className="ml-64 flex-1 overflow-y-auto p-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
