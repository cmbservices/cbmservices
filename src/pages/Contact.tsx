import React from "react";

type Props = { formspreeId?: string };

export default function Contact({ formspreeId }: Props) {
  const action = formspreeId ? `https://formspree.io/${formspreeId}` : "#";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p className="mt-2 text-gray-600">Tell us about your project and we’ll get back to you with next steps.</p>

        <div className="mt-4 space-y-2">
          <div className="text-sm"><strong>Email:</strong> info@cbmservices.ae</div>
          <div className="text-sm"><strong>Phone:</strong> 050-397 5523</div>
          <div className="text-sm"><strong>Location:</strong> Muraqqabat, Deira, Dubai</div>
        </div>

        <form action={action} method="POST" className="mt-4 grid grid-cols-1 gap-3">
          <input name="name" className="border p-3 rounded" placeholder="Your name" required />
          <input name="email" type="email" className="border p-3 rounded" placeholder="Email" required />
          <input name="phone" className="border p-3 rounded" placeholder="Phone (optional)" />
          <textarea name="message" className="border p-3 rounded" rows={6} placeholder="Short description of your need" required />
          <div className="flex gap-3">
            <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded">Send inquiry</button>
            <a href="tel:0503975523" className="px-4 py-2 border rounded">Call us</a>
          </div>
        </form>

        {!formspreeId && (
          <p className="mt-3 text-xs text-yellow-700">Formspree form ID is not set. Create a form in Formspree and pass its id into this page.</p>
        )}
      </div>

      <div className="rounded-lg overflow-hidden shadow">
        <iframe
          title="CBM Services Location"
          src="https://www.google.com/maps?q=Muraqqabat+Deira+Dubai&output=embed"
          className="w-full h-96 border-0"
        />
      </div>
    </div>
  );
}
