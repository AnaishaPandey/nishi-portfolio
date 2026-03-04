export default function Sparkle({
  className = "",
  color = "#FFB6C1",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`inline-block ${className}`}
      style={{ animation: "sparkle 2s ease-in-out infinite" }}
    >
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill={color}
      />
    </svg>
  );
}
