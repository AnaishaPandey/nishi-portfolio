"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import Sparkle from "@/components/decorations/Sparkle";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-3">
        <Sparkle className="w-5 h-5" color="#FFB6C1" />
        <h2
          className="text-3xl md:text-4xl font-bold gradient-text"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h2>
        <Sparkle className="w-5 h-5" color="#87CEEB" />
      </div>
      {subtitle && (
        <p className="mt-3 text-kawaii-text-light text-sm md:text-base">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
