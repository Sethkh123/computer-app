"use client";

import Image from "next/image";

// Laptop type
export type Laptop = {
  id: number;
  name: string;
  price: number;
  description: string;
  specs: {
    processor: string;
    graphics: string;
    ram: string;
    storage: string;
    display: string;
  };
  image: string;
};

// Props for LaptopCart
type LaptopCartProps = {
  laptop: Laptop;
  addToCart: (laptop: Laptop) => void;
};

export default function LaptopCart({ laptop, addToCart }: LaptopCartProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition transform flex flex-col">
      {/* Image */}
      <div className="h-40 w-full relative rounded-lg mb-4 overflow-hidden">
        <Image src={laptop.image} alt={laptop.name} fill className="object-cover rounded-lg" />
      </div>

      {/* Laptop Info */}
      <h2 className="text-xl font-bold mb-2 text-blue-600">{laptop.name}</h2>
      <p className="text-gray-600 mb-4">{laptop.description}</p>

      {/* Specs */}
      <div className="mb-4 text-sm text-gray-500">
        <div className="font-semibold mb-1">Specs:</div>
        <ul className="space-y-1">
          <li>CPU: {laptop.specs.processor}</li>
          <li>GPU: {laptop.specs.graphics}</li>
          <li>RAM: {laptop.specs.ram}</li>
          <li>Storage: {laptop.specs.storage}</li>
          <li>Display: {laptop.specs.display}</li>
        </ul>
      </div>

      {/* Price & Add to Cart */}
      <div className="mt-auto flex justify-between items-center">
        <p className="font-semibold text-blue-600">${laptop.price}</p>
        <button
          onClick={() => addToCart(laptop)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition font-semibold flex items-center gap-2"
        >
          Add to Cart 🛒
        </button>
      </div>
    </div>
  );
}

// Full laptops array
export const laptops: Laptop[] = [
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
  {
    id: 4,
    name: 'Creator Laptop 17"',
    price: 2899,
    description: "For designers and video editors who need power.",
    specs: {
      processor: "Intel i9-12900H",
      graphics: "NVIDIA RTX 3080 Ti 16GB",
      ram: "32GB DDR5",
      storage: "2TB NVMe SSD",
      display: '17.3" 4K 120Hz',
    },
    image: "/images/laptops/creator-laptop-17.jpg",
  },
  {
    id: 5,
    name: "Student Essential",
    price: 499,
    description: "Affordable yet capable for everyday tasks.",
    specs: {
      processor: "AMD Ryzen 5 7520U",
      graphics: "AMD Radeon",
      ram: "16GB DDR5",
      storage: "512GB NVMe SSD",
      display: '15.6" FHD 60Hz',
    },
    image: "/images/laptops/student-essential.jpg",
  },
  {
    id: 6,
    name: "Business Elite",
    price: 2099,
    description: "Premium security and performance for professionals.",
    specs: {
      processor: "AMD Ryzen™ AI 9 HX 370",
      graphics: " AMD Radeon™ 860M",
      ram: "64GB LPDDR5",
      storage: "2TB NVMe SSD",
      display: '16" 4K Touchscreen',
    },
    image: "/images/laptops/Business-elite.jpg",
  },
];
