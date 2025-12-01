import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
  IconHome,
  IconMail,
} from "@tabler/icons-react";
import { FolderOpen, UserRound, Wrench } from "lucide-react";

export const Dock = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "About Me",
      icon: (
        <UserRound className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#about",
    },
    {
      title: "Tech Stack",
      icon: (
        <Wrench className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#tech-stack",
    },
    {
      title: "Projects",
      icon: (
        <FolderOpen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#projects",
    },
    {
      title: "Contact",
      icon: (
        <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#contact",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://linkedin.com/in/usama-abdulhakeem-90a465277/",
    },

    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/AbdulUsama12433?t=wKD_uOmjgM5sypBUVN_x-g&s=09",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.github.com/xeerobug",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[8rem] sm:h-[10rem] w-full sticky bottom-0 z-50 px-2 sm:px-4">
      <FloatingDock
        // mobileClassName="translate-y-20"
        items={links}
      />
    </div>
  );
};
