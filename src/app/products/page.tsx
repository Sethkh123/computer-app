"use client";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-4">🛒 All Products</h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Explore our full range of <span className="font-semibold text-blue-500">laptops</span>,{" "}
          <span className="font-semibold text-purple-500">desktops</span>, and{" "}
          <span className="font-semibold text-green-500">accessories</span>.
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        <Link
          href="/products/laptops"
          className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-bold mb-2 text-blue-500">⚡ Laptops</h2>
          <p className="text-gray-600">High-performance laptops for gaming, work, and study.</p>
        </Link>

        <Link
          href="/products/desktops"
          className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-bold mb-2 text-purple-500">🖥️ Desktops</h2>
          <p className="text-gray-600">Reliable desktops for gaming, creation, and office work.</p>
        </Link>

        <Link
          href="/products/accessories"
          className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform flex flex-col items-center text-center"
        >
          <h2 className="text-xl font-bold mb-2 text-green-500">🎧 Accessories</h2>
          <p className="text-gray-600">Keyboards, mice, headsets, and all the essentials.</p>
        </Link>
      </div>
    </div>
  );
}
