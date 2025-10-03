import React from "react";
import shield from "../assets/cyber_security.svg";
import corner from "../assets/corner.svg";

const Hero = () => {
  return (
    <section className="bg-black text-white min-h-screen flex items-center pl-6 md:pl-16 pr-0 ">
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 relative">
        
        {/* Left Content with Bracket */}
        <div className="flex-1 relative z-30  md:-mr-16 w-full bg-transparent">
          {/* Bracket-like vertical line */}
          <div className="absolute top-10 -left-4 h-[67%] w-10 border-l border-t border-b border-gray-600"></div>

          <div className="pl-10 z-20 w-full">
            <h1 className="text-3xl md:text-[45px] font-semibold leading-snug font-montserrat">
              Comprehensive{" "}
              <span className="text-[#FF0004]">Cybersecurity</span> Strategies
              <br /> for Growth and Resilience
            </h1>
            <p className="text-gray-400 mt-10 text-lg max-w-lg font-lato">
              Unlock your business's full potential with our comprehensive
              cybersecurity strategies. Safeguard your growth and resilience in
              the digital age.
            </p>

            <div className="mt-10 flex gap-4">
              <button className="px-6 py-3 font-montserrat bg-[#0BF3FF] text-black font-semibold rounded-md hover:bg-[#0BF3FF] transition">
                LEARN MORE
              </button>
              <button className="px-6 py-3 font-montserrat border border-[#0BF3FF] text-[#0BF3FF] font-semibold rounded-md hover:bg-[#0BF3FF] hover:text-black transition">
                TALK WITH US
              </button>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex-1 flex justify-center items-center overflow-hidden">
          {/* First shield */}
          <img
            src={shield}
            alt="Cybersecurity Shield"
            className=" h-full relative z-10 -left-20"
          />

          {/* Second shield, shifted right */}
          <img
            src={shield}
            alt="Cybersecurity Shield duplicate"
            className=" absolute left-1/2 translate-x-1/3 opacity-90"
          />

          {/* Corner Elements */}
          <img src={corner} alt="corner" className="absolute top-0 left-48 w-8 md:w-6" />
          <img src={corner} alt="corner" className="absolute top-0 right-10 w-8 md:w-6 rotate-90" />
          <img src={corner} alt="corner" className="absolute bottom-0 left-48 w-8 md:w-6 -rotate-90" />
          <img src={corner} alt="corner" className="absolute bottom-0 right-10 w-8 md:w-6 rotate-180" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
