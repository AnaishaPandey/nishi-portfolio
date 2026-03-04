"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { siteConfig } from "@/config/site.config";
import { HiEnvelope, HiPaperAirplane } from "react-icons/hi2";
import KawaiiStar from "@/components/decorations/KawaiiStar";
import KawaiiCloud from "@/components/decorations/KawaiiCloud";

export default function ContactForm() {
  return (
    <div className="relative max-w-lg mx-auto">
      {/* Decorations */}
      <div className="absolute -top-10 -left-10 pointer-events-none" aria-hidden="true">
        <KawaiiCloud className="w-24 opacity-50" />
      </div>
      <div className="absolute -bottom-5 -right-5 pointer-events-none" aria-hidden="true">
        <KawaiiStar className="w-16" color="#87CEEB" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="glass rounded-3xl p-8 md:p-12 text-center relative z-10"
      >
        {/* Icon */}
        <motion.div variants={fadeInUp} className="mb-6">
          <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-kawaii-pink to-kawaii-purple flex items-center justify-center">
            <HiEnvelope className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h3
          variants={fadeInUp}
          className="text-xl font-bold text-kawaii-text mb-3"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Say Hello!
        </motion.h3>

        <motion.p variants={fadeInUp} className="text-sm text-kawaii-text-light mb-8">
          Want to get in touch? Send me an email and I&apos;ll get back to you!
        </motion.p>

        {/* Email Button */}
        <motion.div variants={fadeInUp}>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-kawaii-pink to-kawaii-purple text-white font-medium shadow-lg shadow-kawaii-pink/25 hover:shadow-kawaii-pink/40 transition-all hover:scale-105"
          >
            <HiPaperAirplane className="w-5 h-5" />
            Send an Email
          </a>
        </motion.div>

        {/* Email text */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xs text-kawaii-text-light"
        >
          {siteConfig.contact.email}
        </motion.p>

        {/* Social Links */}
        {siteConfig.contact.socials.length > 0 && (
          <motion.div variants={fadeInUp} className="mt-8 pt-6 border-t border-kawaii-pink/20">
            <p className="text-xs text-kawaii-text-light mb-4">Find me on</p>
            <div className="flex justify-center gap-4">
              {siteConfig.contact.socials.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-kawaii-pink/20 transition-colors"
                  aria-label={social.platform}
                >
                  {social.platform[0]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
