import React from "react";
import { Smartphone, Code2, Flame, Bot, Globe, Layers } from "lucide-react";

export const SkillCube: React.FC = () => {
  const faces = [
    {
      name: "Flutter",
      sub: "Mobile App Framework",
      icon: Smartphone,
      color: "from-cyan-500/20 to-blue-600/20 border-cyan-400/50 text-cyan-300",
      transform: "rotateY(0deg) translateZ(88px)",
    },
    {
      name: "Dart",
      sub: "OOP & Null Safety",
      icon: Code2,
      color: "from-blue-500/20 to-teal-500/20 border-teal-400/50 text-teal-300",
      transform: "rotateY(180deg) translateZ(88px)",
    },
    {
      name: "Firebase",
      sub: "Auth & Firestore",
      icon: Flame,
      color: "from-amber-500/20 to-orange-600/20 border-amber-400/50 text-amber-300",
      transform: "rotateY(90deg) translateZ(88px)",
    },
    {
      name: "AI & SSE",
      sub: "Generative Streaming",
      icon: Bot,
      color: "from-purple-500/20 to-pink-600/20 border-purple-400/50 text-purple-300",
      transform: "rotateY(-90deg) translateZ(88px)",
    },
    {
      name: "REST APIs",
      sub: "Dio & RxDart",
      icon: Globe,
      color: "from-emerald-500/20 to-cyan-600/20 border-emerald-400/50 text-emerald-300",
      transform: "rotateX(90deg) translateZ(88px)",
    },
    {
      name: "State Mgmt",
      sub: "Provider, GetX & BLoC",
      icon: Layers,
      color: "from-sky-500/20 to-indigo-600/20 border-sky-400/50 text-sky-300",
      transform: "rotateX(-90deg) translateZ(88px)",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <div className="perspective-1000 w-44 h-44 my-4">
        {/* Spinning Cube Container */}
        <div
          className="w-full h-full relative preserve-3d animate-[spinCube_20s_linear_infinite] hover:[animation-play-state:paused]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {faces.map((face, index) => {
            const Icon = face.icon;
            return (
              <div
                key={index}
                className={`absolute inset-0 w-44 h-44 rounded-2xl glass-card border backdrop-blur-md bg-[#0A0E17]/80 flex flex-col items-center justify-center p-4 text-center shadow-[0_0_25px_rgba(19,185,253,0.15)] bg-gradient-to-br ${face.color} preserve-3d`}
                style={{
                  transform: face.transform,
                  backfaceVisibility: "visible",
                }}
              >
                <div className="p-3 rounded-xl bg-white/10 border border-white/20 mb-2 shadow-lg">
                  <Icon size={28} />
                </div>
                <h4 className="font-bold text-base text-foreground tracking-wide">{face.name}</h4>
                <p className="text-[11px] text-muted-foreground font-mono mt-0.5">{face.sub}</p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs font-mono text-cyan-400/80 mt-3 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        Interactive 3D Skill Geometry (Hover to Pause)
      </p>

      {/* Keyframe animation injected for 3D Cube Rotation */}
      <style>{`
        @keyframes spinCube {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg); }
        }
      `}</style>
    </div>
  );
};
