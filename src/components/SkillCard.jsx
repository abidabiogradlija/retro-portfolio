import SkillBadge from "./SkillBadge";

export default function SkillCard({ title, skills }) {
  return (
    <div className="rounded-xl border border-retro-gold/20 bg-deep-navy/70 p-8">

      <h3 className="mb-10 font-retro text-3xl text-retro-gold">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBadge key={skill}>
            {skill}
          </SkillBadge>
        ))}
      </div>

    </div>
  );
}