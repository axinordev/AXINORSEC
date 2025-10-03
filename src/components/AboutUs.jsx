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
    <section className="bg-black text-white py-16 px-6 md:px-12 lg:px-12">
      {/* Top text */}
      <p className="text-gray-400 font-montserrat text-center text-base mb-6">
        We are providing cybersecurity services to some of the World's leading companies
      </p>

      {/* Logos */}
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12">
        <img src={youtube} alt="YouTube" className="" />
        <img src={nike} alt="Nike" className="" />
        <img src={apple} alt="Apple" className="" />
        <img src={bbc} alt="BBC" className="" />
        <img src={slack} alt="Slack" className="" />
        <img src={zoom} alt="Zoom" className="" />
        <img src={adobe} alt="Adobe" className="" />
      </div>

      {/* About Text */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <p className="text-gray-300 font-montserrat text-center text-[21px] leading-relaxed">
          At <span className="text-cyan-400 font-semibold">Ironvelo</span>, we're dedicated to 
          protecting businesses and individuals from the ever-evolving threats 
          in the digital landscape. With <span className="italic">10+ years</span> of experience in 
          the cybersecurity industry, we have honed our expertise to deliver 
          innovative solutions that safeguard your digital assets and maintain 
          your peace of mind.
        </p>
      </div>

      {/* Stats Box */}
      <div className="bg-gradient-to-r text-black font-montserrat from-[#54F4FC] via-[#C6F0FF] to-[#176DB4] rounded-[40px] max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center py-8 px-10">
        <div>
          <h2 className="text-5xl font-bold">10+</h2>
          <p className="text-xl mt-2">Years of Experience</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">900+</h2>
          <p className="text-xl mt-2">Satisfied Customers</p>
        </div>
        <div>
          <h2 className="text-5xl font-bold">99%</h2>
          <p className="text-xl mt-2">Cybersecurity Guarantee</p>
        </div>
      </div>
    </section>
  );
}
