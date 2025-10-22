import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/company-logo.jpg";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="CBM Services LLC" className="w-14 h-14 object-contain" />
          <div>
            <h1 className="text-xl font-semibold">CBM SERVICES LLC</h1>
            <p className="text-sm text-gray-500">Management Consultancy — Muraqqabat, Deira, Dubai</p>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          <div className="text-right">
            <div className="text-xs text-gray-500">info@cbmservices.ae</div>
            <div className="font-medium">050-397 5523</div>
          </div>
        </nav>
      </div>
    </header>
  );
}
