import { Github, Linkedin, Facebook, Download } from "lucide-react";
import { Button } from "./ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center animate-fade-up">
          {/* Text Content */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">Kh Faiaz Hasan</span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground mb-2">
              Flutter Developer
            </p>
            <p className="text-xl text-muted-foreground mb-6">
              Building beautiful, production-ready mobile apps
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
              {["Flutter", "Dart", "UI/UX", "Firebase", "CI/CD"].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-light text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start">
              <Button
                onClick={() => scrollToSection("#portfolio")}
                size="lg"
                className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-lg hover:shadow-xl transition-all"
              >
                View Portfolio
              </Button>
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/faiaz5415"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all card-elevation"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/faiazhasan5/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all card-elevation"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.facebook.com/faiazz39/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all card-elevation"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src={profileImage}
                alt="Kh Faiaz Hasan - Flutter Developer"
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-8 border-background shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
