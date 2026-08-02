import { TiltCard } from "./ui/TiltCard";
import { SkillCube } from "./ui/SkillCube";
import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      category: "Core Technologies",
      skills: ["Flutter", "Dart", "Android Studio", "Figma"],
    },
    {
      category: "State Management",
      skills: ["Provider", "GetX", "BLoC"],
    },
    {
      category: "Networking & Data",
      skills: ["HTTP", "Dio", "JSON Serialization", "REST APIs"],
    },
    {
      category: "Local Storage",
      skills: ["SQLite", "Get Storage", "Secure Storage"],
    },
    {
      category: "Authentication",
      skills: ["Firebase Auth"],
    },
    {
      category: "Testing & Tools",
      skills: ["Unit Testing", "Widget Testing"],
    },
    {
      category: "CI/CD & DevOps",
      skills: ["GitHub Actions", "Git"],
    },
    {
      category: "Programming Concepts",
      skills: ["OOP", "Null Safety", "Async/Await"],
    },
    {
      category: "AI-Powered Development",
      skills: ["Personalized Prompting", "Antigravity", "Claude Code", "Kimi", "Gemini", "Replit", "Manush AI"],
    },
    {
      category: "Payment Integration",
      skills: ["Stripe", "PayPal"],
    },
  ];

  // Helper function to return subtle tinted badge styling based on skill name
  const getBadgeStyle = (skill: string) => {
    const s = skill.toLowerCase();
    if (s.includes("flutter") || s.includes("dart")) {
      return "bg-cyan-500/10 border-cyan-500/30 text-cyan-300";
    }
    if (s.includes("firebase") || s.includes("auth")) {
      return "bg-amber-500/10 border-amber-500/30 text-amber-300";
    }
    if (s.includes("ai") || s.includes("gemini") || s.includes("claude") || s.includes("kimi") || s.includes("prompting") || s.includes("antigravity")) {
      return "bg-purple-500/10 border-purple-500/30 text-purple-300";
    }
    if (s.includes("stripe") || s.includes("paypal") || s.includes("sqlite")) {
      return "bg-emerald-500/10 border-emerald-500/30 text-emerald-300";
    }
    return "bg-primary/10 border-primary/20 text-primary";
  };

  return (
    <section id="skills" className="py-24 px-4 relative bg-[#05080f]/60">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Skills &amp; Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong Dart programming fundamentals with expertise in modern Flutter development
          </p>
        </motion.div>

        {/* 3D Rotating Skill Cube Standout Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <SkillCube />
        </motion.div>

        {/* Skill Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <TiltCard className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-4 text-cyan-400 font-mono tracking-wide flex items-center justify-between">
                    <span>{category.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-xs font-semibold border ${getBadgeStyle(
                          skill
                        )} transition-all duration-300 hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        {/* Key Strengths HUD Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14"
        >
          <TiltCard className="p-8 border-primary/40 bg-gradient-to-br from-primary/10 via-black/40 to-cyan-500/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/20 text-cyan-300 border border-primary/40">
                <Cpu size={24} />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Core Programming Strengths
              </h3>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed max-w-4xl">
              Strong foundation in <span className="font-semibold text-cyan-300">Object-Oriented Programming (OOP)</span>, 
              proficient with <span className="font-semibold text-cyan-300">null safety</span>, 
              expert in <span className="font-semibold text-cyan-300">asynchronous programming</span> using async/await, 
              and experienced with <span className="font-semibold text-cyan-300">reactive Streams</span> for real-time data handling.
            </p>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
