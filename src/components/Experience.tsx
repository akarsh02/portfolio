"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400"
      >
        Experience
      </motion.h2>

      <div className="relative ml-4 md:ml-0">
        {/* Animated drawing line */}
        <motion.div 
          className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-teal-500 to-transparent origin-top hidden md:block"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        {experience.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -30, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
            className="mb-12 ml-8 md:ml-12 relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-blue-500 border-4 border-black" />
            
            <div className="glass p-6 md:p-8 rounded-2xl hover:glass-glow transition-all duration-300 group bg-gray-900/80 backdrop-blur-2xl border-gray-700/50">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-2xl font-semibold text-white group-hover:text-blue-300 transition-colors">{exp.role}</h3>
                  <p className="text-lg text-blue-400/90">{exp.company}</p>
                </div>
                <div className="text-gray-400 bg-gray-900/80 px-4 py-1.5 rounded-full text-sm font-medium inline-block self-start border border-gray-800/50">
                  {exp.period}
                </div>
              </div>
              
              <div className="text-sm font-medium text-gray-500 mb-6 flex items-center gap-2">
                <span>{exp.location}</span>
                <span className="w-1 h-1 rounded-full bg-gray-600" />
                <span>{exp.type}</span>
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-4">{exp.description}</p>
              
              {exp.contributions && (
                <ul className="space-y-3 mt-4">
                  {exp.contributions.map((contribution, idx) => (
                    <li key={idx} className="leading-snug flex items-start text-gray-400">
                      <span className="mr-3 text-blue-500 mt-1.5">▹</span>
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
