export default function ProfileInfo() {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-2xl

        space-y-8

        text-center
        xl:text-left
      "
    >
      {/* NAME */}

      <div>
        <p
          className="
            font-terminal

            text-sm
            sm:text-base
            lg:text-lg

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-retro-gold
          "
        >
          Name
        </p>

        <p
          className="
            mt-2

            font-body

            text-xl
            sm:text-2xl

            text-ivory
          "
        >
          Abida Biogradlija
        </p>
      </div>

      {/* DATE */}

      <div>
        <p
          className="
            font-terminal

            text-sm
            sm:text-base
            lg:text-lg

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-retro-gold
          "
        >
          Date of Birth
        </p>

        <p className="mt-2 font-body text-xl sm:text-2xl text-ivory">
          18.09.2003.
        </p>
      </div>

      {/* LOCATION */}

      <div>
        <p
          className="
            font-terminal

            text-sm
            sm:text-base
            lg:text-lg

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-retro-gold
          "
        >
          Location
        </p>

        <p className="mt-2 font-body text-lg sm:text-xl lg:text-2xl text-ivory">
          Zenica, Bosnia and Herzegovina
        </p>
      </div>

      {/* EMAIL */}

      <div>
        <p
          className="
            font-terminal

            text-sm
            sm:text-base
            lg:text-lg

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-retro-gold
          "
        >
          Email
        </p>

        <p
          className="
            mt-2

            break-all

            font-body

            text-base
            sm:text-lg
            lg:text-xl

            text-ivory
          "
        >
          abidabiogradlija@gmail.com
        </p>
      </div>

      {/* GITHUB */}

      <div>
        <p
          className="
            font-terminal

            text-sm
            sm:text-base
            lg:text-lg

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-retro-gold
          "
        >
          GitHub
        </p>

        <p
          className="
            mt-2

            break-all

            font-body

            text-base
            sm:text-lg
            lg:text-xl

            text-ivory
          "
        >
          github.com/abidabiogradlija
        </p>
      </div>

      {/* UPWORK */}

      <div>
        <p
          className="
            font-terminal

            text-sm
            sm:text-base
            lg:text-lg

            uppercase

            tracking-[0.25em]
            sm:tracking-[0.35em]

            text-retro-gold
          "
        >
          Upwork
        </p>

        <p
          className="
            mt-2

            break-all

            font-body

            text-base
            sm:text-lg
            lg:text-xl

            text-ivory
          "
        >
          https://www.upwork.com/freelancers/abidab11
        </p>
      </div>
    </div>
  );
}