"use client";

import { motion } from "framer-motion";

const headline = "Ember & Oak";
const subheadline = "Modern fire cuisine, rooted in tradition.";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const letter = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", damping: 14, stiffness: 100 },
  },
};

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-bg">
      <motion.h1
        className="font-display text-6xl md:text-8xl text-text-main flex flex-wrap justify-center gap-x-4 overflow-hidden"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {headline.split(" ").map((word, i) => (
          <span key={i} className="overflow-hidden inline-block">
            <motion.span variants={letter} className="inline-block">
              {word}
            </motion.span>
          </span>
        ))}
      </motion.h1>

      <motion.p
        className="mt-6 text-lg md:text-xl text-text-muted font-body tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        {subheadline}
      </motion.p>

      <motion.a
        href="#menu"
        data-cursor-hover
        className="mt-12 px-8 py-3 rounded-full border border-primary text-primary font-body tracking-wide hover:bg-primary hover:text-bg transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        View Menu
      </motion.a>

      <motion.div
        className="absolute bottom-10 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-text-muted" />
      </motion.div>
    </section>
  );
}
