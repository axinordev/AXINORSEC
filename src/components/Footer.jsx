import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top CTA Section */}
<div className="bg-gradient-to-r from-[#186EB4]/15 via-[#2FA2D0]/15 to-[#55F4FC]/15 py-12 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center justify-between gap-8">
  {/* Left Text */}
  <div className="md:w-1/2">
    <h2 className="text-[40px] font-bold font-montserrat leading-tight">
      How to choose <br /> cybersecurity solution
    </h2>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 flex flex-col md:items-end">
    <p className="text-gray-300 font-lato text-[18px] md:text-[20px] mb-4">
      Having difficulties choosing the right solution for your business?
    </p>
    <div className="flex gap-4">
      <button className="bg-cyan-400 text-black font-semibold text-[12px] uppercase px-5 py-2 rounded-md hover:bg-cyan-300 transition">
        Book an Appointment
      </button>
      <button className="border border-cyan-400 text-white text-[12px] uppercase px-5 py-2 rounded-md hover:bg-cyan-400 hover:text-black transition">
        Talk with Us
      </button>
    </div>
  </div>
</div>


      {/* Main Footer Links */}
      <div className="py-12 px-6 md:px-16 lg:px-24 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-800">
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Application Services</li>
            <li>Security Servers</li>
            <li>Security Firewalls</li>
            <li>Cloud Services</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Partners</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Amazon</li>
            <li>Figma</li>
            <li>Twitter</li>
            <li>CloudFlareHOT</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Academy</li>
            <li>Blog</li>
            <li>Themes</li>
            <li>Hosting</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-6 px-6 md:px-16 lg:px-24 border-t border-gray-800">
        <p className="text-gray-500 text-sm">© 2025 All Rights Reserved</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <FaFacebookF />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
