import React, { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerFine, setIsPointerFine] = useState(false);

  // Mouse position motion values
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth physics springs for trailing outer ring
  const springConfig = { damping: 25, stiffness: 250 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable custom cursor on fine pointer devices (desktop mouse)
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsPointerFine(hasFinePointer);

    if (!hasFinePointer) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a, button, input, textarea, [role='button'], .glass-card, .group")
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isPointerFine || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Spring Magnetic Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-400/60 shadow-[0_0_15px_rgba(19,185,253,0.5)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "rgba(19, 185, 253, 0.15)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Inner Precision Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-[#0468D7] shadow-[0_0_10px_rgba(19,185,253,0.9)] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovered ? 0.6 : 1,
        }}
      />
    </div>
  );
};
