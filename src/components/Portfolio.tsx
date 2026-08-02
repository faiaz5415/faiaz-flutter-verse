import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Button } from "./ui/button";
import { TiltCard } from "./ui/TiltCard";
import { motion } from "framer-motion";

import ojaisImg from "@/assets/projects/ojais.png";
import proppinImg from "@/assets/projects/proppin.jpg";
import stemrnImg from "@/assets/projects/stemrn.jpg";
import kindpackImg from "@/assets/projects/kindpack.png";
import jayseaImg from "@/assets/projects/jaysea.png";
import voyageImg from "@/assets/projects/voyage.png";

// To update a screenshot later, just set `image` to an imported asset or a URL.
const clientProjects: {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image?: string;
  link?: string;
}[] = [
    {
      title: "Ojais Food Scanner",
      tagline: "AI-Based Food Scanner",
      description:
        "AI-powered food scanning app with real-time API integration for intelligent food recognition and analysis.",
      tech: ["Flutter", "Firebase Auth", "RxDart", "GetX", "GetStorage", "Dio", "RevenueCat"],
      image: ojaisImg,
    },
    {
      title: "STEMRN",
      tagline: "AI-Powered Nursing Education App",
      description:
        "AI-integrated educational platform for nursing professionals with Stripe subscriptions and live API-driven content.",
      tech: ["Flutter", "Firebase Auth", "Stripe", "RxDart", "GetX", "GetStorage", "Dio"],
      image: stemrnImg,
    },
    {
      title: "Jaysea AI",
      tagline: "Identity-Driven AI Chatbot",
      description:
        "AI chatbot that adapts behavior, tone, and responses based on user-defined identity and boundaries.",
      tech: ["Flutter", "Dio", "RxDart", "GetX"],
      image: jayseaImg,
    },
    {
      title: "Voyage AI",
      tagline: "AI-powered travel companion",
      description:
        "A trip-based application fully powered by AI — where AI handles itinerary generation, travel support, and proactive real-time chat.",
      tech: ["Flutter", "Firebase", "AI/SSE", "Google Maps", "PayPal"],
      image: voyageImg,
    },
    {
      title: "Kind Pack",
      tagline: "SaaS Enterprise Management System (In Development)",
      description:
        "Multi-role enterprise platform with e-commerce workflows, role-based access control, and AI-driven calculations.",
      tech: ["Flutter", "Firebase Auth", "Dio", "RxDart"],
      image: kindpackImg,
    },
    {
      title: "Proppin",
      tagline: "Real Estate Management System (Play Store)",
      description:
        "Smart all-in-one platform to manage properties, tenants, and real estate operations.",
      tech: ["Flutter", "Firebase Auth", "Dio", "RxDart", "Provider"],
      image: proppinImg,
      link: "https://play.google.com/store/apps/details?id=com.proppin.app&pcampaignid=web_share",
    },
  ];

