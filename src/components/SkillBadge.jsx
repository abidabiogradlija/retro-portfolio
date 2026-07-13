export default function SkillBadge({ children }) {
  return (
    <div
      className="
        rounded-lg
        border
        border-retro-gold/20
        bg-deep-navy

        px-6
        py-3

        text-lg
        font-semibold
        font-body
        text-ivory

        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-retro-gold
        hover:text-retro-gold
        hover:shadow-[0_0_20px_rgba(240,209,125,.18)]
      "
    >
      {children}
    </div>
  );
}