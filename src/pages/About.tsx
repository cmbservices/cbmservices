import React from "react";

export default function About() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold">About CBM SERVICES LLC</h2>
      <p className="mt-4 text-gray-600">
        CBM SERVICES LLC is a Dubai-based management consultancy specializing in company setup and government approvals. We focus on fast, compliant, and reliable service for businesses establishing and operating in Dubai.
      </p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">Our Vision</h4>
          <p className="mt-2 text-gray-600">To be Dubai's most trusted partner for business setup and regulatory liaison.</p>
        </div>
        <div>
          <h4 className="font-semibold">Our Approach</h4>
          <p className="mt-2 text-gray-600">Client-first, detail-oriented, and proactive coordination with authorities.</p>
        </div>
      </div>
    </div>
  );
}
