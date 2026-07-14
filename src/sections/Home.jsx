import { motion } from "framer-motion";

import Container from "../layouts/Container";
import RetroButton from "../components/RetroButton";
import StarBackground from "../components/StarBackground";
import PlayerProfile from "../sections/PlayerProfile";
import SkillTree from "../sections/SkillTree";
import Experience from "../sections/Experience";
import Education from "../sections/Education";
import Projects from "../sections/Projects";
import Hero from "../sections/Hero";
import Contact from "../sections/Contact";


export default function Home() {
  return (
    <motion.main
      className="relative min-h-screen overflow-hidden bg-midnight"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <StarBackground />

      <Hero />
      <PlayerProfile />
      <SkillTree />
      <Experience />
      <Education />
      <Projects />
      <Contact />

    </motion.main>
  );
}