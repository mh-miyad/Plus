"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const StatusMarquee = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMarquee = () => {
      const marquee = marqueeRef.current;
      if (!marquee) return;

      let velocity = 20;
      let offset = 0;
      let rowWidth = 0;

      const marqueeItems = gsap.utils.toArray<HTMLDivElement>(
        ".about-hero__marquee-item"
      );

      // Calculate the total width of the marquee row
      marqueeItems.forEach((item) => {
        rowWidth += item.getBoundingClientRect().width;
      });

      // Animation loop for each item
      marqueeItems.forEach((item) => {
        const itemWidth = item.getBoundingClientRect().width;

        // Reset item positions
        gsap.set(item, { x: 0 });

        let tl = gsap.timeline({ repeat: -1 });

        // Animate item to the end of the row
        tl.to(item, {
          ease: "none",
          duration: (rowWidth - offset - itemWidth) / velocity,
          x: rowWidth - offset - itemWidth,
        });

        // Send item to the beginning
        tl.to(item, {
          ease: "none",
          duration: 0,
          x: (offset + itemWidth) * -1,
        });

        // Animate item back to its original position
        tl.to(item, {
          ease: "none",
          duration: (offset + itemWidth) / velocity,
          x: 0,
        });

        offset += itemWidth;
      });
    };

    initMarquee();

    // Handle window resize
    const handleResize = () => {
      clearTimeout(timer);
      timer = setTimeout(initMarquee, 500);
    };

    let timer: any;
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="about-hero  py-32 min-h-3/4-screen flex items-center">
      <div className="about-hero__content w-full">
        <div
          ref={marqueeRef}
          className="about-hero__marquee w-full overflow-hidden"
        >
          <div className="about-hero__marquee-row flex">
            <div className="about-hero__marquee-item px-8">
              Bespoke Designer
            </div>
            <div className="about-hero__marquee-item about-hero__marquee-item--stroke px-8">
              Web Developer
            </div>
            <div className="about-hero__marquee-item px-8">Awwwards Judge</div>
            <div className="about-hero__marquee-item about-hero__marquee-item--stroke px-8">
              Digital Artist
            </div>
            <div className="about-hero__marquee-item px-8">Storyteller</div>
            <div className="about-hero__marquee-item about-hero__marquee-item--stroke px-8">
              Dribbbler
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatusMarquee;
