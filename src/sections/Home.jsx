import { motion } from "framer-motion";

import Container from "../layouts/Container";
import RetroButton from "../components/RetroButton";
import StarBackground from "../components/StarBackground";

export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-midnight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <StarBackground />

      <Container className="relative z-10 flex min-h-screen items-center justify-center">

        <section className="w-full max-w-5xl text-center">

          {/* PLAYER */}
          <p className="font-retro text-retro-gold text-lg tracking-[0.7em]">
            PLAYER
          </p>

          {/* NAME */}
          <h1 className="crt-title font-retro text-6xl md:text-7xl lg:text-8xl leading-none">
            ABIDA
            <br />
            BIOGRADLIJA
          </h1>

          {/* TOP LINE */}
          <div className="mx-auto mt-10 h-px w-full bg-retro-gold/20" />

          {/* CLASS + LEVEL */}
          <div className="mt-10 grid grid-cols-2 gap-10">

            <div>
              <p className="font-terminal uppercase tracking-[0.35em] text-retro-gold text-lg">
                CLASS
              </p>

              <p className="mt-3 font-body text-3xl text-ivory">
                Software Engineer
              </p>
            </div>

            <div>
              <p className="font-terminal uppercase tracking-[0.35em] text-retro-gold text-lg">
                LEVEL
              </p>

              <p className="mt-3 font-body text-3xl text-ivory">
                23
              </p>
            </div>

          </div>

          {/* MIDDLE LINE */}
          <div className="mx-auto mt-10 h-px w-full bg-retro-gold/20" />

          {/* QUEST */}
          <div className="mt-10">

            <p className="font-terminal uppercase tracking-[0.35em] text-retro-gold text-lg">
              CURRENT QUEST
            </p>

            <p className="mt-5 font-body text-2xl text-ivory leading-10">
              Looking for the next opportunity
              <br />
              to build impactful software.
            </p>

          </div>

          {/* BOTTOM LINE */}
          <div className="mx-auto mt-10 h-px w-full bg-retro-gold/20" />

          {/* BUTTONS */}
          <div className="mt-12 flex justify-center gap-8">

            <RetroButton>
              VIEW PROFILE
            </RetroButton>

            <RetroButton variant="secondary">
              DOWNLOAD CV
            </RetroButton>

          </div>

          {/* SCROLL */}
          <div className="mt-16 animate-bounce text-retro-gold text-3xl">
            ↓
          </div>

        </section>

      </Container>
    </motion.main>
  );
}