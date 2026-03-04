"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/ui/SectionHeading";

const hobbyEmojis: Record<string, string> = {
  dancing: "💃",
  drawing: "🎨",
  singing: "🎤",
};

const hobbyGradients: Record<string, string> = {
  pink: "from-kawaii-pink/20 to-kawaii-pink/5",
  blue: "from-kawaii-blue/20 to-kawaii-blue/5",
  purple: "from-kawaii-purple/20 to-kawaii-purple/5",
};

const hobbyBorders: Record<string, string> = {
  pink: "border-kawaii-pink/30",
  blue: "border-kawaii-blue/30",
  purple: "border-kawaii-purple/30",
};

export default function HobbiesSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="My Hobbies"
          subtitle="Things I love to do every day!"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {siteConfig.hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              variants={fadeInUp}
              className={`hobby-card glass rounded-2xl p-8 text-center border ${
                hobbyBorders[hobby.color] || "border-white/30"
              } bg-gradient-to-b ${
                hobbyGradients[hobby.color] || ""
              }`}
            >
              <div className="text-5xl mb-4">
                {hobbyEmojis[hobby.icon] || "⭐"}
              </div>
              <h3
                className="text-xl font-bold text-kawaii-text mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {hobby.title}
              </h3>
              <p className="text-sm text-kawaii-text-light">
                {hobby.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
