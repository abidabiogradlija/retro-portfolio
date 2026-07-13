import Container from "../layouts/Container";
import ProfileImage from "../components/ProfileImage";
import ProfileInfo from "../components/ProfileInfo";
import AboutMe from "../components/AboutMe";

export default function PlayerProfile() {
  return (
    <section
      id="profile"
      className="bg-midnight py-32"
    >
      <Container>

        <h2 className="mb-16 text-center font-retro text-5xl text-retro-gold">
          PLAYER PROFILE
        </h2>

        <div className="mb-12 h-px bg-retro-gold/20" />

        <div className="grid gap-16 lg:grid-cols-2">

          <ProfileImage />

          <ProfileInfo />

        </div>

        <AboutMe />

      </Container>
    </section>
  );
}