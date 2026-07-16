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
          type === "desktop"
            ? "max-w-[1050px]"
            : "max-w-[420px] sm:max-w-[520px] md:max-w-[650px]"
        }
      `}
    >
      {/* MONITOR */}
      <div
        className="
          relative
          mt-20
          flex
          flex-row
          items-start
          gap-3
          sm:gap-4
          lg:gap-5
          rounded-[24px]
          sm:rounded-[30px]
          lg:rounded-[36px]
          border-[3px]
          sm:border-[4px]
          lg:border-[5px]
          border-retro-gold/40
          bg-[#1A2B4D]
          p-3
          sm:p-4
          lg:p-5
          shadow-[0_20px_60px_rgba(0,0,0,.45)]
        "
      >
        {/* ANTENNAS */}
        <div
          className="
            absolute
            left-1/2
            top-0
            -translate-x-1/2
            -translate-y-full
            pointer-events-none
            z-20
          "
        >
          <div className="relative h-12 w-32">
            {/* BRIDGE */}
            <div
              className="
                absolute
                left-1/2
                bottom-0
                h-5
                w-12
                -translate-x-1/2
                rounded-t-lg
                border-2
                border-retro-gold
                border-b-0
                bg-[#1A2B4D]
                z-30
              "
            />
            {/* LEFT ANTENNA - ide gore-lijevo */}
            <div
              className="absolute rounded-full bg-retro-gold"
              style={{
                left: '50%',
                bottom: '14px',
                height: '3px',
                width: '112px',
                transformOrigin: 'right',
                transform: 'translateX(-100%) rotate(28deg)',
              }}
            />
            {/* RIGHT ANTENNA - ide gore-desno */}
            <div
              className="absolute rounded-full bg-retro-gold"
              style={{
                right: '50%',
                bottom: '14px',
                height: '3px',
                width: '112px',
                transformOrigin: 'left',
                transform: 'translateX(100%) rotate(-28deg)',
              }}
            />
          </div>
        </div>

        {/* SCREEN - uzima svu širinu, on diktira visinu TV-a */}
        <div className="flex-1 min-w-0">
          {children}
        </div>

        {/* SIDE PANEL - fiksna širina, ne rasteže TV */}
        <div className="flex w-[70px] sm:w-[85px] lg:w-[105px] shrink-0 flex-col items-center self-stretch">
          {/* SPEAKER */}
          <div className="mt-2 sm:mt-3 flex flex-col gap-[5px]">
            {Array.from({ length: 16 }).map((_, index) => (
              <div
                key={index}
                className="h-[2px] w-8 sm:w-10 md:w-12 lg:w-14 rounded-full bg-retro-gold/60"
              />
            ))}
          </div>

          {/* BIG KNOB */}
          <div className="mt-6 sm:mt-8 flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 items-center justify-center rounded-full border-4 border-retro-gold bg-[#24375F]">
            <div className="h-2 w-2 rounded-full bg-retro-gold" />
          </div>

          {/* SMALL KNOB */}
          <div className="mt-4 sm:mt-6 flex h-10 w-10 sm:h-11 sm:w-11 lg:h-12 lg:w-12 items-center justify-center rounded-full border-4 border-retro-gold bg-[#24375F]">
            <div className="h-2 w-2 rounded-full bg-retro-gold" />
          </div>

          {/* LED */}
          <div className="mt-auto pt-8 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500 shadow-[0_0_12px_red]" />
        </div>
      </div>

      {/* FEET - fiksirano sa % da ne skače na mobitelu */}
      <div className="relative h-14 sm:h-16">
        <div
          className="absolute h-14 sm:h-16 w-[6px] rounded-full bg-retro-gold"
          style={{ left: '22%', transform: 'rotate(18deg)', transformOrigin: 'top' }}
        />
        <div
          className="absolute h-14 sm:h-16 w-[6px] rounded-full bg-retro-gold"
          style={{ right: '22%', transform: 'rotate(-18deg)', transformOrigin: 'top' }}
        />
      </div>
    </div>
  );
}
