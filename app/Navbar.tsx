"use client"; // aqui é permitido

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/" },
    { name: "SOBRE", href: "/about" },
    { name: "BLOG", href: "/posts" },
    { name: "CONTATO", href: "/contact" },
  ];

  return (
    <nav className="flex justify-center space-x-25">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`
            font-assistant uppercase tracking-wider font-normal text-lg transition-colors
            ${pathname === link.href ? "text-pink-600" : "text-gray-700"}
            hover:text-pink-400
          `}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
