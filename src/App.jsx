import { useState } from "react";

import IntroScreen from "./sections/IntroScreen";
import Home from "./sections/Home";
import ScreenFlash from "./components/ScreenFlash";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [flash, setFlash] = useState(false);

  const handleStart = () => {
    setFlash(true);

    setTimeout(() => {
      setShowIntro(false);
      setFlash(false);
    }, 200);
  };

  return (
    <>
      <ScreenFlash active={flash} />

      {showIntro ? (
        <IntroScreen onStart={handleStart} />
      ) : (
        <Home />
      )}
    </>
  );
}