import { useState } from "react";
import IntroScreen from "./sections/IntroScreen";
import Home from "./sections/Home";

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  return showIntro ? (
    <IntroScreen onStart={() => setShowIntro(false)} />
  ) : (
    <Home />
  );
}