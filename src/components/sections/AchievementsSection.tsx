"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, string> = {
  trophy: "🏆",
  medal: "🎖️",
  silver: "🥈",
  gold: "🥇",
  star: "⭐",
  certificate: "📜",
};

export default function AchievementsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading
          title="Achievements"
          subtitle="Moments I'm really proud of!"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-4"
        >
          {siteConfig.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="hobby-card glass rounded-2xl p-5 flex items-center gap-5"
            >
              {/* Icon */}
              <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-kawaii-yellow/40 to-kawaii-pink/20 flex items-center justify-center text-2xl shadow-sm">
                {iconMap[achievement.icon] || "⭐"}
              </div>

              {/* Details */}
              <div className="flex-1 min-w-0">
                <h3
                  className="text-base font-bold text-kawaii-text"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {achievement.title}
                </h3>
                <p className="text-sm text-kawaii-text-light">
                  {achievement.description}
                </p>
              </div>

              {/* Year badge */}
              <span className="shrink-0 px-3 py-1 rounded-full text-xs font-semibold bg-kawaii-purple/15 text-kawaii-purple">
                {achievement.year}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
