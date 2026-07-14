import Container from "../layouts/Container";
import { SiUpwork } from "react-icons/si";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaBriefcase,
} from "react-icons/fa";

export default function Contact() {
  return (
    <Container className="py-32">

      <section
        id="contact"
        className="mx-auto max-w-6xl"
      >

        {/* TITLE */}

        <p className="text-center font-terminal text-lg uppercase tracking-[0.4em] text-retro-gold">
          ESTABLISH CONNECTION
        </p>

        <h2 className="mt-4 text-center font-retro text-5xl text-ivory">
          CONTACT
        </h2>

        <div className="mx-auto mt-8 h-px w-full bg-retro-gold/20" />

        {/* DESCRIPTION */}

        <p className="mx-auto mt-12 max-w-3xl text-center font-body text-2xl leading-10 text-ivory">
          Looking for a Software Engineer,
          freelance developer or someone passionate
          about building modern web applications?
          <br />
          I'd love to connect.
        </p>

        {/* CONTACT CARDS */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* EMAIL */}

          <a
            href="mailto:abidabiogradlija@gmail.com"
            className="
              group

              rounded-2xl

              border
              border-retro-gold/20

              bg-deep-navy/40

              p-8

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-retro-gold
              hover:shadow-[0_0_30px_rgba(214,180,90,.15)]
            "
          >

            <FaEnvelope
              size={36}
              className="text-retro-gold transition group-hover:scale-110"
            />

            <p className="mt-6 font-terminal text-lg tracking-[0.25em] text-retro-gold">
              EMAIL
            </p>

            <p className="mt-4 break-all font-body text-xl text-ivory">
              abidabiogradlija@gmail.com
            </p>

          </a>

          {/* GITHUB */}

          <a
            href="https://github.com/abidabiogradlija"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group

              rounded-2xl

              border
              border-retro-gold/20

              bg-deep-navy/40

              p-8

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-retro-gold
              hover:shadow-[0_0_30px_rgba(214,180,90,.15)]
            "
          >

            <FaGithub
              size={36}
              className="text-retro-gold transition group-hover:scale-110"
            />

            <p className="mt-6 font-terminal text-lg tracking-[0.25em] text-retro-gold">
              GITHUB
            </p>

            <p className="mt-4 font-body text-xl text-ivory">
              github.com/abidabiogradlija
            </p>

          </a>

          {/* LINKEDIN */}

          <a
            href="linkedin.com/in/abida-biogradlija-a61161270"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group

              rounded-2xl

              border
              border-retro-gold/20

              bg-deep-navy/40

              p-8

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-retro-gold
              hover:shadow-[0_0_30px_rgba(214,180,90,.15)]
            "
          >

            <FaLinkedin
              size={36}
              className="text-retro-gold transition group-hover:scale-110"
            />

            <p className="mt-6 font-terminal text-lg tracking-[0.25em] text-retro-gold">
              LINKEDIN
            </p>

            <p className="mt-4 font-body text-xl text-ivory">
              Username: Abida Biogradlija
            </p>

          </a>

          {/* UPWORK */}

          <a
            href="https://upwork.com/freelancers/abidab11"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group

              rounded-2xl

              border
              border-retro-gold/20

              bg-deep-navy/40

              p-8

              transition-all
              duration-300

              hover:-translate-y-2
              hover:border-retro-gold
              hover:shadow-[0_0_30px_rgba(214,180,90,.15)]
            "
          >

            <SiUpwork
              size={36}
              className="text-retro-gold transition group-hover:scale-110"
            />

            <p className="mt-6 font-terminal text-lg tracking-[0.25em] text-retro-gold">
              UPWORK
            </p>

            <p className="mt-4 font-body text-xl text-ivory">
              Abida B.
            </p>

          </a>

        </div>

        {/* FOOTER */}

        <div className="mt-24">

          <div className="h-px w-full bg-retro-gold/20" />

          <p className="mt-8 text-center font-terminal tracking-[0.2em] text-retro-gold/70">
            © 2026 ABIDA BIOGRADLIJA • abibio.dev
          </p>

        </div>

      </section>

    </Container>
  );
}