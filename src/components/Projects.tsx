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
            className="group glass rounded-2xl flex flex-col h-full hover:glass-glow transition-all duration-300 relative overflow-hidden bg-gray-900/80 backdrop-blur-2xl border-gray-700/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
            
            {/* Project Image Placeholder / Abstract Gradient Cover */}
            <div className="h-32 w-full bg-gradient-to-br from-gray-800 to-black relative overflow-hidden flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity z-10 border-b border-gray-800/80">
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMTExIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wLDBMODwyIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20 mix-blend-overlay" />
               <FaGithub size={48} className="text-gray-700 group-hover:text-teal-500/30 transition-all duration-700 transform group-hover:scale-125 group-hover:rotate-12" />
            </div>

            <div className="p-6 flex flex-col flex-grow z-10">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-black/60 rounded-xl text-teal-400 border border-teal-900/30">
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
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-teal-300 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-mono text-teal-200/70 bg-teal-900/20 px-2.5 py-1 rounded-md border border-teal-800/30">
                    {tag}
                  </span>
                ))}
              </div>
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
