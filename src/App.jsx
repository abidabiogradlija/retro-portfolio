import RetroButton from "./components/RetroButton";
import RetroCard from "./components/RetroCard";

export default function App() {
  return (
    <main className="min-h-screen bg-midnight flex items-center justify-center">
      <RetroCard className="w-[500px] text-center">

        <h2 className="text-3xl text-retro-gold mb-4">
          PLAYER ONE
        </h2>

        <p className="text-muted mb-8">
          Building elegant software experiences.
        </p>

        <RetroButton>
          PRESS START
        </RetroButton>

      </RetroCard>
    </main>
  );
}