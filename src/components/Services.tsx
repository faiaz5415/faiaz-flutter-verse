import { Smartphone, Palette, Settings, Check } from "lucide-react";
import { TiltCard } from "./ui/TiltCard";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Full-cycle Flutter app development with REST API integration, Firebase services, authentication, and seamless deployment to Play Store and App Store.",
      deliverables: [
        "Production-ready mobile applications",
        "Cross-platform iOS & Android apps",
        "API integration & backend connectivity",
        "App Store & Play Store deployment",
      ],
    },
    {
      icon: Palette,
      title: "UI/UX Design & Prototyping",
      description:
        "User-centered design with beautiful Figma prototypes, micro-interactions, and delightful Lottie animations that enhance user experience.",
      deliverables: [
        "Figma design mockups & prototypes",
        "Material Design implementation",
        "Interactive animations",
        "User flow optimization",
      ],
    },
    {
      icon: Settings,
      title: "Maintenance & CI/CD",
      description:
        "Ongoing app updates, bug fixes, and automated build pipelines using Git workflows, GitHub Actions, and Codemagic for continuous delivery.",
      deliverables: [
        "Regular updates & bug fixes",
        "Automated testing & deployment",
        "Performance optimization",
        "Version control management",
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Flutter development services from design to deployment
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <TiltCard className="p-8 flex flex-col h-full">
                  <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/10 border border-primary/30 text-cyan-300 w-fit group-hover:scale-110 transition-transform duration-300">
                    <Icon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                          <Check size={12} />
                        </div>
                        <p className="text-xs text-muted-foreground font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
