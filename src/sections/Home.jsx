import { motion } from "framer-motion";

import Container from "../layouts/Container";
import RetroCard from "../components/RetroCard";
import RetroButton from "../components/RetroButton";
import StarBackground from "../components/StarBackground";

export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-midnight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <StarBackground />

      <Container className="relative z-10 flex min-h-screen items-center justify-center">
        <RetroCard className="w-full max-w-4xl">

          <div className="text-center">

            <p className="font-terminal text-retro-gold tracking-[0.35em] text-sm mb-3">
              PLAYER PROFILE
            </p>

            <h1 className="font-retro text-6xl text-retro-gold leading-tight">
              ABIDA
              <br />
              BIOGRADLIJA
            </h1>

            <p className="mt-8 font-body text-xl text-ivory">
              Software Engineer
            </p>

            <p className="mt-3 font-body text-muted max-w-2xl mx-auto leading-8">
              Building elegant web experiences with React,
              Laravel, Node.js and modern technologies.
            </p>

            <div className="mt-10 flex justify-center gap-5">

              <RetroButton>
                VIEW QUEST
              </RetroButton>

              <RetroButton variant="secondary">
                DOWNLOAD CV
              </RetroButton>

            </div>

          </div>

        </RetroCard>
      </Container>
    </motion.main>
  );
}