import React from "react";

export const Flutter3DBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Ambient Background Glow Nodes */}
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px]" />
    </div>
  );
};
