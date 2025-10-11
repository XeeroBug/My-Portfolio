"use client";
import { HeroSection } from "@/components/hero-section";
import { TechStack } from "@/components/tech-stack";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Dock } from "@/components/dock";
import { AboutMe } from "@/components/aboutMe";
import { MultiStepLoader } from "@/components/loader";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <MultiStepLoader />;
  }

  return (
    <>
      <main className="min-h-screen">
        <HeroSection />
        <AboutMe />
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Dock />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
