import profile from "../assets/images/Profile.jpg";

export default function ProfileImage() {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="relative">

        <div className="overflow-hidden rounded-xl border-2 border-retro-gold/30 bg-deep-navy shadow-[0_0_35px_rgba(240,209,125,0.15)]">

          <img
            src={profile}
            alt="Abida Biogradlija"
            className="h-[430px] w-[320px] object-cover"
          />

        </div>

      </div>
    </div>
  );
}