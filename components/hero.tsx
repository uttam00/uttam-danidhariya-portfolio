"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background/80" />
        <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/10 to-transparent blur-3xl opacity-30 dark:opacity-20" />

        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {mounted &&
            Array.from({ length: 20 }).map((_, i) => {
              const size = Math.random() * 10 + 5;
              const duration = Math.random() * 20 + 10;
              const delay = Math.random() * 5;
              const initialX = Math.random() * 100;
              const initialY = Math.random() * 100;

              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-primary/20"
                  style={{
                    width: size,
                    height: size,
                    left: `${initialX}%`,
                    top: `${initialY}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 50 - 25, 0],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration,
                    delay,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
              );
            })}
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center">
        {/* Image/Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary/40 blur-xl opacity-20 animate-pulse" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/ud_profile.jpeg"
                alt="Uttam Danidhariya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-primary">Uttam Danidhariya</span>
          </h1>
          <div className="text-xl md:text-2xl font-medium mb-6 h-12">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "React Specialist",
                1000,
                "Next.js Expert",
                1000,
                "UI/UX Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
              className="text-muted-foreground"
            />
          </div>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto md:mx-0">
            Frontend Developer with expertise in creating scalable web
            applications utilizing React.js and Next.js. Proficient in API
            integration and converting Figma designs into responsive user
            interfaces. Recognized for strong problem-solving abilities and
            clean coding practices, fostering effective collaboration with
            cross-functional teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full" asChild>
              <a href="/Uttam_Danidhariya_Resume.pdf" download>
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full"
              asChild
            >
              <Link href="#contact">
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
