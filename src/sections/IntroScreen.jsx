import { useState } from "react";
import RetroButton from "../components/RetroButton";
import BootSequence from "../components/BootSequence";
import StarBackground from "../components/StarBackground";

export default function IntroScreen({ onStart }) {
  const [bootFinished, setBootFinished] = useState(false);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-midnight px-6">
      <StarBackground />
      <div className="w-full max-w-3xl rounded-2xl border border-retro-gold/20 bg-deep-navy p-10 shadow-2xl">

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
            <RetroButton onClick={onStart}>
              <span className="animate-blink">
                PRESS START
              </span>
            </RetroButton>
          </div>
        )}

      </div>
    </main>
  );
}