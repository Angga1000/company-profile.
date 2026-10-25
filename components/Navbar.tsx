"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../data/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <Image src="/images/logo.webp" alt="" width={36} height={36} priority />
          <span>Nusantara Digital</span>
        </Link>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-utama"
          onClick={() => setOpen(!open)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
        <nav aria-label="Navigasi utama">
          <ul id="menu-utama" className={`nav-links${open ? " open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link${isActive(link.href) ? " active" : ""}`}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}