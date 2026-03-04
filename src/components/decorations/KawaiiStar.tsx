export default function KawaiiStar({
  className = "",
  color = "#FFE4B5",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 60"
      className={`${className}`}
      style={{ animation: "bounce-soft 2s ease-in-out infinite" }}
    >
      <path
        d="M30 5L35.5 22L53 22L39 33L43.5 50L30 40L16.5 50L21 33L7 22L24.5 22L30 5Z"
        fill={color}
      />
      {/* Cute face */}
      <circle cx="24" cy="28" r="1.8" fill="#4A4A6A" />
      <circle cx="36" cy="28" r="1.8" fill="#4A4A6A" />
      <ellipse cx="24" cy="27.5" rx="0.7" ry="0.4" fill="white" />
      <ellipse cx="36" cy="27.5" rx="0.7" ry="0.4" fill="white" />
      <path
        d="M27 32 Q30 35 33 32"
        fill="none"
        stroke="#4A4A6A"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      {/* Blush */}
      <ellipse cx="20" cy="31" rx="3" ry="1.8" fill="#FFB6C1" opacity="0.5" />
      <ellipse cx="40" cy="31" rx="3" ry="1.8" fill="#FFB6C1" opacity="0.5" />
    </svg>
  );
}
