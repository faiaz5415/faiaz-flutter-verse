import { Mail, Phone, Github, Linkedin, Facebook, Download, Send } from "lucide-react";
import { Button } from "./ui/button";
import { TiltCard } from "./ui/TiltCard";
import { motion } from "framer-motion";

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
    <section id="contact" className="py-24 px-4 relative bg-[#05080f]/80 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-cyan-400 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm available for freelance projects and collaborations. Let's build
            something amazing together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Contact Information
            </h3>

            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TiltCard className="p-6">
                    <a
                      href={contact.href}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon
                          className="text-primary group-hover:text-white transition-colors"
                          size={24}
                        />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {contact.label}
                        </p>
                        <p className="font-semibold text-foreground group-hover:text-cyan-300 transition-colors text-base">
                          {contact.value}
                        </p>
                      </div>
                    </a>
                  </TiltCard>
                </motion.div>
              );
            })}

            {/* Resume Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TiltCard className="p-6 bg-gradient-to-br from-[#0468D7] to-[#13B9FD] text-white border-none shadow-[0_0_30px_rgba(19,185,253,0.3)]">
                <a
                  href="/Faiaz_Hasan_Resume.pdf"
                  download="Faiaz_Hasan_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group"
                >
                  <div>
                    <h4 className="font-bold text-xl mb-1">Resume</h4>
                    <p className="text-sm opacity-90">Download my CV</p>
                  </div>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="bg-white text-primary hover:bg-white/90 group-hover:scale-110 transition-transform shadow-lg rounded-xl"
                  >
                    <Download size={20} />
                  </Button>
                </a>
              </TiltCard>
            </motion.div>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              Connect With Me
            </h3>

            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <TiltCard className="p-6">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 bg-primary/10 border border-primary/30 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <Icon
                          className="text-primary group-hover:text-white transition-colors"
                          size={24}
                        />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {social.label}
                        </p>
                        <p className="font-semibold text-foreground group-hover:text-cyan-300 transition-colors text-base">
                          {social.username}
                        </p>
                      </div>
                    </a>
                  </TiltCard>
                </motion.div>
              );
            })}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TiltCard className="p-6 border-primary/30 bg-primary/5">
                <h4 className="font-bold text-lg mb-2 text-foreground">Ready to start a project?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  I'm currently available for freelance work and collaborations.
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-[#0468D7] to-[#13B9FD] text-white font-semibold shadow-lg hover:shadow-cyan-500/30 transition-all rounded-xl"
                >
                  <a href="mailto:faiazzhasan@gmail.com" className="flex items-center justify-center gap-2">
                    <Send size={16} />
                    Send Me an Email
                  </a>
                </Button>
              </TiltCard>
            </motion.div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-muted-foreground font-medium">
            ©2026 Kh Faiaz Hasan. All rights reserved.
          </p>
          <p className="text-sm text-cyan-400/80 mt-2 font-mono">
            Built with Flutter mindset • Designed with passion
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
