import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 text-center text-sm text-gray-500 py-6 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div>CBM SERVICES LLC — Muraqqabat, Deira, Dubai</div>
        <div className="mt-2">info@cbmservices.ae • 050-397 5523</div>
        <div className="mt-2">© {new Date().getFullYear()} CBM SERVICES LLC. All rights reserved.</div>
      </div>
    </footer>
  );
}
