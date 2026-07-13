import { useState } from "react";
import TypingText from "./TypingText";

const bootMessages = [
  "Booting system...",
  "Loading developer profile...",
  "Loading projects...",
  "Loading achievements...",
  "STATUS: READY",
];

export default function BootSequence({ onFinished }) {
  const [currentMessage, setCurrentMessage] = useState(0);

  const handleComplete = () => {
    if (currentMessage < bootMessages.length - 1) {
      setCurrentMessage((prev) => prev + 1);
    } else {
      onFinished();
    }
  };

  return (
    <div className="space-y-3 font-terminal text-2xl text-muted min-h-[220px]">
      {bootMessages.map((message, index) => {
        if (index > currentMessage) return null;

        const isLast = index === bootMessages.length - 1;

        return (
          <p
            key={message}
            className={isLast ? "text-retro-gold" : ""}
          >
            {">"}{" "}

            {index === currentMessage ? (
              <>
                <TypingText
                  text={message}
                  onComplete={handleComplete}
                />

                {isLast && (
                  <span className="animate-cursor">_</span>
                )}
              </>
            ) : (
              <>
                {message}

                {isLast && (
                  <span className="animate-cursor">_</span>
                )}
              </>
            )}
          </p>
        );
      })}
    </div>
  );
}