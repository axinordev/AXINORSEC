import React from "react";
import lock from "../assets/lock.svg";
import globe from "../assets/globe.svg";
import key from "../assets/key.svg";
import user from "../assets/user.svg";
import idea from "../assets/idea.svg"; 
import cloud from "../assets/cloud.svg";

const services = [
  {
    image: lock,
    title: "Endpoint Security Solutions",
    description:
      "Protect your devices and networks from malware, ransomware, and other cyber threats with our comprehensive endpoint security solutions. Safeguard sensitive data and ensure business continuity with real-time threat detection and response.",
  },
  {
    image: globe,
    title: "Network Security Solutions",
    description:
      "Secure your network infrastructure from unauthorized access and data breaches with our advanced network security solutions. Defend against evolving cyber threats and maintain network integrity with robust firewalls.",
  },
  {
    image: key,
    title: "Data Encryption Services",
    description:
      "Encrypt sensitive data at rest and in transit to protect confidentiality and integrity. Our data encryption services provide reliable solutions to safeguard your most valuable assets from unauthorized access and cyber attacks.",
  },
  {
    image: user,
    title: "Incident Response and Forensics",
    description:
      "Rapidly detect, respond to, and recover from security incidents with our incident response and forensic services. Minimize the impact of cyber threats and maintain business continuity with our expert team of cybersecurity professionals.",
  },
  {
    image: idea,
    title: "Security Awareness Training",
    description:
      "Empower your employees with the knowledge and skills to recognize and prevent cyber threats. Our security awareness training programs educate your workforce on cybersecurity best practices, reducing the risk of human error and strengthening your overall security posture.",
  },
  {
    image: cloud,
    title: "Cloud Security Solutions",
    description:
      "Secure your cloud-based applications and data storage with industry-leading cloud security solutions. Ensure confidentiality, integrity, and availability in the cloud environment with advanced security measures tailored to your specific needs.",
  },
];

export default function Services() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-12 lg:px-20">
      {/* Heading */}
      <h2 className="text-[40px] font-bold font-montserrat text-center mb-14">
        Services we offer
      </h2>

      {/* Services Grid (2 columns) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-2xl p-[2px] bg-gradient-to-r from-[#55F4FC] to-[#186EB4]"
          >
            <div className="bg-black rounded-2xl px-10 py-16 h-full">
              <div className="mb-5 flex justify-center">
                <img src={service.image} alt={service.title} className="w-14 h-14" /> 
              </div>
              <h3 className="text-[23px] font-montserrat font-semibold text-cyan-400 text-center mb-4">
                {service.title}
              </h3>
              <p className="text-white font-light p-4 font-lato text-xl leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
