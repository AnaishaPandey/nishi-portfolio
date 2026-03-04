import KawaiiCloud from "./KawaiiCloud";
import KawaiiStar from "./KawaiiStar";
import Sparkle from "./Sparkle";

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <KawaiiCloud className="absolute -top-2 -left-8 w-28 opacity-60" />
      <KawaiiCloud className="absolute top-20 -right-10 w-24 opacity-40" />
      <KawaiiStar className="absolute top-10 right-20 w-12" color="#FFB6C1" />
      <KawaiiStar
        className="absolute bottom-10 left-10 w-10"
        color="#87CEEB"
      />
      <Sparkle className="absolute top-32 left-1/4 w-4" color="#DDA0DD" />
      <Sparkle className="absolute bottom-20 right-1/3 w-3" color="#FFE4B5" />
      <Sparkle className="absolute top-1/2 right-10 w-5" color="#FFB6C1" />
    </div>
  );
}
