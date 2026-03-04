import { siteConfig } from "@/config/site.config";
import SectionHeading from "@/components/ui/SectionHeading";
import PlaylistPlayer from "@/components/playlist/PlaylistPlayer";

export default function PlaylistPage() {
  return (
    <section className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="My Playlist"
          subtitle="My favorite songs to dance and sing along to!"
        />
        <PlaylistPlayer songs={siteConfig.playlist} />
      </div>
    </section>
  );
}
