"use client";

import type { Song } from "@/types";
import { FaYoutube, FaSpotify } from "react-icons/fa";

export default function SongCard({
  song,
  index,
  isActive,
  onSelect,
}: {
  song: Song;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`song-card w-full flex items-center gap-4 p-4 rounded-xl text-left ${
        isActive ? "active" : ""
      }`}
    >
      {/* Track number */}
      <div className="w-8 flex justify-center">
        <span className="text-sm text-kawaii-text-light">{index + 1}</span>
      </div>

      {/* Song info */}
      <div className="flex-1 min-w-0">
        <p
          className={`text-sm font-semibold truncate ${
            isActive ? "text-kawaii-pink" : "text-kawaii-text"
          }`}
        >
          {song.title}
        </p>
        <p className="text-xs text-kawaii-text-light truncate">{song.artist}</p>
      </div>

      {/* Platform icon */}
      <div className="text-kawaii-text-light">
        {song.platform === "youtube" ? (
          <FaYoutube className="w-5 h-5 text-red-400" />
        ) : (
          <FaSpotify className="w-5 h-5 text-green-400" />
        )}
      </div>
    </button>
  );
}
