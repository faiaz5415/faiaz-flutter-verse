import React from "react";
import { motion, useTransform } from "framer-motion";
import { useTiltEffect } from "@/hooks/useTiltEffect";
import { cn } from "@/lib/utils";

interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  tiltAmount?: number;
  contentDepth?: number; // Z-depth translation in px (default 35)
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = "",
  glowColor = "rgba(19, 185, 253, 0.15)",
  tiltAmount = 8,
  contentDepth = 35,
  ...props
}) => {
  const {
    containerRef,
    isHovered,
    canTilt,
    rotateX,
    rotateY,
    scale,
    shadowX,
    shadowY,
    mouseX,
    mouseY,
    eventHandlers,
  } = useTiltEffect<HTMLDivElement>({
    maxTilt: tiltAmount,
    scaleOnHover: 1.02,
  });

  // Spotlight background driven by mouseX / mouseY motion values
  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${glowColor}, transparent 50%)`
  );

  return (
    <div className="perspective-1000 h-full w-full">
      <motion.div
        ref={containerRef}
        {...eventHandlers}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        className={cn(
          "relative h-full w-full rounded-2xl glass-card transition-colors duration-300 overflow-hidden group border border-white/10 preserve-3d",
          isHovered ? "border-primary/50 shadow-[0_20px_40px_-15px_rgba(19,185,253,0.3)]" : "shadow-card",
          className
        )}
        {...(props as any)}
      >
        {/* Cursor Spotlight Glow Overlay */}
        {canTilt && (
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            style={{
              background: spotlightBg,
            }}
          />
        )}

        {/* Animated Gradient Outer Border on Hover */}
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl p-[1px] transition-opacity duration-300 z-20",
            isHovered ? "opacity-100" : "opacity-0"
          )}
          style={{
            background:
              "linear-gradient(135deg, rgba(19, 185, 253, 0.7) 0%, rgba(4, 104, 215, 0.2) 50%, rgba(123, 44, 191, 0.7) 100%)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Inner Content Layer translated on Z-axis for genuine 3D spatial depth */}
        <div
          className="relative z-30 h-full w-full preserve-3d transition-transform duration-300"
          style={{
            transform: isHovered ? `translateZ(${contentDepth}px)` : "translateZ(0px)",
          }}
        >
          {children}
        </div>
      </motion.div>
    </div>
  );
};
