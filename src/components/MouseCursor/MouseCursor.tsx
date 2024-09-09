"use client";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
const MouseCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const mouseRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Add event listener to track mouse movement
    window.addEventListener("mousemove", handleMouseMove);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePosition]);

  // Move the cursor element with GSAP
  useEffect(() => {
    gsap.to(mouseRef.current, {
      x: mousePosition.x - 10, // Adjust based on cursor size
      y: mousePosition.y - 10, // Adjust based on cursor size
      ease: "power3.out",
      duration: 0.3,
    });
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
