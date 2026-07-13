import { useState } from "react";
import RetroButton from "../components/RetroButton";
import BootSequence from "../components/BootSequence";
import StarBackground from "../components/StarBackground";
import CRTOverlay from "../components/CRTOverlay";
import { motion } from "framer-motion";
import clickSound from "../assets/sounds/click.mp3";
import useSound from "../hooks/useSound";

export default function IntroScreen({ onStart }) {
  const playClick = useSound(clickSound);
  const [bootFinished, setBootFinished] = useState(false);
  const [closing, setClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleStart = () => {
    playClick();
    
    setLoading(true);

    setTimeout(() => {
      setClosing(true);
    }, 250);

    setTimeout(() => {
      onStart();
    }, 600);
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight px-6">
      <StarBackground />
      <motion.div
        className="relative z-10 w-full max-w-3xl rounded-2xl border border-retro-gold/20 bg-deep-navy p-10 shadow-2xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={
          closing
            ?  {
            opacity: 0,
            scale: 0.98,
            }
            : {
            opacity: 1,
            scale: 1,
          }
        }
        transition={{
          duration: 0.35,
          ease: "easeOut",
        }}
      >
      <CRTOverlay />

        <p className="font-terminal text-3xl text-retro-gold">
          PLAYER ONE OS v1.0
        </p>

        <div className="mt-8">
          <BootSequence
            onFinished={() => setBootFinished(true)}
          />
        </div>

        {bootFinished && (
          <div className="mt-12 flex justify-center">
            <RetroButton onClick={handleStart} disabled={loading}>
              <span className={loading ? "" : "animate-blink"}>
                {loading ? "LOADING..." : "PRESS START"}
              </span>
            </RetroButton>
          </div>
        )}

      </motion.div>
    </main>
  );
}