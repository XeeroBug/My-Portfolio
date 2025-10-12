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
      live: "#",
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
    <section className="py-20 px-4 bg-secondary/20" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
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
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-2 bg-transparent"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                    <Button size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
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
