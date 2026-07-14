import Container from "../layouts/Container";

function Bullet() {
  return (
    <span
      className="
        mt-2
        mr-4
        flex
        h-5
        w-5
        shrink-0
        items-center
        justify-center
        rounded-full
        border-2
        border-retro-gold
      "
    >
      <span className="h-2 w-2 rounded-full bg-retro-gold"></span>
    </span>
  );
}

export default function Education() {
  return (
    <section className="bg-midnight py-32">
      <Container>

        <h2 className="text-center font-retro text-5xl text-retro-gold">
          EDUCATION
        </h2>

        <div className="mx-auto mt-16 max-w-5xl">

          {/* High School */}
          <div className="border-t border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <div>
                <h3 className="font-retro text-3xl text-retro-gold">
                  Mathematics and Computer Science Program
                </h3>

                <p className="mt-2 font-terminal text-lg tracking-[0.2em] text-retro-gold/80 uppercase">
                  2019 – 2023
                </p>
              </div>

            </div>

            <p className="mt-6 ml-9 font-body text-xl leading-9 text-ivory">
              First Gymnasium of Zenica,
              <br />
              Zenica, Bosnia and Herzegovina
            </p>

          </div>

          {/* University */}
          <div className="border-y border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <div>
                <h3 className="font-retro text-3xl text-retro-gold">
                  Bachelor's Degree in Software Engineering
                </h3>

                <p className="mt-2 font-terminal text-lg tracking-[0.2em] text-retro-gold/80 uppercase">
                  2023 – Present
                </p>
              </div>

            </div>

            <p className="mt-6 ml-9 font-body text-xl leading-9 text-ivory">
              Faculty of Polytechnic,
              <br />
              University of Zenica,
              <br />
              Zenica, Bosnia and Herzegovina
            </p>

          </div>

        </div>

      </Container>
    </section>
  );
}