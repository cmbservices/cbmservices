import React from "react";
import hero from "../assets/ai-hero-dubai.jpg";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
          We simplify company setup & approvals in Dubai
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          CBM SERVICES LLC guides businesses through formation in Dubai — mainland and free zone — and manages external approvals and DEQ Smart portal processes so you can focus on growth.
        </p>
              <section className="flex flex-col md:flex-row items-center justify-between py-16">
                  <div className="md:w-1/2 p-6">
                      <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Trusted Business Consultancy in Dubai</h2>
                      <p className="text-gray-600 mb-4">
                          At CBM Services LLC, we provide expert guidance in business setup, government approvals, and regulatory compliance across Dubai’s mainland and free zones.
                      </p>
                      <a href="/contact" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
                          Get in Touch
                      </a>
                  </div>
                  <div className="md:w-1/2 p-6">
                      <img src="/consultancy.jpg" alt="Business Consultancy in Dubai" className="rounded-2xl shadow-lg" />
                  </div>
              </section>


        <div className="mt-6 space-y-3">
          <p className="text-sm text-gray-600">Our specialties:</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <li className="inline-flex items-center gap-2"><span className="font-semibold">•</span> Business setup (Mainland & Free Zone)</li>
            <li className="inline-flex items-center gap-2"><span className="font-semibold">•</span> Dubai Municipality approvals</li>
            <li className="inline-flex items-center gap-2"><span className="font-semibold">•</span> RTA, Maritime & Port Authority</li>
            <li className="inline-flex items-center gap-2"><span className="font-semibold">•</span> DHA, KHDA processes</li>
            <li className="inline-flex items-center gap-2"><span className="font-semibold">•</span> DEQ Smart portal services (exams, SOE, permits)</li>
          </ul>
        </div>

        <div className="mt-6 flex gap-3">
          <a href="/contact" className="px-5 py-3 bg-indigo-600 text-white rounded-lg shadow">Get a consultation</a>
          <a href="/services" className="px-5 py-3 border border-gray-300 rounded-lg">Our services</a>
        </div>

        <p className="mt-6 text-xs text-gray-500">Based in Muraqqabat, Deira — serving the whole of Dubai.</p>
      </div>

      <div className="rounded-lg overflow-hidden shadow-lg bg-white">
        <img src={hero} alt="Dubai skyline" className="w-full h-80 object-cover" />
      </div>
    </div>
  );
}
