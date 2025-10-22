import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const FORMSPREE_ID = "f/mblzepwz";
const TIDIO_KEY = "6pc8huwu8pu4maro7lkpd0u7o6pewndi";

export default function App() {
  useEffect(() => {
    if (TIDIO_KEY && !TIDIO_KEY.startsWith("REPLACE_")) {
      const s = document.createElement("script");
      s.src = `https://code.tidio.co/${TIDIO_KEY}.js`;
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
        <Header />
        <main className="max-w-6xl mx-auto px-6 py-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact formspreeId={FORMSPREE_ID} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
