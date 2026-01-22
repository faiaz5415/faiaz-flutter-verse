import { Card } from "./ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Core Technologies",
      skills: ["Flutter", "Dart", "Android Studio", "Figma"],
    },
    {
      category: "State Management",
      skills: ["Provider", "GetX", "Riverpod", "BLoC"],
    },
    {
      category: "Networking & Data",
      skills: ["HTTP", "JSON Serialization", "REST APIs"],
    },
    {
      category: "Local Storage",
      skills: ["SQLite", "Secure Storage"],
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
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong Dart programming fundamentals with expertise in modern Flutter development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 card-elevation border-none bg-card"
            >
              <h3 className="text-lg font-bold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Key Strengths */}
        <div className="mt-12 text-center">
          <Card className="p-8 card-elevation border-none bg-gradient-to-br from-primary-light to-secondary">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Core Programming Strengths
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Strong foundation in <span className="font-semibold text-primary">Object-Oriented Programming (OOP)</span>, 
              proficient with <span className="font-semibold text-primary">null safety</span>, 
              expert in <span className="font-semibold text-primary">asynchronous programming</span> using async/await, 
              and experienced with <span className="font-semibold text-primary">reactive Streams</span> for real-time data handling.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
