import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CustomCursor } from "@/components/CustomCursor";
import { ParticleBackground } from "@/components/ParticleBackground";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | Web2 & Web3 Developer",
  description: "Senior Frontend Developer specializing in React, Next.js, and Web3 applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark cursor-auto md:cursor-none`}
    >
      <body className="min-h-full flex flex-col relative bg-black text-gray-100 overflow-x-hidden selection:bg-teal-500/30 selection:text-white">
        <CustomCursor />
        <ParticleBackground />

        {/* Animated Background Orbs */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/20 blur-[100px] mix-blend-screen animate-blob" />
          <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: "2s" }} />
          <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-teal-600/20 blur-[100px] mix-blend-screen animate-blob" style={{ animationDelay: "4s" }} />
        </div>

        {children}
      </body>
    </html>
  );
}
