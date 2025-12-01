import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  VsCodeIcon,
  DockerIcon,
  GithubIcon,
  ViteIcon,
  JSIcon,
  TSIcon,
  // DartIcon,
  GoIcon,
  ReactIcon,
  NextIcon,
  NestIcon,
  // FlutterIcon,
  TailwindIcon,
  FigmaIcon,
  FirebaseIcon,
  MongoDbIcon,
  NodeIcon,
  SupabaseIcon,
  PostgresIcon,
  VercelIcon,
  NetlifyIcon,
  ShadcnIcon,
  FramerIcon,
} from "@/assets/icons/icons";
const techCategories = [
  {
    title: "Tools",
    items: [
      { name: "VS Code", icon: <VsCodeIcon /> },
      { name: "GitHub", icon: <GithubIcon /> },
      { name: "Vite", icon: <ViteIcon /> },
      { name: "Docker", icon: <DockerIcon /> },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "JavaScript", icon: <JSIcon /> },
      { name: "TypeScript", icon: <TSIcon /> },
      // { name: "Dart", icon: <DartIcon /> },
      { name: "Go", icon: <GoIcon /> },
    ],
  },
  {
    title: "Frameworks",
    items: [
      { name: "React", icon: <ReactIcon /> },
      { name: "Next.js", icon: <NextIcon /> },
      { name: "Nest.js", icon: <NestIcon /> },
      // { name: "Flutter", icon: <FlutterIcon /> },
    ],
  },
  {
    title: "UI Libraries",
    items: [
      { name: "Tailwind CSS", icon: <TailwindIcon /> },
      { name: "Framer Motion", icon: <FramerIcon /> },
      { name: "Shadcn UI", icon: <ShadcnIcon /> },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: <MongoDbIcon /> },
      { name: "PostgreSQL", icon: <PostgresIcon /> },
      { name: "Supabase", icon: <SupabaseIcon /> },
    ],
  },
  {
    title: "Platform/Services",
    items: [
      { name: "Firebase", icon: <FirebaseIcon /> },
      { name: "Figma", icon: <FigmaIcon /> },
      { name: "Vercel", icon: <VercelIcon /> },
      { name: "Netlify", icon: <NetlifyIcon /> },
    ],
  },
  {
    title: "Runtime",
    items: [{ name: "Node", icon: <NodeIcon /> }],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function TechStack() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative"
      id="tech-stack"
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
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {techCategories.map((category) => (
            <motion.div key={category.title} variants={item}>
              <Card className="p-4 sm:p-6 h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-colors">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-primary">
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {category.items.map((tech) => (
                    <motion.div
                      key={tech.name}
                      whileHover={{ scale: 1.05 }}
                      className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer"
                    >
                      <div className="size-12 sm:size-16">{tech.icon}</div>
                      <span className="text-xs sm:text-sm text-center font-medium">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
