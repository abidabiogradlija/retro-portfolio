import Container from "../layouts/Container";
import RetroButton from "../components/RetroButton";

export default function Hero() {
  return (
    <Container className="relative z-10 flex min-h-screen items-center justify-center">

      <section className="w-full max-w-5xl text-center">

        {/* PLAYER */}

        <p className="font-retro text-lg tracking-[0.7em] text-retro-gold">
          PLAYER
        </p>

        {/* NAME */}

        <h1 
          className="crt-title font-retro text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none"
        >
          ABIDA
          <br />
          BIOGRADLIJA
        </h1>

        {/* TOP LINE */}

        <div className="mx-auto mt-8 h-px w-full bg-retro-gold/20" />

        {/* CLASS + LEVEL */}

        <div className="mt-5 grid grid-cols-2 gap-10">

          <div>

            <p className="font-terminal text-lg uppercase tracking-[0.35em] text-retro-gold">
              CLASS
            </p>

            <p className="mt-3 font-body text-3xl text-ivory">
              Software Engineer
            </p>

          </div>

          <div>

            <p className="font-terminal text-lg uppercase tracking-[0.35em] text-retro-gold">
              LEVEL
            </p>

            <p className="mt-3 font-body text-3xl text-ivory">
              23
            </p>

          </div>

        </div>

        {/* MIDDLE LINE */}

        <div className="mx-auto mt-8 h-px w-full bg-retro-gold/20" />

        {/* QUEST */}

        <div className="mt-8">

          <p className="font-terminal text-lg uppercase tracking-[0.35em] text-retro-gold">
            CURRENT QUEST
          </p>

          <p className="mt-3 font-body text-2xl leading-10 text-ivory">
            Looking for the next opportunity
            <br />
            to build impactful software.
          </p>

        </div>

        {/* BOTTOM LINE */}

        <div className="mx-auto mt-8 h-px w-full bg-retro-gold/20" />

        {/* BUTTONS */}

        <div className="mt-8 flex justify-center gap-8">

          <RetroButton
            onClick={() =>
                document
                .getElementById("profile")
                ?.scrollIntoView({
                behavior: "smooth",
                })
            }
          >
            VIEW PROFILE
          </RetroButton>

          <RetroButton
            variant="secondary"
            onClick={() =>
            window.open(
            "/Abida_Biogradlija_CV.pdf",
            "_blank",
            "noopener,noreferrer"
            )
            }
          >
            DOWNLOAD CV.PDF
          </RetroButton>

        </div>

        {/* SCROLL */}

        <div className="mt-16 animate-bounce text-3xl text-retro-gold">
          ↓
        </div>

      </section>

    </Container>
  );
}