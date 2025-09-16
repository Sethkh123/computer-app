"use client";
import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to API
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12 flex flex-col items-center">
      
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-6 drop-shadow-md">
        📬 Contact <span className="text-blue-600">Us</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 text-center">
        Have questions or need assistance? Fill out the form below and our support team will get back to you as soon as possible.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full flex flex-col gap-4"
      >
        {submitted && (
          <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-center">
            Your message has been sent!
          </div>
        )}

        <label className="flex flex-col text-gray-700 font-semibold">
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-gray-700 font-semibold">
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-gray-700 font-semibold">
          Message
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="mt-2 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition"
        >
          Send Message
        </button>
      </form>

      {/* Contact Info */}
      <div className="mt-12 max-w-2xl text-gray-700 text-center space-y-2">
        <p>📧 Email: pisethkh1688@gmail.com</p>
        <p>📞 Phone: +855 975800972</p>
        <p>🏢 Address: Phnom Penh, Boeng Salang, Street 372, Cambodia</p>

        {/* Social Links */}
        <div className="mt-4 flex justify-center gap-6">
          <a
            href="https://www.facebook.com/share/1CBchMWZgo/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-semibold"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/norng.piseth.9?igsh=bnZxdG01Z2NoMHlz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:underline font-semibold"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
}
