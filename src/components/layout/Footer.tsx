import { siteConfig } from "@/config/site.config";
import { HiEnvelope, HiHeart } from "react-icons/hi2";

export default function Footer() {
  return (
    <footer className="relative z-10 mt-20 py-8 text-center">
      <div className="glass-strong max-w-5xl mx-auto rounded-t-3xl px-6 py-8">
        {/* Email */}
        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="inline-flex items-center gap-2 text-kawaii-text-light hover:text-kawaii-pink transition-colors text-sm"
        >
          <HiEnvelope className="w-4 h-4" />
          {siteConfig.contact.email}
        </a>

        {/* Divider */}
        <div className="my-4 h-px bg-gradient-to-r from-transparent via-kawaii-pink/30 to-transparent" />

        {/* Credits */}
        <p className="text-xs text-kawaii-text-light flex items-center justify-center gap-1">
          Made with <HiHeart className="w-3 h-3 text-kawaii-pink" /> by {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
