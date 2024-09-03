"use client";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const StackingCards = () => {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });

    cardRefs.current.forEach((card, index) => {
      if (card) {
        // Check if card is not null
        tl.to(
          card,
          {
            y: -index * 20,
            rotation: index * 5,
            opacity: 1,
          },
          `-=${index * 0.4}`
        );
      }
    });
  }, []);

  return (
    <div className="stacking-cards">
      {[1, 2, 3].map((item, index) => (
        <div
          key={index}
          className="stacking-main-card opacity-0"
          ref={(el) => {
            cardRefs.current[index] = el;
          }}
        >
          Card {item}
        </div>
      ))}
    </div>
  );
};

export default StackingCards;
