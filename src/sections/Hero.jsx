import Container from "../layouts/Container";
import RetroButton from "../components/RetroButton";

export default function Hero() {
  return (
    <Container className="relative z-10 flex min-h-screen items-center justify-center">

    <section
      className="
        mx-auto
        w-full
        max-w-5xl

        text-center

        py-16
        sm:py-20
        lg:py-0
      "
    >
        {/* PLAYER */}

        <p className="font-retro text-sm sm:text-base lg:text-lg tracking-[0.7em] text-retro-gold">
          PLAYER
        </p>

        {/* NAME */}

        <h1 
          className="
          crt-title
          font-retro
          leading-none
          tracking-tight

          text-3xl
          sm:text-4xl
          md:text-5xl
          xl:text-6xl
          "
        >
          ABIDA
          <br />
          BIOGRADLIJA
        </h1>

        {/* TOP LINE */}

        <div className="mx-auto mt-5 sm:mt-6 lg:mt-8 h-px w-full bg-retro-gold/20" />

        {/* CLASS + LEVEL */}

        <div
        className="
        mt-5
        sm:mt-6
l       g:mt-8

        grid
        grid-cols-1

        gap-8

        sm:grid-cols-2
        "
        >
          <div>

            <p className="font-terminal text-base sm:text-lg uppercase tracking-[0.35em] text-retro-gold">
              CLASS
            </p>

            <p className="mt-3 font-body text-xl sm:text-2xl lg:text-3xl text-ivory">
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

        <div className="mx-auto mt-5 sm:mt-6 lg:mt-8 h-px w-full bg-retro-gold/20" />

        {/* QUEST */}

        <div className="mt-5 sm:mt-6 lg:mt-8">

          <p className="font-terminal text-lg uppercase tracking-[0.35em] text-retro-gold">
            CURRENT QUEST
          </p>

          <p className="
            max-w-2xl
            mx-auto
            mt-3 font-body 
            text-lg
            sm:text-xl
            lg:text-2xl

            leading-8
            sm:leading-9
            lg:leading-10 text-ivory
          ">
            Looking for the next opportunity
            <br />
            to build impactful software.
          </p>

        </div>

        {/* BOTTOM LINE */}

        <div className="mx-auto mt-5 sm:mt-6 lg:mt-8 h-px w-full bg-retro-gold/20" />

        {/* BUTTONS */}

        <div className="
          mt-5
          sm:mt-8
          lg:mt-10

          flex

          flex-col

          gap-4

          sm:flex-row

          sm:justify-center        
        ">

          <RetroButton
            onClick={() =>
                document
                .getElementById("contact")
                ?.scrollIntoView({
                behavior: "smooth",
                })
            }
          >
            CONTACT ME
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
            DOWNLOAD CV
          </RetroButton>

        </div>

        {/* SCROLL */}

        <div className="mt-6 sm:mt-10 animate-bounce text-3xl text-retro-gold">
          ↓
        </div>

      </section>

    </Container>
  );
}