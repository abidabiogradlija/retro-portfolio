import ScreenFrame from "./ScreenFrame";
import RetroMonitor from "./RetroMonitor";
import { useEffect, useState } from "react";

export default function ProjectSlider({
  images,
  type = "desktop",
}) {
  const [current, setCurrent] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setCurrent((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (!previewOpen) return;

    if (e.key === "Escape") setPreviewOpen(false);

    if (e.key === "ArrowLeft") previous();

    if (e.key === "ArrowRight") next();
  };

  window.addEventListener("keydown", handleKeyDown);

  return () =>
    window.removeEventListener("keydown", handleKeyDown);

  }, [previewOpen, current]);
  

  return (
    <div className="w-full">


      {/* MAIN IMAGE */}

      <div className="w-full">

  <RetroMonitor type={type}>

  <ScreenFrame type={type}>
  <img
    src={images[current]}
    alt=""
    onClick={() => setPreviewOpen(true)}
    className={`
      cursor-zoom-in
      mx-auto
      object-contain

        ${
          type === "mobile"
          ? "h-full w-auto"
          : "max-w-full max-h-[520px]"
        }
    `}
  />
  </ScreenFrame>

  </RetroMonitor>

  </div>

      {/* THUMBNAILS */}
          {images.length > 1 && (

          <div className="mt-8">

          <div className="flex items-center justify-center gap-6">

          <button
          onClick={previous}
          className="
          font-terminal
          text-3xl
          text-retro-gold
          transition
          hover:scale-125
          "
          >
           ←
          </button>

          <div className="flex gap-4">

           {images.map((image, index) => (

           <button
            key={index}
            onClick={() => {
              setCurrent(index);
              setPreviewOpen(true);
            }}
            className={`
              overflow-hidden

              rounded-lg

              border-2

              transition-all

              ${
                current === index
                  ? "border-retro-gold scale-105"
                  : "border-retro-gold/20 hover:border-retro-gold"
              }
            `}
            >

            <img
              src={image}
              alt=""
              className="
                h-16
                w-24

                bg-black

                object-contain
              "
            />

          </button>

        ))}

        </div>

        <button
        onClick={next}
        className="
          font-terminal
          text-3xl
          text-retro-gold
          transition
          hover:scale-125
          "
        >
         →
         </button>

        </div>

        </div>

      )}

      {previewOpen && (

      <div
      onClick={() => setPreviewOpen(false)}
      className="
      fixed
      inset-0
      z-[9999]

      flex
      items-center
      justify-center

      bg-black/95

      p-8
      "
      >

    {/* LEFT */}

    {images.length > 1 && (

      <button
        onClick={(e) => {
          e.stopPropagation();
          previous();
        }}
        className="
          absolute
          left-6

          text-6xl

          text-retro-gold

          transition

          hover:scale-125
        "
      >
        ←
      </button>

    )}

    {/* IMAGE */}

    <img
      src={images[current]}
      alt=""
      onClick={(e) => e.stopPropagation()}
      className="
        max-h-[90vh]
        max-w-[90vw]

        object-contain
      "
    />

    {/* RIGHT */}

    {images.length > 1 && (

      <button
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        className="
          absolute
          right-6

          text-6xl

          text-retro-gold

          transition

          hover:scale-125
        "
      >
        →
      </button>

    )}

    {/* CLOSE */}

    <button
      onClick={() => setPreviewOpen(false)}
      className="
        absolute
        top-6
        right-8

        text-5xl

        text-retro-gold

        transition

        hover:rotate-90
      "
    >
      ✕
    </button>
    </div>
    )}
      
    </div>
    
  );
}