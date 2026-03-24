import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      
      {/* Footer */}
      <footer className="w-full py-8 text-center border-t border-gray-900/50 mt-20 text-gray-600 backdrop-blur-sm z-10 glass">
        <p>© {new Date().getFullYear()} Web Developer. Built with Next.js, Framer Motion, and Tailwind CSS.</p>
      </footer>
    </main>
  );
}
