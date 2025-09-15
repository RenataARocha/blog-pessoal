"use client";

import { useEffect, useState } from "react";
import { motion, animate } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "/about" },
    { name: "BLOG", href: "/posts" },
    { name: "CONTATO", href: "#contato" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const top =
          (target as HTMLElement).getBoundingClientRect().top + window.scrollY;
        animate(window.scrollY, top, {
          duration: 0.8,
          onUpdate(value) {
            window.scrollTo(0, value);
          },
          ease: [0.25, 0.1, 0.25, 1],
        });
      }
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section, footer");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            setActiveSection(`#${target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex justify-center space-x-8">
      {links.map((link) => {
        const isActive =
          link.href.startsWith("#")
            ? activeSection === link.href
            : pathname === link.href;

        return (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            whileHover={{ scale: 1.1 }}
            className={`font-assistant uppercase tracking-wider font-normal text-lg transition-colors ${
              isActive ? "text-orange-600" : "text-gray-700"
            } hover:text-orange-700`}
          >
            {link.name}
          </motion.a>
        );
      })}
    </nav>
  );
}
