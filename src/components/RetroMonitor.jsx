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
          ? "max-w-[700px] lg:max-w-[900px]"
          : "max-w-[320px] sm:max-w-[380px] md:max-w-[420px]"
        }
      `}
    >
      {/* MONITOR */}

      <div
        className="
          relative

          mt-20

          grid

          grid-cols-[1fr_70px]
          sm:grid-cols-[1fr_85px]
          lg:grid-cols-[1fr_105px]

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
                className="
                  h-[2px] w-8
                  sm:w-10
                  md:w-12
                  lg:w-14 rounded-full bg-retro-gold/60
                  "
              />

            ))}

          </div>

          {/* BIG KNOB */}

          <div
            className="
              mt-8

              flex
              h-12
              w-12
              sm:h-14
              sm:w-14
              lg:h-16
              lg:w-16

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
              h-10
              w-10
              sm:h-11
              sm:w-11
              lg:h-12
              lg:w-12

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

              h-2
              w-2
              sm:h-3
              sm:w-3

              rounded-full

              bg-red-500

              shadow-[0_0_12px_red]
            "
          />

        </div>

      </div>

      {/* FEET */}

      <div className="flex justify-center gap-16 sm:gap-24 md:gap-32 lg:gap-40 pt-0">

        <div
          className="
            h-14
            sm:h-16
            w-[5px]
            sm:w-[6px]

            rotate-[18deg]

            rounded-full

            bg-retro-gold
          "
        />

        <div
          className="
            h-14
            sm:h-16
            w-[5px]
            sm:w-[6px]

            -rotate-[18deg]

            rounded-full

            bg-retro-gold
          "
        />

      </div>

    </div>
  );
}
