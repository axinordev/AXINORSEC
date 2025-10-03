import React from "react";

// Import your SVGs from assets
import youtube from "../assets/youtube.svg";
import nike from "../assets/nike.png";
import apple from "../assets/apple.svg";
import bbc from "../assets/bbc.svg";
import slack from "../assets/slack.svg";
import zoom from "../assets/zoom.svg";
import adobe from "../assets/adobe.svg";

export default function AboutUs() {
  return (
    <section className="bg-black text-white py-12 px-4 md:px-8 lg:px-12">
      {/* Top text */}
      <p className="text-gray-400 font-montserrat text-center text-sm md:text-base mb-4">
        We are providing cybersecurity services to some of the World's leading companies
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 mt-5">
        <img src={youtube} alt="YouTube" className="w-10 md:w-12" />
        <img src={nike} alt="Nike" className="w-10 md:w-12" />
        <img src={apple} alt="Apple" className="w-8 md:w-10" />
        <img src={bbc} alt="BBC" className="w-14 md:w-18" />
        <img src={slack} alt="Slack" className="w-12 md:w-12" />
        <img src={zoom} alt="Zoom" className="w-14 md:w-18" />
        <img src={adobe} alt="Adobe" className="w-12 md:w-14" />
      </div>

      {/* About Text */}
      <div className="max-w-5xl mx-auto text-center mb-10 mt-12">
        <p className="text-gray-300 font-montserrat text-center text-base md:text-lg leading-relaxed">
          At <span className="text-cyan-400 font-semibold">Ironvelo</span>, we're dedicated to 
          protecting businesses and individuals from the ever-evolving threats 
          in the digital landscape. With <span className="italic">7+ years</span> of experience in 
          the cybersecurity industry, we have honed our expertise to deliver 
          innovative solutions that safeguard your digital assets and maintain 
          your peace of mind.
        </p>
      </div>

      {/* Stats Box */}
      <div className="bg-gradient-to-r text-black font-montserrat from-[#54F4FC] via-[#C6F0FF] to-[#176DB4] rounded-3xl max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center py-6 px-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">10+</h2>
          <p className="text-base md:text-lg mt-1">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">900+</h2>
          <p className="text-base md:text-lg mt-1">Satisfied Customers</p>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">99%</h2>
          <p className="text-base md:text-lg mt-1">Cybersecurity Guarantee</p>
        </div>
      </div>
    </section>
  );
}
