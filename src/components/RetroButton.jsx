export default function RetroButton({
  children,
  variant = "primary",
  disabled = false,
  onClick,
  type = "button",
}) {
  const variants = {
    primary:
      "bg-retro-gold text-midnight hover:bg-golden-glow",

    secondary:
      "border border-retro-gold text-retro-gold hover:bg-deep-navy",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        w-full
        sm:w-auto

        px-6
        sm:px-8

        py-3
        sm:py-4

        rounded-xl

        font-retro

        text-sm
        sm:text-base
        lg:text-lg

        tracking-[0.2em]
        uppercase

        transition-all
        duration-300

        hover:scale-105
        hover:shadow-[0_0_18px_rgba(240,209,125,0.45)]

        active:scale-95

        disabled:opacity-60
        disabled:cursor-not-allowed

        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}