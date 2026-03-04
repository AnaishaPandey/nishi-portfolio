import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/ui/SectionHeading";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export default function GalleryPage() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="My Gallery"
          subtitle="A collection of my favorite drawings and artworks!"
        />
        <GalleryGrid items={siteConfig.gallery} />
      </div>
    </section>
  );
}
