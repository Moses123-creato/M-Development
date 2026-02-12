import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Common Components
import Header from './components/common/Header';
import Footer from './components/common/Footer';

// Pages
import Home from './pages/Home';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import Categories from './pages/Categories';
import OnlineCourses from './pages/OnlineCourses';
import Portfolio from './pages/Portfolio';
import StudentZone from './pages/StudentZone';
import Apply from './pages/Apply';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

// Styles
import './styles/globals.css';

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/program/:id" element={<ProgramDetail />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:id" element={<Categories />} />
              <Route path="/online-courses" element={<OnlineCourses />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/student-zone" element={<StudentZone />} />
              <Route path="/apply" element={<Apply />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}