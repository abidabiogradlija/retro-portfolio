export default function SkillBadge({ children }) {
  return (
    <div
      className="
        rounded-lg

        border
        border-retro-gold/20

        bg-deep-navy

        px-3
        py-2

        sm:px-4
        sm:py-2.5

        lg:px-6
        lg:py-3

        text-sm
        sm:text-base
        lg:text-lg

        font-body
        font-semibold

        text-ivory

        break-words

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