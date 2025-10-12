import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Testimonial } from "./mentors";
import MyPic from "@/assets/images/animated-pic.png";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

export function AboutMe() {
  return (
    <section className="py-20 px-4 bg-secondary/20" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 "
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          {/* <Image
                src={MyPic.src}
                alt="my-pic"
                className="w-full h-full rounded-2xl sm:mx-auto"
              /> */}
          <BackgroundGradient className="rounded-3xl lg:grid lg:grid-cols-3 gap-6 p-4 sm:p-10 bg-secondary">
            <div className="flex items-center justify-center w-full mb-6">
              <Image
                src={MyPic.src}
                alt="my-pic"
                className="w-full h-full rounded-2xl sm:mx-auto"
              />
            </div>
            <p className="text-muted-foreground text-center col-span-2 text-xl md:text-2xl lg:col-span-2 md:col-span-1 flex ">
              Hi, I’m Usama Abdulhakeem, a passionate Full Stack Developer who
              loves building secure, scalable, and user-friendly applications. I
              work with React, NextJs, NestJS, MongoDB and others to create
              clean, efficient solutions. I’ve had the privilege of serving at
              different organizations, where my work and technical contributions
              were highly appreciated. I’m a strong communicator, quick learner,
              and always excited to take on challenges that drive real impact.
            </p>
          </BackgroundGradient>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
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
