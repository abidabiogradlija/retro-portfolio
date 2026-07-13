import Container from "../layouts/Container";
import RetroCard from "../components/RetroCard";
import RetroButton from "../components/RetroButton";
import TypingText from "../components/TypingText";

export default function Home() {
  return (
    <main className="min-h-screen bg-midnight py-20">
      <Container>
        <RetroCard className="max-w-xl">
          <h1 className="font-body text-4xl text-retro-gold mb-6">
            Portfolio is under construction...
          </h1>
          <p className="font-terminal text-2xl text-retro-gold">
  <TypingText text="Loading developer profile..." />
</p>

          <RetroButton>
            PRESS STARTED 🚀
          </RetroButton>
        </RetroCard>
      </Container>
    </main>
  );
}