"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import img1 from "../../../public/m-1.png";
import img2 from "../../../public/m-2.png";
import img3 from "../../../public/m-3.svg";
import img4 from "../../../public/m-4.png";

const Marquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    if (marqueeElement) {
      const items = marqueeElement.querySelectorAll(".marquee-item");
      const totalWidth = Array.from(items).reduce((acc, item) => {
        return acc + item.clientWidth;
      }, 0);

      gsap.set(marqueeElement, {
        width: totalWidth * 2,
      });

      const clonedItems = Array.from(items).forEach((item) => {
        marqueeElement.appendChild(item.cloneNode(true));
      });

      gsap.to(marqueeElement, {
        x: `-${totalWidth}px`,
        duration: 10,
        ease: "linear",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      });
    }
  }, []);

  return (
    <section className="w-full flex items-center h-screen">
      <div className="w-full overflow-hidden bg-white">
        <div className="flex items-center h-full gap-10" ref={marqueeRef}>
          {images.map((image, index) => (
            <div key={index} className="marquee-item w-64 lg:h-24 h-full">
              <Image
                src={image}
                alt={`Brand ${index + 1}`}
                className="object-contain size-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Marquee;
