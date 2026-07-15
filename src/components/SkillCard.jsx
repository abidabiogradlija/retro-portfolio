import SkillBadge from "./SkillBadge";

export default function SkillCard({ title, skills }) {
  return (
    <div
      className="
        h-full

        rounded-xl

        border
        border-retro-gold/20

        bg-deep-navy/70

        p-5
        sm:p-6
        lg:p-8
      "
    >

      {/* TITLE */}

      <h3
        className="
          mb-6
          sm:mb-8

          font-retro

          text-2xl
          sm:text-3xl

          text-retro-gold
        "
      >
        {title}
      </h3>

      {/* BADGES */}

      <div
        className="
          flex

          flex-wrap

          gap-2
          sm:gap-3
        "
      >
        {skills.map((skill) => (
          <SkillBadge key={skill}>
            {skill}
          </SkillBadge>
        ))}
      </div>

    </div>
  );
}