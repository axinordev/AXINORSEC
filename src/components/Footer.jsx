import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import fb from "../assets/fb.png"
import tel from "../assets/tel.png"
import insta from "../assets/insta.png"
import fig from "../assets/fig.png"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top CTA Section */}
    <div className="bg-gradient-to-r from-[#186EB4]/15 via-[#2FA2D0]/15 to-[#55F4FC]/15 py-8 px-12 md:px-16 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-36">
        {/* Left Text */}
        <div className="md:w-1/2">
            <h2 className="text-[38px] font-bold pl-10 font-montserrat leading-tight">
            How to choose <br /> cybersecurity solution
            </h2>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 pl-10 flex flex-col md:items-left">
            <p className="text-gray-300 font-lato text-[14px] md:text-[26px] mb-6">
            Having difficulties choosing the right solution for your business?
            </p>
            <div className="flex gap-4">
            <button className="bg-[#54F4FC] font-montserrat text-black font-semibold text-[12px] uppercase px-5 py-4 rounded-md hover:bg-[#54F4FC] transition">
                Book an Appointment
            </button>
            <button className="border border-[#54F4FC] font-montserrat text-white text-[12px] uppercase px-5 py-4 rounded-md hover:bg-[#54F4FC] hover:text-black transition">
                Talk with Us
            </button>
            </div>
        </div>
    </div>


      {/* Main Footer Links */}
      <div className="py-12 px-6 md:px-16 lg:px-24 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-800">
        <div>
          <h3 className="text-lg font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li>Application Services</li>
            <li>Security Servers</li>
            <li>Security Firewalls</li>
            <li>Cloud Services</li>
            <li>Integrations</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Partners</h3>
          <ul className="space-y-2 text-gray-400 text-base">
            <li>Amazon</li>
            <li>Figma</li>
            <li>Twitter</li>
            <li>CloudRail-IIOT</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-400 text-base">
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
          <ul className="space-y-2 text-gray-400 text-base">
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Teams</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col sm:flex-row items-center justify-between py-6 px-6 md:px-16 lg:px-20 border-t border-gray-800">
        <p className="text-gray-500 text-sm">© 2025 All Rights Reserved</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={fb} alt="fb" className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={tel} alt="tel" className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={insta} alt="insta" className="w-8 h-8" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <img src={fig} alt="fig" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
}
