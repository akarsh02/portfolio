"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Smooth springs for the cursor
  const cursorX = useSpring(0, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(0, { stiffness: 500, damping: 28 });
  
  // Slower spring for the trailing aura
  const auraX = useSpring(0, { stiffness: 100, damping: 20 });
  const auraY = useSpring(0, { stiffness: 100, damping: 20 });

  useEffect(() => {
    // Only show on non-touch devices
    if (window.matchMedia('(max-width: 768px)').matches) return;
    setIsVisible(true);

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      
      auraX.set(e.clientX - 24);
      auraY.set(e.clientY - 24);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, auraX, auraY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny solid dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-teal-400 rounded-full pointer-events-none z-[9999] mix-blend-screen hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      
      {/* Trailing glowing aura */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border border-teal-500/50 pointer-events-none z-[9998] mix-blend-screen hidden md:block"
        style={{
          x: auraX,
          y: auraY,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(45, 212, 191, 0.2)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
