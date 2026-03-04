"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { siteConfig } from "@/config/site.config";
import FloatingElements from "@/components/decorations/FloatingElements";

export default function HeroSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <FloatingElements />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl mx-auto px-4 text-center"
      >
        {/* Avatar */}
        <motion.div variants={scaleIn} className="mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-kawaii-pink via-kawaii-purple to-kawaii-blue p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-5xl md:text-6xl overflow-hidden">
                <span role="img" aria-label="avatar">
                  🌸
                </span>
              </div>
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-kawaii-pink/30 animate-[twinkle_3s_ease-in-out_infinite] scale-110" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl md:text-6xl font-bold gradient-text mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {siteConfig.name}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="text-lg md:text-xl text-kawaii-text-light max-w-lg mx-auto"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={fadeInUp} className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="/gallery"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-kawaii-pink to-kawaii-purple text-white font-medium text-sm shadow-lg shadow-kawaii-pink/25 hover:shadow-kawaii-pink/40 transition-shadow"
          >
            See My Art
          </a>
          <a
            href="/playlist"
            className="px-6 py-3 rounded-full glass text-kawaii-text font-medium text-sm hover:bg-white/80 transition-colors"
          >
            My Playlist
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
