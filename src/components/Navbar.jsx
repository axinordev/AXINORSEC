import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-cyan-400">Iron</span>
        </div>

        {/* Menu */}
        <ul className="flex space-x-8 text-sm font-medium">
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Pricing
            </a>
          </li>
          <li className="relative group">
            <a href="#" className="hover:text-cyan-400 transition flex items-center">
              Features
              <span className="ml-1 text-xs">▾</span>
            </a>
            {/* Dropdown (optional) */}
            <ul className="absolute left-0 mt-2 hidden w-40 bg-black border border-gray-800 rounded-md group-hover:block">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-800 hover:text-cyan-400"
                >
                  Feature 1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-800 hover:text-cyan-400"
                >
                  Feature 2
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Support
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-cyan-400 transition">
              Partners
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
