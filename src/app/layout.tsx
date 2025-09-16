import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Shop",
  description: "Best computers, laptops, and accessories online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <div className="flex flex-col min-h-screen">

          {/* Header */}
          <header className="bg-blue-600 text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center px-6 py-4">
              {/* Logo */}
              <h1 className="text-2xl font-bold">
                <Link href="/">💻 ComputerShop</Link>
              </h1>

              {/* Navigation */}
              <nav className="hidden md:flex space-x-6 font-medium">
                <Link href="/" className="hover:text-yellow-300">Home</Link>
                <Link href="/products" className="hover:text-yellow-300">Products</Link>
                <Link href="/about" className="hover:text-yellow-300">About</Link>
                <Link href="/contact" className="hover:text-yellow-300">Contact</Link>
              </nav>

              {/* Cart */}
              <Link
                href="/cart"
                className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition"
              >
                🛒 Cart
              </Link>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 container mx-auto px-6 py-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-gray-800 text-gray-300 py-6 mt-auto">
            <div className="container mx-auto text-center text-sm">
              <p>© {new Date().getFullYear()} ComputerShop. All rights reserved.</p>
              <p className="mt-2">
                Built with <span className="text-blue-400 font-semibold">Next.js</span> + <span className="text-yellow-300 font-semibold">TailwindCSS</span>
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
