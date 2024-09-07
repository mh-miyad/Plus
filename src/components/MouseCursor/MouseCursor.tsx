"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isHovering = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Move the cursor element with GSAP
  useEffect(() => {
    if (!isHovering.current) {
      gsap.to(cursorRef.current, {
        x: mousePosition.x - 10, // Adjust based on cursor size
        y: mousePosition.y - 10, // Adjust based on cursor size
        ease: "power3.out",
        duration: 0.3,
      });
    }
  }, [mousePosition]);

  return (
    <>
      <div
        className="size-6 bg-black opacity-35 fixed top-0 left-0 rounded-full z-10"
        ref={mouseRef}
        id="mouse"
      ></div>
    </>
  );
};

export default MouseCursor;
