import Container from "../layouts/Container";
import SkillCard from "../components/SkillCard";

const categories = [
  {
    title: "Programming",
    skills: [
      "C++",
      "C#",
      "Java",
      "JavaScript",
      "PHP",
      "Python",
    ],
  },
  {
    title: "Web Development",
    skills: [
      "HTML5",
      "CSS3",
      "React",
      "Node.js",
      "Laravel",
      "WordPress",
    ],
  },
  {
    title: "Mobile Development",
    skills: [".NET MAUI"],
  },
  {
    title: "UI / Graphic Design",
    skills: [
      "Figma",
      "Inkscape",
      "GIMP",
      "SketchUp",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
    ],
  },
  {
    title: "Languages",
    skills: [
      "Bosnian / Croatian / Serbian",
      "English",
      "German",
      "Italian",
    ],
  },
];

export default function SkillTree() {
  return (
    <section className="bg-midnight py-32">

      <Container>

        <h2 className="mb-20 text-center font-retro text-5xl text-retro-gold">
          SKILL TREE
        </h2>

        <div className="grid gap-8 md:grid-cols-2">

          {categories.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}

        </div>

      </Container>

    </section>
  );
}