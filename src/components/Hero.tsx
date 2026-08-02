import { useState, useEffect, useRef } from "react";
import { Github, Linkedin, Facebook, Sparkles, Code2, Smartphone, Flame, Cpu, Terminal, Layers, Globe, CheckCircle2, Play } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Hero = () => {
  const roles = ["Flutter AI Engineer", "Mobile App Specialist", "UI/UX & Prototyping Dev"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Build step state for live Flutter compilation animation (0: Compiling, 1: Assembling Widgets, 2: App Live)
  const [buildStep, setBuildStep] = useState(0);

  // Cycle build steps endlessly (Compiling -> Widget Assembly -> App Live -> Repeat)
  useEffect(() => {
    const interval = setInterval(() => {
      setBuildStep((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // Hero Mouse Parallax Tilt for 3D Scene
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const heroRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const heroRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleHeroPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleHeroPointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Typewriter effect for roles
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length - 1));
        }, 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    } else {
      if (currentText.length < currentRole.length) {
        timeout = setTimeout(() => {
          setCurrentText(currentRole.substring(0, currentText.length + 1));
        }, 80);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={heroRef}
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-hud-grid perspective-1000"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-primary/10 rounded-full blur-[140px] z-0" />
      <div className="pointer-events-none absolute bottom-10 right-10 w-[380px] h-[380px] bg-cyan-500/10 rounded-full blur-[120px] z-0" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(19,185,253,0.15)]">
              <Sparkles size={14} className="animate-spin text-cyan-400" style={{ animationDuration: "6s" }} />
              Next-Gen Flutter Experience
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text drop-shadow-[0_0_25px_rgba(19,185,253,0.3)]">
                Kh Faiaz Hasan
              </span>
            </h1>

            {/* Typewriter Role Title */}
            <div className="h-10 sm:h-12 mb-3 flex items-center justify-center lg:justify-start">
              <p className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono flex items-center gap-1">
                <span>{currentText}</span>
                <span className="inline-block w-0.5 h-7 bg-cyan-400 animate-pulse" />
              </p>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Building beautiful, production-ready mobile apps
            </p>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2.5 mb-9 justify-center lg:justify-start">
              {["Flutter", "Dart", "UI/UX", "Firebase", "CI/CD"].map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * idx, duration: 0.4 }}
                  className="px-4 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-sm font-semibold hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-[0_0_10px_rgba(19,185,253,0.1)]"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-9 justify-center lg:justify-start">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                size="lg"
                className="bg-gradient-to-r from-[#0468D7] to-[#13B9FD] text-white font-bold shadow-[0_0_25px_rgba(19,185,253,0.4)] hover:shadow-[0_0_35px_rgba(19,185,253,0.6)] transition-all duration-300 hover:scale-105 rounded-xl px-8"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-primary/40 text-primary bg-primary/5 hover:bg-primary/20 hover:border-primary font-semibold transition-all duration-300 rounded-xl px-8"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/faiaz5415"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/faiazhasan5/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.facebook.com/faiazz39/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Profile"
                className="p-3.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <Facebook size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: REAL 3D Hero Centerpiece Phone Mockup featuring LIVE FLUTTER APP COMPILATION & ASSEMBLY */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 order-1 lg:order-2 flex justify-center items-center relative preserve-3d py-12"
          >
            {/* 3D Scene Wrapper with Mouse Parallax & Continuous 3D Idle Float */}
            <motion.div
              style={{
                rotateX: heroRotateX,
                rotateY: heroRotateY,
                transformStyle: "preserve-3d",
              }}
              className="relative w-[280px] sm:w-[320px] preserve-3d animate-[float3D_7s_ease-in-out_infinite]"
            >
              {/* Outer Neon Spatial Aura */}
              <div className="absolute -inset-6 bg-gradient-to-r from-[#0468D7] via-[#13B9FD] to-purple-600 rounded-[3rem] blur-3xl opacity-35 animate-pulseGlow pointer-events-none" />

              {/* 3D Phone Mockup Container */}
              <div className="relative w-full rounded-[2.5rem] border-4 border-white/20 bg-[#0A0E17] p-3.5 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl preserve-3d">
                {/* Dynamic Island Notch */}
                <div className="w-24 h-4 bg-black rounded-full mx-auto mb-3 flex items-center justify-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-500/80 animate-ping" />
                  <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
                </div>

                {/* Phone Screen: LIVE FLUTTER APP BUILD & COMPILATION PROCESS ANIMATION */}
                <div className="aspect-[9/18] w-full rounded-[1.8rem] bg-gradient-to-b from-[#05080f] via-[#0a0e17] to-[#0f172a] border border-white/10 p-4 flex flex-col justify-between overflow-hidden relative shadow-inner">
                  {/* Top Compiler Header Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                    <div className="flex items-center gap-2 text-cyan-300">
                      <Terminal size={14} className="text-cyan-400 animate-pulse" />
                      <span className="font-bold">FLUTTER ENGINE</span>
                    </div>
                    <span className="text-[10px] text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                      {buildStep === 0 ? "Compiling..." : buildStep === 1 ? "Assembling UI" : "Build 100% OK"}
                    </span>
                  </div>

                  {/* Dynamic Compilation & App Assembly Stages */}
                  <div className="my-auto py-2 space-y-3">
                    {buildStep === 0 && (
                      <motion.div
                        key="step0"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2 text-left"
                      >
                        <div className="bg-black/60 border border-white/10 p-3 rounded-xl font-mono text-[11px] space-y-1 text-cyan-300">
                          <p className="text-emerald-400">&gt; flutter build apk --release</p>
                          <p className="text-muted-foreground">&gt; Parsing Dart AST &amp; MVVM...</p>
                          <p className="text-purple-300">&gt; Wiring Dio, RxDart &amp; Firebase</p>
                          <p className="text-cyan-400 animate-pulse">&gt; Compiling native binaries...</p>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-[10px] font-mono text-cyan-300">
                            <span>Compilation Progress</span>
                            <span>88%</span>
                          </div>
                          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "10%" }}
                              animate={{ width: "95%" }}
                              transition={{ duration: 3, ease: "easeInOut" }}
                              className="h-full bg-gradient-to-r from-primary to-cyan-400 rounded-full"
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {buildStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-2 text-left font-mono"
                      >
                        <p className="text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1">
                          <Layers size={12} /> Assembling Widget Tree:
                        </p>

                        {/* Animated Flutter Widget Stack Assembly */}
                        <div className="space-y-1.5 text-xs">
                          <div className="p-2 rounded-xl bg-primary/10 border border-primary/40 text-cyan-300 flex items-center justify-between shadow-sm">
                            <span className="font-bold">&lt;MaterialApp&gt;</span>
                            <span className="text-[10px] text-emerald-400">Mounted</span>
                          </div>
                          <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200 flex items-center justify-between shadow-sm pl-4">
                            <span className="font-bold">&lt;Scaffold &amp; Provider&gt;</span>
                            <span className="text-[10px] text-cyan-400">Active</span>
                          </div>
                          <div className="p-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300 flex items-center justify-between shadow-sm pl-6">
                            <span className="font-bold">&lt;StreamBuilder AI&gt;</span>
                            <span className="text-[10px] text-purple-400">Reactive</span>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {buildStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="space-y-3 text-left"
                      >
                        {/* Live Compiled App UI */}
                        <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-primary/10 to-cyan-500/10 border border-emerald-500/40 shadow-lg text-center space-y-2">
                          <div className="inline-flex p-2 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                            <CheckCircle2 size={24} />
                          </div>
                          <h4 className="font-bold text-sm text-foreground">Flutter App Live!</h4>
                          <p className="text-[11px] text-cyan-300 font-mono">60 FPS • Seamless UI/UX</p>
                        </div>

                        {/* Live Developer Badge */}
                        <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2 rounded-xl">
                          <img
                            src={profileImage}
                            alt="Kh Faiaz Hasan"
                            className="w-8 h-8 rounded-full object-cover border border-cyan-400"
                          />
                          <div>
                            <p className="text-xs font-bold text-foreground">Kh Faiaz Hasan</p>
                            <p className="text-[10px] text-cyan-400 font-mono">Flutter AI Developer</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Bottom Status Runner */}
                  <div className="bg-white/5 border border-white/10 rounded-full px-3 py-1.5 flex items-center justify-between text-xs text-muted-foreground font-mono">
                    <span className="flex items-center gap-1.5 text-cyan-300">
                      <Play size={10} className="text-emerald-400 animate-pulse" />
                      App State: Ready
                    </span>
                    <span className="text-[10px] text-emerald-400 font-bold">60 FPS</span>
                  </div>
                </div>
              </div>

              {/* ------------------- PROPERLY OUTWARD POSITIONED 3D CHIPS (NO CLIPPING) ------------------- */}
              {/* Badge 1: Top Left */}
              <div
                className="absolute -top-6 -left-16 sm:-left-24 bg-[#0A0E17]/90 backdrop-blur-xl border border-cyan-400/50 px-3.5 py-2 rounded-xl text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(19,185,253,0.3)] flex items-center gap-2 animate-[float3D_5s_ease-in-out_infinite] preserve-3d"
                style={{ transform: "translateZ(50px)" }}
              >
                <Smartphone size={15} className="text-cyan-400" />
                <span>Flutter v3.x</span>
              </div>

              {/* Badge 2: Top Right */}
              <div
                className="absolute -top-4 -right-16 sm:-right-24 bg-[#0A0E17]/90 backdrop-blur-xl border border-purple-500/50 px-3.5 py-2 rounded-xl text-xs font-mono text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] flex items-center gap-2 animate-[float3D_6s_ease-in-out_infinite_1s] preserve-3d"
                style={{ transform: "translateZ(65px)" }}
              >
                <Code2 size={15} className="text-purple-400" />
                <span>Dart &amp; AI</span>
              </div>

              {/* Badge 3: Middle Left */}
              <div
                className="absolute top-1/3 -left-20 sm:-left-28 bg-[#0A0E17]/90 backdrop-blur-xl border border-sky-400/50 px-3.5 py-2 rounded-xl text-xs font-mono text-sky-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] flex items-center gap-2 animate-[float3D_5.5s_ease-in-out_infinite_0.5s] preserve-3d"
                style={{ transform: "translateZ(60px)" }}
              >
                <Layers size={15} className="text-sky-400" />
                <span>MVVM Arch</span>
              </div>

              {/* Badge 4: Middle Right */}
              <div
                className="absolute top-1/3 -right-20 sm:-right-28 bg-[#0A0E17]/90 backdrop-blur-xl border border-amber-500/50 px-3.5 py-2 rounded-xl text-xs font-mono text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2 animate-[float3D_6.2s_ease-in-out_infinite_1.2s] preserve-3d"
                style={{ transform: "translateZ(55px)" }}
              >
                <Flame size={15} className="text-amber-400" />
                <span>Firebase Auth</span>
              </div>

              {/* Badge 5: Bottom Left */}
              <div
                className="absolute -bottom-6 -left-16 sm:-left-24 bg-[#0A0E17]/90 backdrop-blur-xl border border-teal-400/50 px-3.5 py-2 rounded-xl text-xs font-mono text-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.3)] flex items-center gap-2 animate-[float3D_5.8s_ease-in-out_infinite_0.8s] preserve-3d"
                style={{ transform: "translateZ(45px)" }}
              >
                <Globe size={15} className="text-teal-400" />
                <span>Dio Networking</span>
              </div>

              {/* Badge 6: Bottom Right */}
              <div
                className="absolute -bottom-4 -right-16 sm:-right-24 bg-[#0A0E17]/90 backdrop-blur-xl border border-emerald-500/50 px-3.5 py-2 rounded-xl text-xs font-mono text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center gap-2 animate-[float3D_6.5s_ease-in-out_infinite_1.5s] preserve-3d"
                style={{ transform: "translateZ(70px)" }}
              >
                <Cpu size={15} className="text-emerald-400" />
                <span>REST / SSE</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* 3D Keyframe Idle Animation */}
      <style>{`
        @keyframes float3D {
          0%, 100% { transform: translateY(0px) rotateY(-6deg) rotateX(3deg); }
          50% { transform: translateY(-12px) rotateY(6deg) rotateX(-3deg); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
