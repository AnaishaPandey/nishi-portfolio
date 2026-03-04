export default function KawaiiCloud({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 80"
      className={`${className}`}
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <ellipse cx="60" cy="50" rx="50" ry="25" fill="white" opacity="0.8" />
      <ellipse cx="35" cy="40" rx="30" ry="22" fill="white" opacity="0.8" />
      <ellipse cx="85" cy="40" rx="30" ry="22" fill="white" opacity="0.8" />
      <ellipse cx="60" cy="35" rx="35" ry="25" fill="white" opacity="0.9" />
      {/* Cute face */}
      <circle cx="48" cy="45" r="2.5" fill="#4A4A6A" />
      <circle cx="72" cy="45" r="2.5" fill="#4A4A6A" />
      <ellipse cx="48" cy="44" rx="1" ry="0.5" fill="white" />
      <ellipse cx="72" cy="44" rx="1" ry="0.5" fill="white" />
      <path
        d="M55 50 Q60 55 65 50"
        fill="none"
        stroke="#4A4A6A"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Blush */}
      <ellipse cx="42" cy="50" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="78" cy="50" rx="4" ry="2.5" fill="#FFB6C1" opacity="0.5" />
    </svg>
  );
}
