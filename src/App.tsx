import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    // basename = Vite's base ("/sruvora/" on GitHub Pages) so "/" resolves to the home page
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen bg-page text-ink flex flex-col justify-between selection:bg-forest-700 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Unknown URLs fall back to the home page instead of a blank screen */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
