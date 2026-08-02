import { Download, FileText } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

// Replace this file in /public to update the CV.
const CV_PATH = "/Faiaz_Hasan_CV_Resume.pdf";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 card-elevation border-none bg-gradient-to-br from-primary to-primary-dark text-primary-foreground animate-fade-up">
          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            <div className="p-5 rounded-3xl bg-primary-foreground/15">
              <FileText size={48} />
            </div>
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-3">Download My CV</h2>
              <p className="opacity-90 max-w-xl">
                Get the full overview of my experience as a Flutter AI Engineer —
                projects, skills, and certifications in one PDF.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-2xl px-8 shrink-0"
            >
              <a href={CV_PATH} download="Faiaz_Hasan_Resume.pdf" className="flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
