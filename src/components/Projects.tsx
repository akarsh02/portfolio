"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa6";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const { projects } = portfolioData;
  const displayedProjects = projects.slice(0, 6);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto w-full">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400"
      >
        Featured Projects
      </motion.h2>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.04, y: -12, transition: { type: "spring", stiffness: 350, damping: 15 } }}
            className="group glass p-6 rounded-2xl flex flex-col h-full hover:glass-glow transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex justify-between items-start mb-4 z-10">
              <div className="p-3 bg-gray-900/60 rounded-xl text-teal-400 border border-teal-900/30">
                <FaGithub size={24} />
              </div>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-500 hover:text-teal-400 transition-colors p-2"
              >
                <ExternalLink size={20} />
              </a>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 z-10 group-hover:text-teal-300 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 flex-grow z-10 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto z-10">
              {project.tags.map((tag, i) => (
                <span key={i} className="text-xs font-mono text-teal-200/70 bg-teal-900/20 px-2.5 py-1 rounded-md border border-teal-800/30">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-16 flex justify-center"
      >
        <a 
          href="https://github.com/akarsh02" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full border border-teal-500/30 bg-teal-500/10 hover:bg-teal-500/20 text-teal-300 font-medium transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(45,212,191,0.1)]"
        >
          <FaGithub size={20} />
          <span>View All {projects.length} Repositories</span>
        </a>
      </motion.div>
    </section>
  );
}
