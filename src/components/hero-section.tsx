import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextRevealCard
            className="mb-6"
            text="Usama Abdulhakeem"
            revealText="Turning ideas into solutions. One line of code at a time. "
          ></TextRevealCard>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
            Full Stack Developer
          </p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
            Building exceptional digital experiences with modern technologies.
            Passionate about clean code, beautiful design, and innovative
            solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a href="#contact">
            <Button size="lg" className="gap-2">
              <Mail className="w-4 h-4" />
              Get in Touch
            </Button>
          </a>
          <a href="#projects">
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-transparent"
            >
              View Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

const XIcon = ({ size = 24, color = "currentColor", className = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      className={className}
      aria-hidden="true"
      role="img"
    >
      <path d="M18.244 2H21.5l-7.312 8.39L22 22h-5.998l-4.662-6.08L6.09 22H2.833l7.828-8.975L2 2h6.097l4.17 5.557L18.244 2zm-1.05 18h1.666L8.13 3.906H6.347l10.847 16.094z" />
    </svg>
  );
};
