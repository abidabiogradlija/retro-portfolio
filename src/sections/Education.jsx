import Container from "../layouts/Container";

function Bullet() {
  return (
    <span
      className="
        mt-1
        mr-3

        flex

        h-4
        w-4

        sm:h-5
        sm:w-5

        shrink-0

        items-center
        justify-center

        rounded-full

        border-2
        border-retro-gold
      "
    >
      <span
        className="
          h-1.5
          w-1.5

          sm:h-2
          sm:w-2

          rounded-full

          bg-retro-gold
        "
      />
    </span>
  );
}

export default function Education() {
  return (
    <section
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
          EDUCATION
        </h2>

        {/* TIMELINE */}

        <div className="mx-auto mt-10 max-w-5xl md:mt-16">

          {/* HIGH SCHOOL */}

          <div className="border-t border-retro-gold/20 py-8 sm:py-10">

            <div className="flex items-start">

              <Bullet />

              <div>

                <h3
                  className="
                    font-retro

                    text-xl
                    sm:text-2xl
                    lg:text-3xl

                    text-retro-gold
                  "
                >
                  Mathematics and Computer Science Program
                </h3>

                <p
                  className="
                    mt-2

                    font-terminal

                    text-sm
                    sm:text-base
                    lg:text-lg

                    uppercase

                    tracking-[0.15em]
                    sm:tracking-[0.2em]

                    text-retro-gold/80
                  "
                >
                  2019 – 2023
                </p>

              </div>

            </div>

            <p
              className="
                mt-5

                ml-7
                sm:ml-9

                font-body

                text-base
                sm:text-lg
                lg:text-xl

                leading-7
                sm:leading-8
                lg:leading-9

                text-ivory
              "
            >
              First Gymnasium of Zenica,
              <br />
              Zenica, Bosnia and Herzegovina
            </p>

          </div>

          {/* UNIVERSITY */}

          <div className="border-y border-retro-gold/20 py-8 sm:py-10">

            <div className="flex items-start">

              <Bullet />

              <div>

                <h3
                  className="
                    font-retro

                    text-xl
                    sm:text-2xl
                    lg:text-3xl

                    text-retro-gold
                  "
                >
                  Bachelor's Degree in Software Engineering
                </h3>

                <p
                  className="
                    mt-2

                    font-terminal

                    text-sm
                    sm:text-base
                    lg:text-lg

                    uppercase

                    tracking-[0.15em]
                    sm:tracking-[0.2em]

                    text-retro-gold/80
                  "
                >
                  2023 – Present
                </p>

              </div>

            </div>

            <p
              className="
                mt-5

                ml-7
                sm:ml-9

                font-body

                text-base
                sm:text-lg
                lg:text-xl

                leading-7
                sm:leading-8
                lg:leading-9

                text-ivory
              "
            >
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