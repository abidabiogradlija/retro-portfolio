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
          SKILL TREE
        </h2>

        {/* LINE */}

        <div className="mx-auto mt-8 mb-12 h-px w-full bg-retro-gold/20" />

        {/* GRID */}

        <div
          className="
            grid

            grid-cols-1

            gap-6

            md:grid-cols-2

            lg:gap-8
          "
        >

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