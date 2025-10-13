import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
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