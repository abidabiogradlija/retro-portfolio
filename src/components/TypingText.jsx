import { useEffect, useRef, useState } from "react";

export default function TypingText({
  text,
  speed = 40,
  onComplete,
}) {
  const [displayedText, setDisplayedText] = useState("");

  const completedRef = useRef(false);

  useEffect(() => {
    completedRef.current = false;
    setDisplayedText("");

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayedText(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);

        if (!completedRef.current) {
          completedRef.current = true;
          onComplete?.();
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <>{displayedText}</>;
}