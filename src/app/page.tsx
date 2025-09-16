import "./globals.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center text-center px-6">
      {/* Hero Section */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-6 drop-shadow-md">
        💻 Welcome to <span className="text-blue-600">Computer Shop</span>
      </h1>
<p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-8">
  Find the best{" "}
  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
    laptops
  </span>
  ,{" "}
  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    desktops
  </span>
  , and{" "}
  <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-500 to-teal-500">
    accessories
  </span>{" "}
  at unbeatable prices.
</p>
      {/* Buttons */}
      <div className="flex gap-4">
        <Link
          href="/products"
          className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 shadow-lg transition"
        >
          🛒 Shop Now
        </Link>
        <Link
          href="/about"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 shadow-lg transition"
        >
          ℹ️ Learn More
        </Link>
      </div>

      {/* Featured Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
       <Link
  href="/products/laptops"
  className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform block"
>
  <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-blue-500">
    ⚡ Gaming Laptops
  </h2>
  <p className="text-gray-600">
    Powerful machines built for speed and performance.
  </p>
</Link>

<Link
  href="/products/desktops"
  className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform block"
>
  <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-blue-500">
    🖥️ Desktops
  </h2>
  <p className="text-gray-600">
    Reliable desktops for work, gaming, or everyday use.
  </p>
</Link>

<Link
  href="/products/accessories"
  className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition-transform block"
>
  <h2 className="text-xl font-bold mb-2 flex items-center gap-2 text-blue-500">
    🎧 Accessories
  </h2>
  <p className="text-gray-600">
    Keyboards, mice, headsets, and everything you need.
  </p>
</Link>

      </div>
    </div>
  );
}
