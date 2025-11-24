import { GraduationCap, Award } from "lucide-react";
import { Card } from "./ui/card";

const About = () => {
  const education = [
    {
      institution: "Daffodil International University",
      degree: "BSc in Computer Science & Engineering",
      period: "2022 - 2025",
      focus: "Flutter Mobile App Development",
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
    "Flutter Development - ICT Ministry & Bangladesh Computer Council",
    "UI/UX Design Fundamentals - Ostad",
    "Flutter App Development Course- Ostad (Near Completion)",
  ];

  return (
    <section id="about" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate Flutter Developer committed to transforming ideas into
            seamless mobile experiences. I specialize in app development, UI/UX
            design, and interactive prototyping—building intuitive interfaces
            and crafting apps that delight users.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-primary" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 card-elevation border-none bg-card"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-foreground">
                      {edu.institution}
                    </h4>
                    <p className="text-primary font-medium">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm">{edu.focus}</p>
                  </div>
                  <span className="text-muted-foreground font-medium px-4 py-2 bg-secondary rounded-lg">
                    {edu.period}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-primary" size={32} />
            <h3 className="text-2xl md:text-3xl font-bold">
              Certifications & Bootcamps
            </h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 card-elevation border-none bg-card"
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-foreground">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
