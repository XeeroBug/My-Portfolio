"Use client";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import cto from "@/assets/images/cto.jpeg";
import legend from "@/assets/images/legend.jpeg";
import nexocode from "@/assets/images/nexocode.png";
export function Testimonial() {
  const testimonials = [
    {
      quote:
        "Passionate about mobile technology from a young age, my curiosity led me to experiment with Android devices, diving into AOSP and custom ROMs. This journey evolved into app development using Kotlin, Swift, and Flutter, strengthening my expertise in both front-end and back-end. Committed to open-source principles, I actively contribute to projects aligned with my beliefs, showcasing a diverse skill set in programming, markup, and scripting languages.",
      name: "Mubarak Ibrahim",
      designation: "CTO at StoneTech Square",
      src: cto.src,
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Muftahuddeen Abba",
      designation: "Head of Cloud at StoneTech Square",
      src: legend.src,
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Ibrahim Tajuddeen",
      designation: "Software Developer at StoneTech Square",
      src: nexocode.src,
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
} 
