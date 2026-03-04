"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/ui/SectionHeading";
import { HiMapPin, HiAcademicCap, HiHeart } from "react-icons/hi2";

export default function AboutSection() {
  const { about } = siteConfig;

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="About Me" subtitle="A little about who I am!" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          <motion.p
            variants={fadeInUp}
            className="text-center text-kawaii-text text-base md:text-lg mb-8 leading-relaxed"
          >
            {about.bio}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {/* Location */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-kawaii-pink/10">
              <HiMapPin className="w-5 h-5 text-kawaii-pink shrink-0" />
              <div>
                <div className="text-xs text-kawaii-text-light">Location</div>
                <div className="text-sm font-semibold text-kawaii-text">
                  {about.location}
                </div>
              </div>
            </div>

            {/* Grade */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-kawaii-blue/10">
              <HiAcademicCap className="w-5 h-5 text-kawaii-blue shrink-0" />
              <div>
                <div className="text-xs text-kawaii-text-light">Grade</div>
                <div className="text-sm font-semibold text-kawaii-text">
                  {about.grade}
                </div>
              </div>
            </div>

            {/* Favorite Colors */}
            <div className="flex items-center gap-3 p-4 rounded-xl bg-kawaii-purple/10">
              <HiHeart className="w-5 h-5 text-kawaii-purple shrink-0" />
              <div>
                <div className="text-xs text-kawaii-text-light">Fav Colors</div>
                <div className="text-sm font-semibold text-kawaii-text">
                  {about.favoriteColors.join(", ")}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
