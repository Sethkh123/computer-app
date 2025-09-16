"use client";

import { useState } from "react";
import Image from "next/image";

export default function CartPage() {
  // Combined products: laptops, desktops, accessories
  const products = [
    // Laptops
    {
      id: 1,
      name: "Gaming Pro Laptop",
      price: 1499,
      description: "High-performance laptop for gaming and streaming.",
      specs: {
        processor: "Intel i9-14900HX",
        graphics: "NVIDIA RTX 4060 8GB",
        ram: "16GB DDR5",
        storage: "1TB NVMe SSD",
        display: '15.6" FHD 240Hz',
      },
      image: "/images/laptops/gaming laptop.jpg",
    },
    {
      id: 2,
      name: "Ultrabook X",
      price: 799,
      description: "Slim, lightweight, and powerful for work and play.",
      specs: {
        processor: "Intel i5-1240P",
        graphics: "Intel Iris Xe",
        ram: "8GB LPDDR4",
        storage: "512GB NVMe SSD",
        display: '14" QHD 90Hz',
      },
      image: "/images/laptops/ultrabook-x.jpg",
    },
    {
      id: 3,
      name: 'Laptop Gamer 15"',
      price: 1199,
      description: "15-inch display, RTX graphics, perfect for gamers.",
      specs: {
        processor: "AMD Ryzen 7 6800H",
        graphics: "NVIDIA RTX 3060 6GB",
        ram: "16GB DDR5",
        storage: "1TB NVMe SSD",
        display: '15.6" QHD 165Hz',
      },
      image: "/images/laptops/laptop-gamer-15.jpg",
    },
    // Desktops
    {
      id: 4,
      name: "Titan Gaming Tower",
      price: 1999,
      specs: "CPU: Intel i9-12900K, GPU: RTX 3080 10G, RAM: 32GB DDR5, Storage: 1TB NVMe SSD, PSU: 850W, Cooling: Liquid",
      description: "High-end gaming desktop with extreme performance for AAA games at 4K.",
      image: "/images/desktops/titan.jpg"
    },
    {
      id: 5,
      name: "Nova Workstation X",
      price: 1599,
      specs: "CPU: Intel i9-12900K, GPU: RTX 3070 8G, RAM: 64GB DDR4, Storage: 2TB NVMe SSD, PSU: 650W, Cooling: Air + Liquid",
      description: "Powerful workstation for 3D rendering, video editing, and heavy multitasking.",
      image: "/images/desktops/Nova.jpg"
    },
    {
      id: 6,
      name: "Phantom Pro Gamer",
      price: 1099,
      specs: "CPU: AMD Ryzen 7 5800X, GPU: RTX 3070, RAM: 32GB DDR4, Storage: 1TB NVMe SSD + 2TB HDD, PSU: 750W, Cooling: Air",
      description: "Balanced gaming desktop for high FPS esports and AAA titles.",
      image: "/images/desktops/gamer.jpg"
    },
    // Accessories
    {
      id: 7,
      name: "Pro Gaming Mouse",
      price: 79,
      description: "Ergonomic gaming mouse with 16000 DPI and RGB lighting.",
      image: "/images/accessories/pro.jpg",
    },
    {
      id: 8,
      name: "Mechanical Keyboard",
      price: 129,
      description: "Durable mechanical keyboard with customizable RGB backlight.",
      image: "/images/accessories/key.jpg",
    },
    {
      id: 9,
      name: "Gaming Headset",
      price: 99,
      description: "7.1 surround sound headset with noise-cancelling mic.",
      image: "/images/accessories/head.jpg",
    },
    {
      id: 10,
      name: "HD Webcam",
      price: 59,
      description: "1080p webcam with autofocus and low-light correction.",
      image: "/images/accessories/webcam.jpg",
    },
  ];

  // Cart state
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  const addToCart = (id: number) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const increase = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((sum, c) => {
    const product = products.find((p) => p.id === c.id);
    return sum + (product?.price || 0) * c.quantity;
  }, 0);

  return (
    <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-700">
        🛒 Shop Cart
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-all"
          >
            <Image
              src={p.image}
              alt={p.name}
              width={250}
              height={150}
              className="rounded mb-2"
            />
            <h2 className="font-bold text-lg">{p.name}</h2>
            <p className="text-gray-600">${p.price}</p>
            <p className="text-sm text-gray-500">{p.description}</p>
            <button
              className="mt-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
              onClick={() => addToCart(p.id)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Items */}
      <div className="bg-white p-6 rounded-lg shadow">
        {cart.length === 0 && (
          <p className="text-gray-500 text-center">Your cart is empty!</p>
        )}

        {cart.map((c) => {
          const product = products.find((p) => p.id === c.id);
          if (!product) return null;
          return (
            <div
              key={c.id}
              className="flex items-center justify-between border-b py-2"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={50}
                  className="rounded"
                />
                <div>
                  <h3 className="font-bold">{product.name}</h3>
                  <p>${product.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => decrease(c.id)}
                    >
                      -
                    </button>
                    <span>{c.quantity}</span>
                    <button
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => increase(c.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p>${product.price * c.quantity}</p>
                <button
                  className="text-red-500 mt-1 hover:underline"
                  onClick={() => removeFromCart(c.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}

        {cart.length > 0 && (
          <div className="mt-4 text-right font-bold text-lg">
            Total: ${totalPrice}
          </div>
        )}
      </div>
    </div>
  );
}
