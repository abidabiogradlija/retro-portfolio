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

export default function Experience() {
  return (
    <section className="bg-midnight py-32">
      <Container>

        <h2 className="text-center font-retro text-5xl text-retro-gold">
          EXPERIENCE
        </h2>

        <div className="mx-auto mt-16 max-w-5xl">

          {/* Internship */}
          <div className="border-t border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <h3 className="font-retro text-3xl text-retro-gold">
                Professional Internship 2026 – INPUT Center, Zenica
              </h3>
            </div>

            <p className="mt-6 ml-9 font-body text-xl leading-9 text-ivory">
              Developed and customized WordPress websites, managed website
              content using the WordPress CMS, performed theme customization
              and basic website optimization, and collaborated with a team on
              the development of web projects.
            </p>

          </div>

          {/* SocialPass */}
          <div className="border-t border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <h3 className="font-retro text-3xl text-retro-gold">
                SocialPass – Event Management Platform
              </h3>
            </div>

            <p className="mt-6 ml-9 font-body text-xl leading-9 text-ivory">
              Independently developed a web platform for event organization
              and management. Defined the business logic, functional
              requirements, user roles, and user flows. Designed a responsive
              user interface (UX/UI) and deployed the application on Vercel
              with the support of AI-assisted development tools.
            </p>

          </div>

          {/* Award */}
          <div className="border-t border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <h3 className="font-retro text-3xl text-retro-gold">
                SCI&amp;TECH Challenge, Zenica
              </h3>
            </div>

            <p className="mt-6 ml-9 font-body text-xl leading-9 text-ivory">
              Awarded 1st Place in a science, technology, and innovation
              competition for high school students.
            </p>

          </div>

          {/* Volunteering */}
          <div className="border-t border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <h3 className="font-retro text-3xl text-retro-gold">
                IT Community Volunteering
              </h3>
            </div>

            <p className="mt-6 ml-9 font-body text-xl leading-9 text-ivory">
              Volunteer at the HammerIT Conferences (2023, 2024) and the
              SpinIT Conference (2024).
            </p>

            <p className="mt-4 ml-9 font-body text-xl leading-9 text-ivory">
              Volunteer with the Hastor Foundation since 2022.
            </p>

          </div>

          {/* Workshops */}
          <div className="border-y border-retro-gold/20 py-10">

            <div className="flex items-start">
              <Bullet />

              <h3 className="font-retro text-3xl text-retro-gold">
                Workshops &amp; Training
              </h3>
            </div>

            <div className="mt-6 ml-9 space-y-8">

              <div>
                <p className="font-body text-xl text-retro-gold">
                  • Genesis Project, Banja Luka
                </p>

                <p className="mt-2 font-body text-xl leading-9 text-ivory">
                  Training on youth rights and social inclusion.
                </p>
              </div>

              <div>
                <p className="font-body text-xl text-retro-gold">
                  • Kinderdorf Pestalozzi, Switzerland
                </p>

                <p className="mt-2 font-body text-xl leading-9 text-ivory">
                  Two-week workshop on social skills development.
                </p>
              </div>

              <div>
                <p className="font-body text-xl text-retro-gold">
                  • ZEDA Development Agency
                </p>

                <p className="mt-2 font-body text-xl leading-9 text-ivory">
                  "I Am an Entrepreneur Too" Entrepreneurship Program
                  (Digital Marketing).
                </p>
              </div>

            </div>

          </div>

        </div>

      </Container>
    </section>
  );
}