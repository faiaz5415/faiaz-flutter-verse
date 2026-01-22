import { Mail, Phone, Github, Linkedin, Facebook, Download } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "faiazzhasan@gmail.com",
      href: "mailto:faiazzhasan@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+88 01521759545",
      href: "tel:+8801521759545",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/faiaz5415",
      username: "@faiaz5415",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/faiazhasan5/",
      username: "faiazhasan5",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/faiazz39/",
      username: "faiazz39",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm available for freelance projects and collaborations. Let's build
            something amazing together!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-elevation border-none bg-card"
                >
                  <a
                    href={contact.href}
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary-light rounded-xl group-hover:bg-primary transition-colors">
                      <Icon
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        size={24}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {contact.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}

            {/* Resume Download */}
            <Card className="p-6 card-elevation border-none bg-gradient-to-br from-primary to-primary-dark text-primary-foreground">
              <a
                href="/Faiaz_Hasan_CV_Resume.pdf"
                download="Faiaz_Hasan_Resume.pdf"
                className="flex items-center justify-between group"
              >
                <div>
                  <h4 className="font-bold text-lg mb-1">Resume</h4>
                  <p className="text-sm opacity-90">Download my CV</p>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 group-hover:scale-110 transition-transform"
                >
                  <Download size={20} />
                </Button>
              </a>
            </Card>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <Card
                  key={index}
                  className="p-6 card-elevation border-none bg-card"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="p-3 bg-primary-light rounded-xl group-hover:bg-primary transition-colors">
                      <Icon
                        className="text-primary group-hover:text-primary-foreground transition-colors"
                        size={24}
                      />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        {social.label}
                      </p>
                      <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {social.username}
                      </p>
                    </div>
                  </a>
                </Card>
              );
            })}

            {/* CTA */}
            <Card className="p-6 card-elevation border-none bg-card">
              <h4 className="font-bold text-lg mb-2">Ready to start a project?</h4>
              <p className="text-muted-foreground text-sm mb-4">
                I'm currently available for freelance work and collaborations.
              </p>
              <Button
                asChild
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground"
              >
                <a href="mailto:faiazzhasan@gmail.com">Send Me an Email</a>
              </Button>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            ©2025 Kh Faiaz Hasan. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Built with Flutter mindset • Designed with passion
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
