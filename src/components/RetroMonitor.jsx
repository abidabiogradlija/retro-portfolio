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
            : "max-w-[650px]"
        }
      `}
    >
      {/* MONITOR */}

      <div
        className="
          relative

          mt-20

          grid

          grid-cols-[1fr_105px]

          gap-5

          rounded-[36px]

          border-[5px]
          border-retro-gold/40

          bg-[#1A2B4D]

          p-5

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
            z-30

            -translate-x-1/2

            rounded-t-lg

            border-2
            border-retro-gold

            border-b-0

            bg-[#1A2B4D]
            "
            />

            {/* LEFT */}

            <div
              className="
                absolute
                left-1/2
                bottom-15

                h-[3px]
                w-28
                

                origin-right

                -rotate-[28deg]

                rounded-full

                bg-retro-gold
              "
            />

            {/* RIGHT */}

            <div
              className="
                absolute
                right-1/2
                bottom-15

                h-[3px]
                w-28

                origin-left

                rotate-[28deg]

                rounded-full

                bg-retro-gold
              "
            />

          </div>
        </div>

        {/* SCREEN */}

        <div>
          {children}
        </div>

        {/* SIDE PANEL */}

        <div className="flex flex-col items-center">

          {/* SPEAKER */}

          <div className="mt-3 flex flex-col gap-[5px]">

            {Array.from({ length: 16 }).map((_, index) => (

              <div
                key={index}
                className="h-[2px] w-14 rounded-full bg-retro-gold/60"
              />

            ))}

          </div>

          {/* BIG KNOB */}

          <div
            className="
              mt-8

              flex
              h-16
              w-16

              items-center
              justify-center

              rounded-full

              border-4
              border-retro-gold

              bg-[#24375F]
            "
          >

            <div className="h-2 w-2 rounded-full bg-retro-gold" />

          </div>

          {/* SMALL KNOB */}

          <div
            className="
              mt-6

              flex
              h-12
              w-12

              items-center
              justify-center

              rounded-full

              border-4
              border-retro-gold

              bg-[#24375F]
            "
          >

            <div className="h-2 w-2 rounded-full bg-retro-gold" />

          </div>

          {/* LED */}

          <div
            className="
              mt-8

              h-3
              w-3

              rounded-full

              bg-red-500

              shadow-[0_0_12px_red]
            "
          />

        </div>

      </div>

      {/* FEET */}

      <div className="relative h-16">

        <div
          className="
            absolute
            left-28

            h-16
            w-[6px]

            rotate-[18deg]

            rounded-full

            bg-retro-gold
          "
        />

        <div
          className="
            absolute
            right-28

            h-16
            w-[6px]

            -rotate-[18deg]

            rounded-full

            bg-retro-gold
          "
        />

      </div>

    </div>
  );
}