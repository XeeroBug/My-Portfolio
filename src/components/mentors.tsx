"Use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import cto from "@/assets/images/cto.jpeg";
import legend from "@/assets/images/legend.jpeg";
import nexocode from "@/assets/images/nexocode.png";
export function Testimonial() {
  const testimonials = [
    {
      quote:
        "What stood out most about Usama was his curiosity and willingness to dig deeper, not just to get things working, but to truly understand how and why they work. Whether tackling complex bugs or collaborating with teammates, he brought a calm, thoughtful approach that made a real impact. His growth mindset is something I genuinely admire.",
      name: "Mubarak Ibrahim",
      designation: "CTO at StoneTech Square",
      src: cto.src,
    },
    {
      quote:
        "Usama has shown excellent progress throughout his time here. His ability to adapt quickly, collaborate effectively, and maintain a professional attitude makes him stand out. I’m confident he will succeed in any future endeavor he pursue.",
      name: "Muftahuddeen Abba",
      designation: "Head of Cloud at StoneTech Square",
      src: legend.src,
    },
    {
      quote:
        "Usama consistently demonstrates a strong commitment to learning and growth. He approaches every task with enthusiasm, takes feedback constructively, and shows great initiative in solving problems independently. It has been a pleasure to mentor such a driven and capable individual",
      name: "Ibrahim Tajuddeen",
      designation: "Software Developer at StoneTech Square",
      src: nexocode.src,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
} 
