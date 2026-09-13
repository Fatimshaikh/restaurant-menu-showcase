"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { dishes } from "@/data/menu";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
};

export default function MenuGrid() {
  return (
    <section id="menu" className="bg-bgSoft py-24 px-6 md:px-16">
      <motion.h2
        className="font-display text-4xl md:text-5xl text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        The Menu
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {dishes.map((dish, i) => (
          <motion.div
            key={dish.id}
            data-cursor-hover
            className="group relative rounded-2xl overflow-hidden aspect-[4/5] cursor-pointer"
            custom={i}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src={dish.image}
              alt={dish.name}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <span className="text-secondary text-xs uppercase tracking-widest">
                {dish.category}
              </span>
              <h3 className="font-display text-2xl text-text-main mt-1">
                {dish.name}
              </h3>
              <p className="text-text-muted text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {dish.description}
              </p>
              <span className="block mt-3 text-primary font-semibold">
                {dish.price}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
