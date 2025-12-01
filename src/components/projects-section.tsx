import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Img1 from "@/assets/images/climateGuardian.png";
import Img2 from "@/assets/images/pkeeps.png";
import Image from "next/image";

export function ProjectsSection() {
  const projects = [
    {
      title: "Climate Report System",
      description:
        "The Climate Report System is an AI-assisted platform that receives climate reports via SMS (Africa’s Talking API), detects and translates languages with AI, stores them in MongoDB, and automatically notifies authorities after repeated reports for faster response.",
      tags: ["React.js", "Tailwind", "Express.js", "MongoDB"],
      image: Img1.src,
      github: "https://github.com/XeeroBug/CRS_web",
      live: "https://myclimateguardian.netlify.app/",
    },
    {
      title: "Pkeeps",
      description:
        "Pkeeps is a digital legacy platform designed to transfer your most important assets to the people you trust, when it matters most.",
      tags: ["Next.js", "Shadcn", "Supabase", "Flutter wave"],
      image: Img2.src,
      // github: "",
      live: "https://www.pkeeps.com",
    },
  ];
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
      id="projects"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
                <div className="relative overflow-hidden aspect-video">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                </div>
                <div className="p-4 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-2 bg-transparent w-full sm:w-auto"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </Button>
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto"
                    >
                      <Button size="sm" className="gap-2 w-full sm:w-auto">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
