"use client"; // Required for using React hooks like useState

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-[#0157e9] shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="w-16 h-16 relative">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/prime-h51r5w.appspot.com/o/Screenshot_from_2025-01-20_11-51-17-removebg-preview.png?alt=media&token=97f39f60-b6e5-422b-9732-83e0cd7c5161"
              alt="Gala Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/hotels" className="text-white hover:text-gray-200 transition-colors">
                Hotels
              </Link>
            </li>
            <li>
              <Link href="/resorts" className="text-white hover:text-gray-200 transition-colors">
                Resorts
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </nav>

        {/* Sign In and Sign Up Buttons (Desktop) */}
        <div className="hidden md:flex">
          <Link href="/auth">
            <Button variant="outline" className="mr-2 bg-transparent text-white border-white hover:bg-white hover:text-[#0157e9]">
              Sign In
            </Button>
          </Link>
          <Link href="/auth?mode=signup">
            <Button className="bg-white text-[#0157e9] hover:bg-gray-100">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-[#0157e9] shadow-lg z-50">
            <nav className="px-4 py-2">
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link href="/" className="text-white hover:text-gray-200 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/hotels" className="text-white hover:text-gray-200 transition-colors">
                    Hotels
                  </Link>
                </li>
                <li>
                  <Link href="/resorts" className="text-white hover:text-gray-200 transition-colors">
                    Resorts
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white hover:text-gray-200 transition-colors">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="px-4 py-2 border-t border-gray-200">
              <Link href="/auth" className="w-full mb-2">
                <Button variant="outline" className="w-full bg-transparent text-white border-white hover:bg-white hover:text-[#0157e9]">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth?mode=signup" className="w-full">
                <Button className="w-full bg-white text-[#0157e9] hover:bg-gray-100">Sign Up</Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
