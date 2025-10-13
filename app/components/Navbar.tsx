"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="bg-stone-500 flex items-center justify-center h-10">
        <h1 className="cursor-pointer text-white">
          <a href="#account">Free shipping all over the country up to $1000</a>
        </h1>
      </div>

      <nav className="bg-white text-black text-xl shadow-md">
        <div className="p-4 flex justify-between items-center">
          <div className="flex gap-8 items-center">
            <Link href="/shop" className="hover:text-stone-400 transition">
              Shop
            </Link>

            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-stone-400 transition flex items-center gap-1 cursor-pointer"
              >
                <a href="#about">About </a>
                <span className="ml-1 inline-block">{isOpen ? "▲" : "▼"}</span>
              </button>

              {isOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-44 z-50">
                  <ul className="flex flex-col text-base">
                    <li className="px-4 py-2 hover:bg-pink-100">
                      <Link href="/about/our-story">Our Story</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-pink-100">
                      <Link href="/about/our-team">Our Team</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-pink-100">
                      <Link href="/about/our-mission">Our Mission</Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <h1 className="text-2xl font-bold">
            <Link href="/home">Makeup Glow💄</Link>
          </h1>

          <div className="flex gap-6 items-center">
            <Link
              href="/contact"
              className="border border-pink-200 px-5 py-1 rounded-full hover:bg-red-400 hover:text-white transition text-lg"
            >
              Contact
            </Link>

            <Link
              href="/account"
              className="border border-pink-300 px-5 py-1 rounded-full hover:bg-red-500 hover:text-white transition text-lg"
            >
              Account
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
