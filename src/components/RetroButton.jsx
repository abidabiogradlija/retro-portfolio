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
        px-8
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        hover:scale-105
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        ${variants[variant]}
      `}
    >
      {children}
    </button>
  );
}