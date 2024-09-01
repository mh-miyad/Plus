"use client";
import { useEffect, useRef } from "react";

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLElement>(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current || undefined,
        smooth: true,
      });
    })();
  }, []);

  return (
    <>
      <main data-scroll-container ref={scrollRef}>
        {children}
      </main>
    </>
  );
};

export default LenisProvider;
