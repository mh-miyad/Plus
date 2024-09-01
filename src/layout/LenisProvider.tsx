"use client";
import { useEffect, useRef } from "react";

const LenisProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLElement>(null);
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({});
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
