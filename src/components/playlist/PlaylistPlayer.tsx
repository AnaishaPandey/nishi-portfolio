"use client";

import { useState } from "react";
import type { Song } from "@/types";
import SongCard from "./SongCard";

function getEmbedUrl(song: Song): string {
  if (song.platform === "youtube") {
    return `https://www.youtube.com/embed/${song.embedId}?autoplay=0&rel=0`;
  }
  // Spotify: embedId is like "track/4PTG3Z6ehGkBFwjybzWkR8"
  return `https://open.spotify.com/embed/${song.embedId}?theme=0`;
}

export default function PlaylistPlayer({ songs }: { songs: Song[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSong = songs[currentIndex];

  const playNext = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const playPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Now Playing Card */}
      <div className="glass rounded-3xl p-6 md:p-8 mb-6">
        {/* Song Info */}
        <div className="text-center mb-5">
          <h3
            className="text-lg font-bold text-kawaii-text mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {currentSong?.title || "No song selected"}
          </h3>
          <p className="text-sm text-kawaii-text-light">
            {currentSong?.artist || ""}
          </p>
          <span className="inline-block mt-2 px-3 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-kawaii-pink/15 text-kawaii-pink">
            {currentSong?.platform}
          </span>
        </div>

        {/* Embed iframe */}
        <div
          className={`rounded-2xl overflow-hidden shadow-lg mb-5 ${
            currentSong?.platform === "youtube"
              ? "aspect-video"
              : "h-[152px]"
          }`}
        >
          <iframe
            key={`${currentSong?.platform}-${currentSong?.embedId}`}
            src={getEmbedUrl(currentSong)}
            className="w-full h-full border-0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={currentSong?.title}
          />
        </div>

        {/* Prev / Next Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={playPrev}
            className="p-2 rounded-full hover:bg-kawaii-pink/20 transition-colors text-kawaii-text"
            aria-label="Previous"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <span className="text-xs text-kawaii-text-light">
            {currentIndex + 1} / {songs.length}
          </span>

          <button
            onClick={playNext}
            className="p-2 rounded-full hover:bg-kawaii-pink/20 transition-colors text-kawaii-text"
            aria-label="Next"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Song List */}
      <div className="glass rounded-2xl p-4 space-y-1">
        {songs.map((song, index) => (
          <SongCard
            key={index}
            song={song}
            index={index}
            isActive={index === currentIndex}
            onSelect={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}
