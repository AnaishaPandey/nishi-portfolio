"use client";

export default function NowPlaying({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div className="flex items-end gap-[3px] h-4">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-kawaii-pink"
          style={{
            height: isPlaying ? undefined : "4px",
            animation: isPlaying
              ? `sound-bar 0.8s ease-in-out ${i * 0.15}s infinite`
              : "none",
          }}
        />
      ))}
    </div>
  );
}
