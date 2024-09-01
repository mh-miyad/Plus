"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import img1 from "../../../public/m-1.png";
import img2 from "../../../public/m-2.png";
import img3 from "../../../public/m-3.svg";
import img4 from "../../../public/m-4.png";

gsap.registerPlugin(ScrollTrigger);
const Marquee = () => {
  const [isRotating, setIsRotating] = useState(true);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      setIsRotating(e.deltaY <= 0);
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      const totalWidth = marquee.scrollWidth / 2;

      const animation = gsap.fromTo(
        marquee,
        { x: 0 }, // Start position
        {
          x: isRotating ? -totalWidth : totalWidth, // End position
          modifiers: {
            x: (x) => `${parseFloat(x) % totalWidth}px`,
          },
          duration: 40,
          ease: "linear",
          repeat: -1,
        }
      );

      // Target the wrapper for ScrollTrigger

      return () => {
        animation.kill(); // Cleanup on unmount
      };
    }
  }, [isRotating]);

  return (
    <section className="overflow-hidden">
      <div className="main-marquee rotate-0">
        {/* Added a wrapper for scrolling content */}
        <div className="marquee-wrapper">
          <div ref={marqueeRef} className="flex space-x-20">
            {[
              img1,
              img2,
              img3,
              img4,
              img1,
              img2,
              img3,
              img4,
              img3,
              img4,
              img1,
              img2,
              img3,
              img4,
            ].map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="h-10 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
