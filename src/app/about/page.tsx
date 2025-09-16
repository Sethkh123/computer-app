"use client";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-12 flex flex-col items-center text-center">
      
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 mb-6 drop-shadow-md">
         About Computer Shop
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed">
        Welcome to <span className="font-semibold text-blue-600">Computer Shop</span> — your trusted source for{" "}
        <span className="font-semibold text-purple-600">gaming rigs</span>,{" "}
        <span className="font-semibold text-green-600">professional workstations</span>, and{" "}
        <span className="font-semibold text-pink-600">everyday essentials</span>.  
        Our mission is simple: to deliver powerful, reliable, and affordable tech with top-notch service.
      </p>

      {/* Call to Action */}
      <Link
        href="/products"
        className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-semibold shadow-lg transition transform hover:scale-105"
      >
        🛒 Start Shopping
      </Link>

      {/* Mission Section */}
      <div className="mt-20 max-w-4xl text-left">
        <h2 className="text-3xl font-bold text-indigo-700 mb-4 text-center">🎯 Our Mission</h2>
        <p className="text-gray-700 mb-10 text-center">
          To empower gamers, creators, students, and professionals with cutting-edge computers and accessories.  
          We believe in innovation, quality, and creating an easy, enjoyable shopping journey for everyone.
        </p>

        {/* Why Choose Us - Grid */}
        <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">✨ Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">💻 Wide Product Range</h3>
            <p>From gaming laptops to business desktops, we have the perfect solution for every need.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">💲 Competitive Prices</h3>
            <p>Enjoy affordable deals and regular discounts without compromising on quality.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">🤝 Expert Support</h3>
            <p>Our team is here to help you choose the right product and provide after-sales support.</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Fast & Reliable</h3>
            <p>Quick delivery, secure payments, and hassle-free returns for peace of mind.</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-10 py-12 rounded-2xl shadow-xl text-center max-w-3xl">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Setup?</h2>
        <p className="mb-6">Browse our collection and find the perfect laptop, desktop, or accessory today.</p>
        <Link
          href="/products"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-100 transition"
        >
          🚀 Explore Products
        </Link>
      </div>
    </div>
  );
}
