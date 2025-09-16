"use client";

import { useState } from "react";

interface Desktop {
  id: number;
  name: string;
  price: string;
  specs: string;
  description: string;
  image: string;
}

const desktops: Desktop[] = [
  {
    id: 1,
    name: "Titan Gaming Tower",
    price: "$1,999",
    specs: "CPU: Intel i9-12900K, GPU: RTX 3080 10G, RAM: 32GB DDR5, Storage: 1TB NVMe SSD, PSU: 850W, Cooling: Liquid",
    description: "High-end gaming desktop with extreme performance for AAA games at 4K.",
    image: "/images/desktops/titan.jpg"
  },
  {
    id: 2,
    name: "Nova Workstation X",
    price: "$1,599",
    specs: "CPU: Intel i9-12900K, GPU: RTX 3070 8G, RAM: 64GB DDR4, Storage: 2TB NVMe SSD, PSU: 650W, Cooling: Air + Liquid",
    description: "Powerful workstation for 3D rendering, video editing, and heavy multitasking.",
    image: "/images/desktops/Nova.jpg"
  },
  {
    id: 3,
    name: "Phantom Pro Gamer",
    price: "$1,099",
    specs: "CPU: AMD Ryzen 7 5800X, GPU: RTX 3070, RAM: 32GB DDR4, Storage: 1TB NVMe SSD + 2TB HDD, PSU: 750W, Cooling: Air",
    description: "Balanced gaming desktop for high FPS esports and AAA titles.",
    image: "/images/desktops/gamer.jpg"
  },
  {
    id: 4,
    name: "Creator Studio 17",
    price: "$1,799",
    specs: "CPU: Intel i9-13900K, GPU: RTX 4080, RAM: 128GB DDR5, Storage: 4TB NVMe SSD, PSU: 1000W, Cooling: Liquid",
    description: "Ultimate desktop for creators: video editing, 3D modeling, and content creation.",
    image: "/images/desktops/creator.jpg"
  },
  {
    id: 5,
    name: "Student Mini Tower",
    price: "$299",
    specs: "CPU: Intel i3-12100, GPU: Integrated, RAM: 8GB DDR4, Storage: 256GB SSD, PSU: 450W, Cooling: Air",
    description: "Compact and affordable desktop for studying, office work, and light tasks.",
    image: "/images/desktops/student.jpg"
  },
  {
    id: 6,
    name: "Business Elite PC",
    price: "$599",
    specs: "CPU: Intel i7-12700, GPU: Integrated, RAM: 16GB DDR4, Storage: 512GB NVMe SSD, PSU: 600W, Cooling: Air",
    description: "Reliable desktop for business productivity, office tasks, and remote work.",
    image: "/images/desktops/business.jpg"
  },
];

export default function DesktopsPage() {
  // Local cart state
  const [cartItems, setCartItems] = useState<Desktop[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  const handleAddToCart = (desktop: Desktop) => {
    setCartItems((prev) => [...prev, desktop]);
    setNotification(`${desktop.name} added to cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

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
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-cyan-400 drop-shadow-lg">
          🖥️ Ultimate Desktops
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
          Power, speed, and reliability — desktops built for{" "}
          <span className="font-semibold text-blue-400">gaming</span>,{" "}
          <span className="font-semibold text-purple-400">creation</span>, and{" "}
          <span className="font-semibold text-green-400">professional work</span>.
        </p>
      </div>

      {/* Desktops Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {desktops.map((desktop) => (
          <div
            key={desktop.id}
            className="bg-gray-800 rounded-xl shadow-lg p-6 hover:scale-105 transition-transform flex flex-col items-center text-center"
          >
            <img
              src={desktop.image}
              alt={desktop.name}
              className="w-48 h-32 object-cover rounded-md mb-4"
            />
            <h3 className="font-bold text-xl mb-2 text-cyan-300">{desktop.name}</h3>
            <p className="text-gray-400 mb-2">{desktop.specs}</p>
            <p className="text-gray-300 mb-2 italic">{desktop.description}</p>
            <p className="font-semibold text-green-400 mb-4">{desktop.price}</p>
            <button
              onClick={() => handleAddToCart(desktop)}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-900 px-4 py-2 rounded-lg font-semibold transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Mini Cart */}
      <div className="fixed top-16 right-4 bg-gray-800 text-gray-100 p-4 rounded-lg shadow-lg w-64 max-h-[80vh] overflow-auto">
        <h3 className="font-bold text-lg mb-2 text-cyan-400">🛒 Cart ({cartItems.length})</h3>
        {cartItems.length === 0 && <p className="text-gray-400">No items yet</p>}
        {cartItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2 mb-2">
            <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
            <div className="flex-1">
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs text-green-400">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
