"use client";

import { useState } from "react";

interface Accessory {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
}

const accessories: Accessory[] = [
  {
    id: 1,
    name: "Pro Gaming Mouse",
    price: "$79",
    description: "Ergonomic gaming mouse with 16000 DPI and RGB lighting.",
    image: "/images/accessories/pro.jpg",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: "$129",
    description: "Durable mechanical keyboard with customizable RGB backlight.",
    image: "/images/accessories/key.jpg",
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: "$99",
    description: "7.1 surround sound headset with noise-cancelling mic.",
    image: "/images/accessories/head.jpg",
  },
  {
    id: 4,
    name: "HD Webcam",
    price: "$59",
    description: "1080p webcam with autofocus and low-light correction.",
    image: "/images/accessories/webcam.jpg",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: "$49",
    description: "7-in-1 USB-C hub with HDMI, USB 3.0, SD card reader.",
    image: "/images/accessories/usb c.jpg",
  },
  {
    id: 6,
    name: "Wireless Mouse Pad",
    price: "$39",
    description: "Large RGB mouse pad with wireless charging for compatible devices.",
    image: "/images/accessories/pad.jpg",
  },
];

export default function AccessoriesPage() {
  const [cartItems, setCartItems] = useState<Accessory[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddToCart = (item: Accessory) => {
    setCartItems((prev) => [...prev, item]);
    setNotification(`${item.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => {
    const priceNum = Number(item.price.replace("$", ""));
    return total + priceNum;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-6 py-12">
      {/* Notification */}
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
          {notification}
        </div>
      )}

      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-purple-400 drop-shadow-lg">
          🎮 Gaming Accessories
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Enhance your setup with <span className="font-semibold text-blue-400">gaming peripherals</span> and <span className="font-semibold text-green-400">must-have accessories</span>.
        </p>
      </div>

      {/* Accessories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {accessories.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform flex flex-col items-center text-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-48 h-32 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-xl mb-2 text-purple-300">{item.name}</h3>
            <p className="text-gray-300 mb-2 italic">{item.description}</p>
            <p className="font-semibold text-green-400 mb-4">{item.price}</p>
            <button
              onClick={() => handleAddToCart(item)}
              className="bg-purple-500 hover:bg-purple-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Mini Cart Sidebar */}
      <div className="fixed top-16 right-4 bg-gray-800 text-gray-100 p-4 rounded-lg shadow-lg w-64 max-h-[80vh] overflow-auto">
        <h3 className="font-bold text-lg mb-2 text-purple-400">🛒 Cart ({cartItems.length})</h3>
        {cartItems.length === 0 && <p className="text-gray-400">No items yet</p>}
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center gap-2 mb-2">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-green-400">{item.price}</p>
            </div>
            <button
              onClick={() => handleRemoveFromCart(item.id)}
              className="text-red-500 font-bold text-sm hover:text-red-400"
            >
              ✕
            </button>
          </div>
        ))}
        {cartItems.length > 0 && (
          <p className="mt-2 font-semibold text-green-400">Total: ${totalPrice}</p>
        )}
      </div>
    </div>
  );
}
