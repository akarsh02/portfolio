"use client";

import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { ArrowDown, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

function ScrambleText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text.replace(/[a-zA-Z]/g, "0"));
  
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
    let iteration = 0;
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration || letter === " ") {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );
      
      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 40);
    
    return () => clearInterval(interval);
  }, [text]);

  return <>{displayText}</>;
}

export default function Hero() {
  const { header } = portfolioData;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Don't tilt on small screens due to lack of accurate mouse
      if (window.innerWidth < 768) return;
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Spring animations for a smooth, heavy physics feel
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [15, -15]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-15, 15]), { stiffness: 100, damping: 30 });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 pb-10 overflow-hidden" style={{ perspective: 1200 }}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl w-full flex flex-col items-center text-center space-y-8 z-10"
      >
        <motion.div variants={itemVariants} style={{ transform: "translateZ(80px)" }} className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span>Available for new opportunities</span>
        </motion.div>

        <motion.h1 variants={itemVariants} style={{ transform: "translateZ(120px)" }} className="text-5xl md:text-7xl font-extrabold tracking-tight py-2 leading-tight">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-500 to-violet-500 animate-gradient-xy drop-shadow-[0_0_30px_rgba(45,212,191,0.2)]">
             <ScrambleText text={header.title} />
          </span>
          <span className="block mt-4 text-white/90 drop-shadow-xl text-3xl md:text-5xl font-bold overflow-hidden">
             <ScrambleText text={`Building ${header.focus}`} />
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} style={{ transform: "translateZ(60px)" }} className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl">
          {header.tagline}
        </motion.p>
        
        <motion.p variants={itemVariants} style={{ transform: "translateZ(40px)" }} className="text-base text-gray-500 max-w-2xl leading-relaxed">
          I specialize in creating high-performance, responsive, and beautifully animated 
          web applications that bridge the gap between intuitive design and complex Web3 logic.
        </motion.p>
        
        <motion.div variants={itemVariants} style={{ transform: "translateZ(80px)" }} className="flex items-center space-x-4 pt-4">
          <a href="mailto:akarsh226@gmail.com" className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            Hire Me
          </a>
          <a href="#experience" className="inline-block px-8 py-4 rounded-full border border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-white font-medium transition-colors backdrop-blur-sm">
            View Work
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex space-x-6 pt-8 text-gray-400 z-50 relative pointer-events-auto">
          <a href="https://github.com/akarsh02" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><FaGithub size={30} /></a>
          <a href="https://www.linkedin.com/in/akarsh-b-02/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><FaLinkedin size={30} /></a>
          <a href="https://x.com/Akarshb02" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors"><FaTwitter size={30} /></a>
          <a href="mailto:akarsh226@gmail.com" className="hover:text-blue-400 transition-colors"><Mail size={30} /></a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
}
