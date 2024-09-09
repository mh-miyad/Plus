"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";
const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
};

export default LenisProvider;
