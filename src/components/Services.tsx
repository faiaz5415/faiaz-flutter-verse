import { Smartphone, Palette, Settings } from "lucide-react";
import { Card } from "./ui/card";

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
    <section id="services" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            What I Do
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Flutter development services from design to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 card-elevation border-none bg-card group"
              >
                <div className="mb-6 inline-block p-4 bg-primary-light rounded-2xl group-hover:bg-primary transition-colors">
                  <Icon
                    className="text-primary group-hover:text-primary-foreground transition-colors"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
