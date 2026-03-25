"use client";

import { motion, Variants } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Skills() {
  const { skills } = portfolioData;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100 }
    },
  };

  return (
    <section id="skills" className="py-20 px-6 max-w-5xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400"
      >
        Technical Arsenal
      </motion.h2>

      <div className="space-y-16">
        {Object.entries(skills).map(([category, items], catIndex) => (
          <div key={category} className="flex flex-col items-center">
            <motion.h3 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-xl md:text-2xl font-light text-gray-500 mb-8 uppercase tracking-widest border-b border-gray-800 pb-2"
            >
              {category}
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap justify-center gap-4"
            >
              {items.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  drag
                  dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                  dragElastic={0.6}
                  dragSnapToOrigin={true}
                  whileDrag={{ scale: 1.2, rotate: Math.random() * 20 - 10, zIndex: 50, cursor: "grabbing" }}
                  whileHover={{ scale: 1.05, y: -5, cursor: "grab" }}
                  className="px-6 py-3 bg-gray-900/80 border border-teal-500/20 rounded-xl text-teal-100 font-medium tracking-wide shadow-[0_0_15px_rgba(45,212,191,0.05)] hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] hover:border-teal-400 hover:text-white transition-colors backdrop-blur-xl"
                >
                  {skill}
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
