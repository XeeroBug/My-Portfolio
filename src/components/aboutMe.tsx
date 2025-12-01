import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Testimonial } from "./mentors";
import MyPic from "@/assets/images/image.png";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function AboutMe() {
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About Me
          </h2>
          <BackgroundGradient className="rounded-2xl sm:rounded-3xl lg:grid lg:grid-cols-3 gap-4 sm:gap-6 p-4 sm:p-6 md:p-10 bg-secondary">
            <div className="flex items-center justify-center w-full mb-4 sm:mb-6 lg:mb-0 max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0">
              <Image
                src={MyPic.src}
                alt="my-pic"
                width={400}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
            <p className="text-muted-foreground text-center lg:text-left col-span-2 text-base sm:text-lg md:text-xl lg:text-2xl lg:col-span-2 flex items-center px-2 sm:px-4">
              {`Hi, I'm Usama Abdulhakeem, a passionate Full Stack Developer who
              loves building secure, scalable, and user-friendly applications. I
              work with React, NextJs, NestJS, MongoDB and others to create
              clean, efficient solutions. I've had the privilege of serving at
              different organizations, where my work and technical contributions
              were highly appreciated. I'm a strong communicator, quick learner,
              and always excited to take on challenges that drive real impact.`}
            </p>
          </BackgroundGradient>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-center">
            My Mentors
          </h2>

          <Card className="overflow-hidden h-full flex flex-col bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all group">
            <Testimonial />
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
