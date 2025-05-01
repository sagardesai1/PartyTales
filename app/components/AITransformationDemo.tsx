"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const AITransformationDemo = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const container = e.currentTarget.getBoundingClientRect();
      const position = ((e.clientX - container.left) / container.width) * 100;
      setSliderPosition(Math.min(Math.max(position, 0), 100));
    }
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleGlobalMouseUp);
    return () => window.removeEventListener("mouseup", handleGlobalMouseUp);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Watch the Magic Happen! ✨
          </h2>
          <p className="text-gray-600 text-lg">
            See how we transform your photos into magical Pixar-style
            invitations
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Image Comparison Slider */}
          <div
            className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg mb-12 select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onTouchStart={handleMouseDown}
            onTouchEnd={handleMouseUp}
          >
            {/* Base Image (Original) */}
            <Image
              src="/Kofi.jpg"
              alt="Pixar-style photo"
              fill
              className="object-cover"
            />

            {/* Overlay Image (Original) with draggable reveal */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`,
              }}
            >
              <Image
                src="/child.jpg"
                alt="Original photo"
                fill
                className="object-cover"
              />
            </div>

            {/* Draggable Slider Line */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-col-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.25 12h7.5M12.75 16.5l4.5-4.5-4.5-4.5"
                  />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-white">Magical E-invite</p>
              <p className="text-white">Original Photo</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button className="bg-black hover:bg-black/90 font-bold py-4 px-8 rounded-full text-lg transition-all transform hover:scale-105 shadow-lg text-white">
              Create Your Magical Invitation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITransformationDemo;
