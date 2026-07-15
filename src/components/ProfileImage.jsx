import profile from "../assets/images/Profile.jpg";

export default function ProfileImage() {
  return (
    <div className="flex justify-center">

      <div
        className="
          relative

          w-full
          max-w-[320px]

          sm:max-w-[340px]
          md:max-w-[360px]
          lg:max-w-[380px]
        "
      >

        <div
          className="
            overflow-hidden

            rounded-xl

            border-2
            border-retro-gold/30

            bg-deep-navy

            shadow-[0_0_35px_rgba(240,209,125,0.15)]
          "
        >

          <img
            src={profile}
            alt="Abida Biogradlija"
            className="
              aspect-[3/4]

              w-full

              object-cover
            "
          />

        </div>

      </div>

    </div>
  );
}