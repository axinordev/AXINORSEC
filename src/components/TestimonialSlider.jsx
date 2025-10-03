import React, { useState } from "react";
import avatar from "../assets/avatar.png"; // make sure assets contains the testimonial image

const testimonials = [
  {
    quote: `“By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”`,
    name: "Alberto Flores",
    role: "IT Director",
    image: avatar, // replace with your image name in assets
  },
  {
    quote: `“Ironvelo’s platform gave us the scalability we needed. Transaction speed improved dramatically, and our customer satisfaction scores went up.”`,
    name: "Sophia Patel",
    role: "Head of Payments",
    image: avatar,
  },
  {
    quote: `“The integration was seamless. Our team was able to get everything running in days instead of weeks, saving valuable development time.”`,
    name: "Michael Chen",
    role: "Engineering Manager",
    image: avatar,
  },
  {
    quote: `“With Ironvelo, our fraud detection rates improved significantly, reducing chargebacks and boosting customer trust.”`,
    name: "Emma Rodriguez",
    role: "Risk & Compliance Lead",
    image: avatar,
  },
  {
    quote: `“By working with Ironvelo, we processed more payments, increased authorization rates by 10 to 15 percentage points, increased revenue by 5% to 7%, and reduced PCI scope.”`,
    name: "Alberto Flores",
    role: "IT Director",
    image: avatar,
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="bg-black text-white flex flex-col items-center justify-center min-h-[80vh] px-2 pt-20">
      <h2 className="text-[36px] font-montserrat font-semibold mb-8">Customer Testimonials</h2>

      {/* Quote */}
      <p className="text-lg md:text-[40px] font-montserrat font-light text-[#54F4FC] text-center max-w-5xl mb-8 leading-relaxed">
        {testimonials[current].quote}
      </p>

      {/* Profile */}
      <div className="flex flex-col items-center">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
          className="w-16 h-16 rounded-full mb-3"
        />
        <h3 className="font-semibold">{testimonials[current].name}</h3>
        <p className="text-sm text-gray-400">{testimonials[current].role}</p>
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-4 mt-6 mb-16">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-4 h-4 rounded-full ${
              index === current ? "bg-cyan-400" : "bg-[#54F4FC4D]"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
