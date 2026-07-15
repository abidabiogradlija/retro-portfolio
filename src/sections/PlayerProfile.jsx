import Container from "../layouts/Container";
import ProfileImage from "../components/ProfileImage";
import ProfileInfo from "../components/ProfileInfo";
import AboutMe from "../components/AboutMe";

export default function PlayerProfile() {
  return (
    <section
      id="profile"
      className="
        bg-midnight

        py-20
        md:py-24
        lg:py-32
      "
    >
      <Container>

        {/* TITLE */}

        <h2
          className="
            text-center

            font-retro

            text-3xl
            sm:text-4xl
            md:text-5xl

            text-retro-gold
          "
        >
          PLAYER PROFILE
        </h2>

        {/* LINE */}

        <div className="mx-auto mt-8 mb-10 h-px w-full bg-retro-gold/20" />

        {/* IMAGE + INFO */}

        <div
          className="
            grid

            grid-cols-1

            items-center

            gap-12

            xl:grid-cols-2
            xl:gap-16
          "
        >

          {/* IMAGE */}

          <div className="flex justify-center">

            <ProfileImage />

          </div>

          {/* INFO */}

          <div className="w-full">

            <ProfileInfo />

          </div>

        </div>

        {/* ABOUT */}

        <div className="mt-14 md:mt-20">

          <AboutMe />

        </div>

      </Container>
    </section>
  );
}