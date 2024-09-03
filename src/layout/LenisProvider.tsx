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
      const locomotiveScroll: any = new LocomotiveScroll({});

      locomotiveScroll.on("scroll", () => {
        ScrollTrigger.refresh();
      });

      scrollRef.current?.addEventListener("wheel", (e) => {
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
