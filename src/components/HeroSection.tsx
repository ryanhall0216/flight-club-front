import React from "react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[340px] md:min-h-[480px] flex items-center justify-center bg-black font-regular">
      {/* Background image */}
      <img
        src="/images/atlanta_star-metals-8_sm.jpg"
        srcSet="/images/atlanta_star-metals-8_sm.jpg 1x, /images/atlanta_star-metals-8.webp 2x"
        alt="Flight Club venue"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      {/* Venue selector and arrows */}
      <div className="relative z-20 flex flex-col items-center w-full px-4">
        <div className="flex items-center justify-center w-full max-w-2xl mx-auto mt-16 md:mt-24">
          {/* Left arrow */}
          <button className="hidden md:block text-white text-3xl px-4 focus:outline-none opacity-70 hover:opacity-100 transition font-bold">&#60;</button>
          {/* Select your venue */}
          <div className="flex flex-col items-center w-full">
            <span className="text-white text-lg md:text-2xl font-regular tracking-wide mb-2">SELECT YOUR VENUE</span>
            <span className="text-white text-2xl md:text-4xl font-black tracking-wider">&#x25BC;</span>
          </div>
          {/* Right arrow */}
          <button className="hidden md:block text-white text-3xl px-4 focus:outline-none opacity-70 hover:opacity-100 transition font-bold">&#62;</button>
        </div>
      </div>
    </section>
  );
}
