export default function RetroCard({ children, className = "" }) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-white/10
        bg-deep-navy
        p-6
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-retro-gold
        ${className}
      `}
    >
      {children}
    </div>
  );
}