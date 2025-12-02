'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 navbar navbar-enter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Logo Icon - Three pillars/torches */}
              <div className="flex items-center space-x-1 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/finalize logo no bggg.svg"
                  alt="Gilgamax Logo"
                  width={160}
                  height={160}
                  className="object-contain h-18 w-18 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-30 lg:w-30"
                  priority
                />
              </div>
              {/* Logo Text */}
              {/* <span className="text-[#d3d2cf] text-xl font-bold tracking-wide navbar-logo group-hover:text-blue-400 transition-colors duration-300">
                GILGAMAX
              </span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline">
              <Link
                href="/"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                About
              </Link>
              <Link
                href="/Operations"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                Services
              </Link>
              <Link
                href="/KawaTheBlacksmith"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                The Ember Crown
              </Link>
              <Link
                href="/GilgamaxUniverce"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                Gilgamax Cinematic Universe (GCU)
              </Link>
              <Link
                href="/Team"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                Team
              </Link>
              <Link
                href="/Contact"
                className="navbar-link text-[#d3d2cf] px-3 py-2 text-sm font-medium"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-[#d3d2cf] hover:text-[#d3d2cf] inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#d3d2cf]"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/80 backdrop-blur-lg border-t border-gray-800 text-[#d3d2cf]">
          <Link
            href="/"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/Operations"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Operations
          </Link>
          <Link
            href="/KawaTheBlacksmith"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Kawa The Blacksmith
          </Link>
          <Link
            href="/GilgamaxUniverce"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Gilgamax Cinematic Universe (GCU)
          </Link>
          <Link
            href="/Team"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            href="/Contact"
            className="navbar-link text-[#d3d2cf] block px-3 py-2 text-base font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
