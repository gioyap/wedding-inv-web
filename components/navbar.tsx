"use client";
import React from "react";
import {
  IconHome,
  IconPhoto,
  IconUsersGroup,
  IconShirt,
  IconClock,
  IconMapPin,
  IconHelpCircle,
  IconMailForward,
} from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

interface NavbarProps {
  hideNavbar: boolean;
}


export const Navbar: React.FC<NavbarProps> = ({hideNavbar}) => {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Gallery",
      link: "#gallery",
      icon: <IconPhoto className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Entourage",
      link: "#entourage",
      icon: <IconUsersGroup className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Dress Code",
      link: "#dresscode",
      icon: <IconShirt className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Timeline",
      link: "#timeline",
      icon: <IconClock className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Maps",
      link: "#maps",
      icon: <IconMapPin className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "FAQs",
      link: "#faqs",
      icon: <IconHelpCircle className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "RSVP",
      link: "#rsvp",
      icon: <IconMailForward className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className={`relative w-full ${hideNavbar ? 'hidden' : 'block'}`}>
      <FloatingNav navItems={navItems} />
    </div>
  );
}
