"use client";

import LaptopCart, { laptops, Laptop } from "./LaptopCart";
import { useState } from "react";

export default function LaptopsPage() {
  const [cart, setCart] = useState<Laptop[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const addToCart = (laptop: Laptop) => {
    setCart([...cart, laptop]);
    setNotification(`${laptop.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Header */}
      <div className="p-10 text-center">
    <h1 className="text-5xl font-extrabold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
  ⚡ Gaming & High-Performance Laptops
</h1>
        <p className="mt-4 text-gray-700 text-lg max-w-2xl mx-auto">
          Find the best <span className="font-semibold text-blue-500">laptops</span>,{" "}
          <span className="font-semibold text-purple-500">desktops</span>, and{" "}
          <span className="font-semibold text-green-500">accessories</span> at unbeatable prices.
        </p>
      </div>

      {/* Laptops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
        {laptops.map((laptop) => (
          <LaptopCart key={laptop.id} laptop={laptop} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
