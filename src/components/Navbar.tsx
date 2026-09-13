"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-colors duration-500 ${
        scrolled ? "bg-bg/90 backdrop-blur-md" : "bg-transparent"
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="font-display text-xl text-text-main">Ember & Oak</span>

      <div className="hidden md:flex gap-8 font-body text-sm tracking-wide text-text-muted">
        {["Menu", "About", "Reservations", "Contact"].map((item) => (
          
            key={item}
            <a
            href={item === "Menu" ? "#menu" : "#"}
            data-cursor-hover
            className="relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
          </a>
        ))}
      </div>

      
        href="#"
        data-cursor-hover
        className="px-5 py-2 rounded-full bg-primary text-bg text-sm font-semibold hover:bg-secondary transition-colors duration-300"
      >
        Reserve
      </a>
    </motion.nav>
  );
}
