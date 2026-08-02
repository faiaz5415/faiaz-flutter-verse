import { GraduationCap, Award, Calendar, ShieldCheck, Sparkles, BadgeCheck } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";
import { motion } from "framer-motion";

const About = () => {
  const education = [
    {
      institution: "Daffodil International University",
      degree: "BSc in Computer Science & Engineering",
      period: "2022 - 2025",
      focus: "Graduated",
    },
    {
      institution: "Kushtia Govt Central College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2020",
      focus: "Result: 5.00",
    },
    {
      institution: "Kushtia Zilla School",
      degree: "Secondary School Certificate (SSC)",
      period: "2018",
      focus: "Result: 5.00",
    },
  ];

  const certifications = [
    {
      text: "Flutter Development - ICT Ministry & Bangladesh Computer Council",
      tag: "Government Certified",
      icon: ShieldCheck,
      glow: "from-cyan-500/20 via-primary/20 to-blue-600/20 border-cyan-400/50 text-cyan-300 shadow-[0_0_20px_rgba(19,185,253,0.3)]",
    },
    {
      text: "UI/UX Design Fundamentals - Ostad",
      tag: "Design Masterclass",
      icon: Sparkles,
      glow: "from-purple-500/20 via-pink-500/20 to-purple-700/20 border-purple-400/50 text-purple-300 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
    },
    {
      text: "Flutter App Development Course (Ostad Pro)",
      tag: "Pro Track Certified",
      icon: BadgeCheck,
      glow: "from-[#0468D7]/25 via-[#13B9FD]/25 to-emerald-500/20 border-sky-400/50 text-sky-300 shadow-[0_0_20px_rgba(4,104,215,0.3)]",
    },
  ];

  return (
    <section id="about" className="py-24 px-4 relative bg-[#05080f]/60">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center align-center justify-center">
            Flutter Developer with 1+ years of hands-on experience designing and shipping production-grade mobile applications.
            Delivered 10+ Flutter projects spanning AI integration, Firebase, and RESTful APIs,
            including 1 app published on the Google Play Store and 2 more currently in deployment across the App Store and Play Store.
            Skilled at building clean, performant UIs and translating client requirements into
            scalable mobile solutions, and currently contributing to multiple client projects.
          </p>
        </motion.div>

        {/* Education Section with Timeline */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 text-primary shadow-[0_0_15px_rgba(19,185,253,0.2)]">
              <GraduationCap size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Education</h3>
          </div>

          <div className="relative border-l-2 border-primary/20 left-4 sm:left-6 space-y-8 pl-6 sm:pl-10">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                {/* Timeline Dot Marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-primary border-4 border-[#05080f] shadow-[0_0_12px_rgba(19,185,253,0.8)]" />

                <TiltCard className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {edu.institution}
                      </h4>
                      <p className="text-primary font-semibold text-lg mt-1">{edu.degree}</p>
                      <p className="text-muted-foreground text-sm mt-2">{edu.focus}</p>
                    </div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-cyan-300 font-mono text-sm shrink-0 self-start md:self-center">
                      <Calendar size={16} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
              <Award size={28} />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Certifications &amp; Bootcamps
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="h-full"
                >
                  <TiltCard className="p-7 flex flex-col justify-between h-full group">
                    <div>
                      {/* Top Header Row with Icon Container & Badge Tag */}
                      <div className="flex items-center justify-between gap-3 mb-5">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br border ${cert.glow} group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} />
                        </div>
                        <span className="px-3 py-1 rounded-full text-[11px] font-mono tracking-wider uppercase bg-white/5 border border-white/10 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-colors">
                          {cert.tag}
                        </span>
                      </div>

                      {/* Accent Gradient Indicator Line */}
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-cyan-400 rounded-full mb-4 group-hover:w-20 transition-all duration-300" />

                      {/* Certification Text */}
                      <p className="text-foreground font-semibold text-base leading-relaxed group-hover:text-cyan-300 transition-colors">
                        {cert.text}
                      </p>
                    </div>

                    {/* Bottom Status Indicator */}
                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-muted-foreground font-mono">
                      <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Verified Completion
                      </span>
                      <span className="text-primary/70 group-hover:text-primary transition-colors">Official Credential</span>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
