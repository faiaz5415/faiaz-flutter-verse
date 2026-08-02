import { useRef, useState, useEffect, CSSProperties } from "react";
import { useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";

interface UseTiltEffectOptions {
  maxTilt?: number; // Max tilt angle in degrees (default 8)
  scaleOnHover?: number; // Scale on hover (default 1.02)
  stiffness?: number;
  damping?: number;
  disableOnMobile?: boolean;
}

export function useTiltEffect<T extends HTMLElement = HTMLDivElement>({
  maxTilt = 8,
  scaleOnHover = 1.02,
  stiffness = 180,
  damping = 18,
  disableOnMobile = true,
}: UseTiltEffectOptions = {}) {
  const containerRef = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [canTilt, setCanTilt] = useState(true);

  // Raw mouse coordinates normalized (-0.5 to 0.5)
  const xNorm = useMotionValue(0);
  const yNorm = useMotionValue(0);

  // Mouse pixel position relative to card top-left
  const mouseXPx = useMotionValue(0);
  const mouseYPx = useMotionValue(0);

  // Spring physics configuration
  const springConfig = { stiffness, damping, mass: 0.5 };

  // Calculate rotateX and rotateY based on normalized mouse coords
  const rotateX = useSpring(useTransform(yNorm, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(xNorm, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);
  const scale = useSpring(isHovered ? scaleOnHover : 1, { stiffness: 220, damping: 20 });

  // Dynamic reactive shadow displacement opposite to tilt angle
  const shadowX = useSpring(useTransform(rotateY, [-maxTilt, maxTilt], [12, -12]), springConfig);
  const shadowY = useSpring(useTransform(rotateX, [-maxTilt, maxTilt], [-12, 12]), springConfig);

  useEffect(() => {
    // Check if device supports fine hover pointer and reduced motion
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if ((disableOnMobile && !hasFinePointer) || prefersReducedMotion) {
      setCanTilt(false);
    } else {
      setCanTilt(true);
    }
  }, [disableOnMobile]);

  const handlePointerMove = (e: React.PointerEvent<T>) => {
    if (!containerRef.current || !canTilt) return;

    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to container
    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;

    // Set normalized coords (-0.5 to 0.5)
    xNorm.set(xPos / width - 0.5);
    yNorm.set(yPos / height - 0.5);

    // Set pixel coords for spotlight gradient
    mouseXPx.set(xPos);
    mouseYPx.set(yPos);

    // Set CSS custom properties on container for CSS-driven spotlight/shaders
    containerRef.current.style.setProperty("--mx", `${xPos}px`);
    containerRef.current.style.setProperty("--my", `${yPos}px`);
  };

  const handlePointerEnter = () => {
    setIsHovered(true);
  };

  const handlePointerLeave = () => {
    setIsHovered(false);
    xNorm.set(0);
    yNorm.set(0);
  };

  return {
    containerRef,
    isHovered,
    canTilt,
    rotateX: canTilt ? rotateX : 0,
    rotateY: canTilt ? rotateY : 0,
    scale,
    shadowX,
    shadowY,
    mouseX: mouseXPx,
    mouseY: mouseYPx,
    eventHandlers: {
      onPointerMove: handlePointerMove,
      onPointerEnter: handlePointerEnter,
      onPointerLeave: handlePointerLeave,
    },
  };
}
