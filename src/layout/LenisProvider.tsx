"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLElement>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll: any = new LocomotiveScroll({
        // Configure Locomotive Scroll options as needed
        // For example:
        // classes: {
        //   scrollContainer: "scroll-container",
        //   item: "scroll-item",
        //   smooth: "smooth",
        // },
        // ...other options
      });

      locomotiveScroll.on("scroll", () => {
        ScrollTrigger.refresh(); // Update ScrollTrigger after Locomotive Scroll updates
      });

      scrollRef.current?.addEventListener("wheel", (e) => {
        // Prevent default scrolling behavior if Locomotive Scroll is handling it
        if (locomotiveScroll.options.smoothScroll) {
          e.preventDefault();
        }
      });
    })();
  }, []);

  return (
    <main data-scroll-container ref={scrollRef}>
      {children}
    </main>
  );
};

export default LenisProvider;
