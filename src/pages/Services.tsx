import React from "react";

const list = [
  { title: "Company Formation", subtitle: "Mainland & Free Zone", text: "Trade name reservation, licensing, shareholder documentation, and local compliance." },
  { title: "Regulatory Approvals", subtitle: "Municipality, RTA, DHA, KHDA", text: "Documentation and submission for specialized approvals." },
  { title: "DEQ Smart Portal", subtitle: "SOE cards, exams, company registration", text: "DEQ registrations, exam scheduling, SOE assistance, project exceptions, engineer linking." },
  { title: "Maritime & Port Approvals", subtitle: "Dubai Maritime, Port Authority", text: "Maritime licensing and port authority coordination." },
  { title: "Project & Engineer Support", subtitle: "Linking, exceptions, permits", text: "Linking engineers to projects and obtaining practice permits." },
  { title: "Compliance & Advisory", subtitle: "Ongoing support", text: "Visa, labour guidance, and ongoing compliance advice." },
];

export default function Services() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Our Services</h2>
      <p className="mt-2 text-gray-600">End-to-end services for company formation and approvals in Dubai.</p>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {list.map((s) => (
          <article key={s.title} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow">
            <div className="p-4">
              <h5 className="font-semibold">{s.title}</h5>
              <div className="text-xs text-indigo-600 mt-1">{s.subtitle}</div>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
