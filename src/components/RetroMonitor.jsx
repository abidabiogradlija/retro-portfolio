export default function RetroMonitor({
  children,
  type = "desktop",
}) {
  return (
    <div
      className={`
        relative
        mx-auto
        w-full

        ${
          type === "mobile"
            ? "max-w-[420px]"
            : "max-w-[1050px]"
        }
      `}
    >
      {/* TV BODY */}

      <div
        className="
          relative

          mt-20

          rounded-[34px]

          border-[4px]
          border-retro-gold/40

          bg-[#1A2B4D]

          shadow-[0_20px_60px_rgba(0,0,0,.45)]

          overflow-hidden
        "
      >
        {/* SCREEN */}

        <div
          className="
            pl-6
            pr-[90px]

            pt-6
            pb-6
          "
        >
          {children}
        </div>
      </div>

      {/* FEET će doći kasnije */}

      {/* ANTENNAS će doći kasnije */}
    </div>
  );
}