import { ExternalLink, Github, Smartphone } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

// To update a screenshot later, just set `image` to an imported asset or a URL.
const clientProjects: {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  image?: string;
}[] = [
  {
    title: "Ojais Food Scanner",
    tagline: "AI-Based Food Scanner",
    description:
      "AI-powered food scanning app with real-time API integration for intelligent food recognition and analysis.",
    tech: ["Flutter", "Firebase Auth", "RxDart", "GetX", "GetStorage", "Dio", "RevenueCat"],
  },
  {
    title: "STEMRN",
    tagline: "AI-Powered Nursing Education App",
    description:
      "AI-integrated educational platform for nursing professionals with Stripe subscriptions and live API-driven content.",
    tech: ["Flutter", "Firebase Auth", "Stripe", "RxDart", "GetX", "GetStorage", "Dio"],
  },
  {
    title: "Jaysea AI",
    tagline: "Identity-Driven AI Chatbot",
    description:
      "AI chatbot that adapts behavior, tone, and responses based on user-defined identity and boundaries.",
    tech: ["Flutter", "Dio", "RxDart", "GetX"],
  },
  {
    title: "Voyage AI",
    tagline: "AI-powered travel companion",
    description:
      "A trip-based application fully powered by AI — where AI handles itinerary generation, travel support, and proactive real-time chat.",
    tech: ["Flutter", "Firebase", "AI/SSE", "Google Maps", "PayPal"],
  },
  {
    title: "Kind Pack",
    tagline: "SaaS Enterprise Management System (In Development)",
    description:
      "Multi-role enterprise platform with e-commerce workflows, role-based access control, and AI-driven calculations.",
    tech: ["Flutter", "Firebase Auth", "Dio", "RxDart"],
  },
  {
    title: "Proppin",
    tagline: "Real Estate Management System (Available on Play Store)",
    description:
      "Smart all-in-one platform to manage properties, tenants, and real estate operations.",
    tech: ["Flutter", "Firebase Auth", "Dio", "RxDart", "Provider"],
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
        "Push Notifications via FCM for real-time order updates",
        "Provider for efficient state management and data flow",
        "High-performance, conversion-focused mobile UI/UX",
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
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Portfolio
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my Flutter projects showcasing mobile app development expertise
          </p>
        </div>

        {/* Industry & Client Projects Subsection */}
        <div className="mb-16">
          <div className="text-center mb-8 animate-fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Industry &amp; Client Projects
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientProjects.map((project) => (
              <Card
                key={project.title}
                className="p-6 card-elevation border-none bg-card overflow-hidden group flex flex-col h-full"
              >
                {/* Screenshot preview */}
                <div className="mb-6 flex justify-center">
                  <div className="w-[190px] rounded-[2rem] border-4 border-foreground/10 bg-secondary p-2 shadow-lg transition-transform group-hover:-translate-y-1">
                    <div className="aspect-[9/19] w-full overflow-hidden rounded-[1.5rem] bg-primary-light flex items-center justify-center">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={`${project.title} mobile app screenshot`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
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
                <p className="text-sm text-primary font-medium mb-3">
                  {project.tagline}
                </p>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-primary-light text-primary text-xs rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Personal Projects Subsection */}
        <div>
          <div className="text-center mb-8 animate-fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Personal Projects
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="p-6 card-elevation border-none bg-card overflow-hidden group flex flex-col h-full"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {project.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary-light text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="mb-6 space-y-2 flex-grow">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                      <p className="text-xs text-muted-foreground">{highlight}</p>
                    </div>
                  ))}
                </div>

                {/* Links - Always at bottom */}
                <div className="flex gap-3 mt-auto">
                  {project.live && (
                    <Button
                      asChild
                      size="sm"
                      className="flex-1"
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Client Work Subsection */}
        <div>
          <div className="text-center mb-8 animate-fade-up">
            <h3 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
              Client Work
            </h3>
            <div className="w-16 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 card-elevation border-none bg-card overflow-hidden group flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  Voyage AI
                </h3>
                <p className="text-sm text-primary font-medium mb-3">
                  AI-powered travel companion
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  A trip-based application fully powered by AI — where AI handles
                  itinerary generation, travel support, and proactive real-time chat.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {["Flutter", "Firebase", "AI/SSE", "Google Maps", "PayPal"].map((t) => (
                  <span key={t} className="px-3 py-1 bg-primary-light text-primary text-xs rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex-grow"></div>

              <div className="mt-auto">
                <Button asChild size="sm" className="w-full">
                  <Link to="/projects/voyage-ai" className="flex items-center gap-2">
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
