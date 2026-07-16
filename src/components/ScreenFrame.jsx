import CRTOverlay from "./CRTOverlay";

export default function ScreenFrame({ children, type = "desktop" }) {
  return (
    <div
      className="
        relative
        w-full
        overflow-hidden
        rounded-[24px]
        sm:rounded-[32px]
        lg:rounded-[48px]
        border-[4px]
        sm:border-[6px]
        border-[#24375F]
        bg-[#1A2B4D]
        p-1.5
        sm:p-2
        shadow-[0_20px_60px_rgba(0,0,0,.45),0_0_25px_rgba(214,180,90,.08)]
      "
    >
      {/* Gold Inner Frame */}
      <div
        className="
          relative
          w-full
          overflow-hidden
          rounded-[18px]
          sm:rounded-[28px]
          lg:rounded-[42px]
          border-[2px]
          border-retro-gold/35
          bg-black
        "
      >
        {/* SCREEN - UVIJEK 16:9 bez obzira na tip, da ne bude mali na mobitelu */}
        <div
          className="
            relative
            flex
            w-full
            aspect-video
            items-center
            justify-center
            overflow-hidden
            bg-black
          "
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
            style={{ filter: "blur(10px)" }}
          />

          {/* CRT */}
          <CRTOverlay />
        </div>
      </div>
    </div>
  );
}
