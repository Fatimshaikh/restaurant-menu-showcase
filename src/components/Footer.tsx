
"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/10 py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="font-display text-2xl text-text-main">
            Ember & Oak
          </h3>

          <p className="text-text-muted text-sm mt-2">
            123 Fireside Lane, Karachi, Sindh
          </p>
        </motion.div>

        <motion.div
          className="flex gap-6 text-sm text-text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {["Instagram", "Facebook", "Twitter"].map((social) => (
            <a
              key={social}
              href="#"
              data-cursor-hover
              className="hover:text-primary transition-colors duration-300"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-white/5 text-xs text-text-muted">
        © {new Date().getFullYear()} Ember & Oak. Built with Next.js,
        TypeScript, Tailwind & Framer Motion.
      </div>
    </footer>
  );
}