'use client';

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">WeighSoft</span>
              <div className="h-10 w-auto sm:h-12 flex items-center font-bold text-2xl text-blue-700">
                WeighSoft
              </div>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white p-2 rounded-md inline-flex items-center justify-center text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
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
            </button>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link href="/products" className="text-base font-medium text-gray-700 hover:text-blue-700">
              Products
            </Link>
            <Link href="/pricing" className="text-base font-medium text-gray-700 hover:text-blue-700">
              Pricing
            </Link>
            <Link href="/about" className="text-base font-medium text-gray-700 hover:text-blue-700">
              About Us
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-700 hover:text-blue-700">
              Contact
            </Link>
          </nav>
          
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/contact" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700">
              Request Demo
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-bold text-xl text-blue-700">WeighSoft</span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg
                      className="h-6 w-6"
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
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/products" className="text-base font-medium text-gray-900 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
                    Products
                  </Link>
                  <Link href="/pricing" className="text-base font-medium text-gray-900 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link href="/about" className="text-base font-medium text-gray-900 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
                    About Us
                  </Link>
                  <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-blue-700" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <Link href="/contact" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700" onClick={() => setIsMenuOpen(false)}>
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 