const Portfolio = () => {
  const projects = [
    {
      title: "Bangla Carambola Companion",
      tagline: "AI-powered agricultural disease diagnosis",
      description: "Automated disease diagnosis powered by Ensemble Deep Learning with MobileNetV2 and EfficientNetB0.",
      tech: ["TypeScript", "React", "Tailwind CSS", "shadcn/ui", "Vercel"],
      github: "https://github.com/faiaz5415/bangla-carambola-companion",
      live: "https://kamrangabondhu.app",
      highlights: [
        "Grad-CAM integration for visual decision-path heatmaps",
        "Virtual Agronomist with localized treatment plans",
        "Market intelligence dashboard for price monitoring",
        "Gamified 'Krishi Hero' leaderboard and points system",
        "Emergency agricultural helpline integration",
        "Bilingual interface (Bangla & English)",
      ],
    },
    {
      title: "Football Live Score App",
      tagline: "Real-time match score tracking",
      description: "Real-time football match score tracking with Firebase backend for live data synchronization.",
      tech: ["Flutter", "Firebase", "Realtime DB"],
      github: "https://github.com/faiaz5415/Football-Live-score-real-time-App-using-firebase",
      highlights: [
        "Real-time match score tracking",
        "Firebase backend integration",
        "Dynamic UI updates for football statistics",
      ],
    },
    {
      title: "Real-Time Map Tracker App",
      tagline: "Live GPS location monitoring",
      description: "Live GPS location monitoring with Google Maps API integration and real-time movement tracking.",
      tech: ["Flutter", "Google Maps API", "GPS"],
      github: "https://github.com/faiaz5415/Real-Time-Map-Tracker-APP",
      highlights: [
        "Live GPS location monitoring",
        "Google Maps API integration",
        "Real-time movement tracking and coordinate markers",
      ],
    },
    {
      title: "MessMate Pro",
      tagline: "Mess Management Mobile Application (In Progress)",
      description: "Developing a meal tracking and expense management app for communal living.",
      tech: ["Flutter", "Firebase", "Firestore", "Riverpod"],
      github: "https://github.com/faiaz5415/MessMate-Pro",
      highlights: [
        "Firebase Authentication with role-based access (Admin & Messmate)",
        "Real-time data sync and dynamic meal-rate calculations via Firestore",
        "Riverpod for state management and local storage for offline support",
        "Clean, requirement-driven UI/UX for intuitive navigation",
      ],
    },
    {
      title: "E-Commerce Application",
      tagline: "Scalable Digital Marketplace (In Progress)",
      description: "Developing a full-scale marketplace with product categorization and advanced search.",
      tech: ["Flutter", "Firebase", "Provider"],
      github: "",
      highlights: [
        "Secure authentication and Stripe payment integration",
        "Real-time cart, wishlist, and order tracking systems",
        "Admin Panel for inventory management and product uploads",
        "Push Notifications via FCM for real-time order updates"
      ],
    },
    {
      title: "Calculator App",
      tagline: "Functional calculator with modern UI",
      description: "Functional calculator with GridView & state management for arithmetic operations.",
      tech: ["Flutter", "State Management", "GridView"],
      github: "https://github.com/faiaz5415/calculator-using-flutter",
      highlights: [
        "Clean UI with Material Design",
        "Efficient state management",
        "Support for all basic operations",
      ],
    },
    {
      title: "Dynamic Water Tracker",
      tagline: "Track your daily hydration goals",
      description: "Hydration tracker with personalized goals and dynamic UI updates.",
      tech: ["Flutter", "Local Storage", "Dynamic UI"],
      github: "https://github.com/faiaz5415/dynamic-water-tracker-app-using-flutter",
      highlights: [
        "Personalized water intake goals",
        "Visual progress tracking",
        "Daily reminders",
      ],
    },
    {
      title: "To-Do App",
      tagline: "Simple and elegant task manager",
      description: "Task creation, completion toggles, deletion; persists locally.",
      tech: ["Flutter", "Local Storage", "CRUD"],
      github: "https://github.com/faiaz5415/to-do-app-using-flutter",
      highlights: [
        "Create and manage tasks",
        "Mark tasks as complete",
        "Persistent local storage",
      ],
    },
    {
      title: "Money Management Application",
      tagline: "Track income and expenses",
      description: "Income/expense tracking, budgeting features, transaction lists.",
      tech: ["Flutter", "SQLite", "Charts"],
      github: "https://github.com/faiaz5415/money-management-application-using-flutter",
      highlights: [
        "Income & expense tracking",
        "Budget management",
        "Visual transaction history",
      ],
    },
    {
      title: "CRUD App using REST API",
      tagline: "Full REST API integration",
      description: "Demonstrates Create/Read/Update/Delete with REST backend.",
      tech: ["Flutter", "REST API", "HTTP"],
      github: "https://github.com/faiaz5415/CRUD-app-using-rest-api-flutter",
      highlights: [
        "Complete CRUD operations",
        "RESTful API integration",
        "Error handling & validation",
      ],
    },
    {
      title: "Task Manager App",
      tagline: "Production-ready task management",
      description: "Production-ready task manager with authentication and task lifecycle.",
      tech: ["Flutter", "Firebase", "Authentication"],
      github: "https://github.com/faiaz5415/task-manager",
      highlights: [
        "User authentication",
        "Task lifecycle management",
        "Ready for deployment",
      ],
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-4 relative">
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
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my Flutter projects showcasing mobile app development expertise
          </p>
        </motion.div>

        {/* Industry & Client Projects Subsection */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Industry &amp; Client Projects
            </h3>
            <div className="w-16 h-1 bg-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <TiltCard className="p-6 flex flex-col h-full group">
                  {/* Screenshot preview phone frame */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-[190px] rounded-[2rem] border-4 border-white/10 bg-[#0A0E17] p-2 shadow-2xl transition-transform duration-300 group-hover:scale-105 group-hover:border-primary/40">
                      <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.5rem] bg-black/50 flex items-center justify-center relative">
                        {project.image ? (
                          <>
                            <img
                              src={project.image}
                              alt={`${project.title} mobile app screenshot`}
                              loading="lazy"
                              className="h-full w-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E17] via-transparent to-transparent opacity-30" />
                          </>
                        ) : (
                          <div className="flex flex-col items-center gap-2 text-primary/70">
                            <Smartphone size={32} />
                            <span className="text-[11px] font-medium">Preview coming soon</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Tagline & Play Store Link */}
                  <p className="text-sm text-cyan-400 font-medium mb-3">
                    {project.link && project.tagline.includes("Play Store") ? (
                      <>
                        {project.tagline.replace("(Play Store)", "")}
                        (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-cyan-300 inline-flex items-center gap-1 font-semibold"
                        >
                          Play Store <ExternalLink size={12} />
                        </a>
                        )
                      </>
                    ) : (
                      project.tagline
                    )}
                  </p>

                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Optional Action Button for Play Store */}
                  {project.link && (
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <Button
                        asChild
                        size="sm"
                        className="w-full bg-gradient-to-r from-[#0468D7] to-[#13B9FD] text-white font-semibold shadow-md hover:shadow-lg transition-all rounded-xl"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink size={16} />
                          View on Play Store
                        </a>
                      </Button>
                    </div>
                  )}
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Personal Projects Subsection */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Personal Projects
            </h3>
            <div className="w-16 h-1 bg-primary/60 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                className="h-full"
              >
                <TiltCard className="p-6 flex flex-col justify-between h-full group">
                  <div className="flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-cyan-400 font-medium mb-3">
                        {project.tagline}
                      </p>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-xs font-medium rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mb-6 space-y-2 min-h-[85px]">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                            <p className="text-xs text-muted-foreground leading-normal">{highlight}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links - Pinned uniformly at bottom of card */}
                    <div className="flex gap-3 mt-auto pt-4 border-t border-white/10">
                      {project.live && (
                        <Button
                          asChild
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-[#0468D7] to-[#13B9FD] text-white font-semibold rounded-xl"
                        >
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <ExternalLink size={16} />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.github ? (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary/40 text-primary bg-primary/5 hover:bg-primary/20 hover:border-primary rounded-xl"
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2"
                          >
                            <Github size={16} />
                            GitHub
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="outline"
                          size="sm"
                          disabled
                          className="flex-1 border-white/10 text-muted-foreground bg-white/5 opacity-50 cursor-not-allowed rounded-xl"
                        >
                          <span className="flex items-center justify-center gap-2">
                            <Github size={16} />
                            In Progress
                          </span>
                        </Button>
                      )}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
