import CRTOverlay from "./CRTOverlay";

export default function ScreenFrame({
  children,
  type = "desktop",
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-[48px]
        border-[6px]
        border-[#24375F]
        bg-[#1A2B4D]
        p-2
        shadow-[0_20px_60px_rgba(0,0,0,.45),0_0_25px_rgba(214,180,90,.08)]
      "
    >
      {/* Gold Inner Frame */}

      <div
        className="
          relative
          overflow-hidden
          rounded-[42px]
          border-[2px]
          border-retro-gold/35
          bg-black
        "
      >
        {/* SCREEN */}

        <div
          className={`
            relative
            w-full
            overflow-hidden
            bg-black

            ${
              type === "desktop"
                ? "aspect-video"
                : "aspect-[9/16]"
            }
          `}
          style={{
            transform: "perspective(900px) scale(0.985)",
          }}
        >
          {children}

          {/* Reflection */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-br
              from-white/20
              via-transparent
              to-transparent
            "
            style={{
              filter: "blur(10px)",
            }}
          />

          {/* CRT */}

          <CRTOverlay />
        </div>
      </div>

      
    </div>
  );
}
