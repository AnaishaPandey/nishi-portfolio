"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/ui/SectionHeading";

const friendBorders: Record<string, string> = {
  pink: "border-kawaii-pink/40",
  blue: "border-kawaii-blue/40",
  purple: "border-kawaii-purple/40",
};

const friendBg: Record<string, string> = {
  pink: "from-kawaii-pink/20 to-kawaii-pink/5",
  blue: "from-kawaii-blue/20 to-kawaii-blue/5",
  purple: "from-kawaii-purple/20 to-kawaii-purple/5",
};

export default function FriendsSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="My BFFs"
          subtitle="The best friends a girl could ask for!"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
        >
          {siteConfig.friends.map((friend) => (
            <motion.div
              key={friend.name}
              variants={fadeInUp}
              className={`hobby-card glass rounded-2xl p-6 text-center border-2 ${
                friendBorders[friend.color] || "border-white/30"
              } bg-gradient-to-b ${friendBg[friend.color] || ""}`}
            >
              {/* Avatar circle */}
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-white/80 flex items-center justify-center text-3xl shadow-md">
                {friend.emoji}
              </div>

              <h3
                className="text-lg font-bold text-kawaii-text mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {friend.name}
              </h3>

              <p className="text-sm text-kawaii-text-light leading-relaxed">
                {friend.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
