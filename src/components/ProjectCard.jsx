import ProjectSlider from "./ProjectSlider";
import RetroButton from "./RetroButton";

export default function ProjectCard({
  title,
  description,
  technologies,
  images,
  github,
  liveDemo,
  extraButton1,
  extraButton1Link,
  extraButton2,
  extraButton2Link,
  type = "desktop",
}) {
  return (
    <div className="border-y border-retro-gold/20 py-20">

      <div className="grid items-center gap-16 xl:grid-cols-[1.45fr_1fr]">

        {/* LEFT */}
        
        <ProjectSlider
          images={images}
          type={type}
        />
        

        {/* RIGHT */}

        <div>

          <h3 className="font-retro text-5xl text-retro-gold">
            {title}
          </h3>

          <p className="mt-8 font-body text-2xl leading-10 text-ivory">
            {description}
          </p>

          {/* TECHNOLOGIES */}

          <div className="mt-10 flex flex-wrap gap-4">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-lg
                  border
                  border-retro-gold/20
                  bg-deep-navy

                  px-5
                  py-3

                  font-terminal
                  text-lg
                  text-retro-gold

                  transition-all

                  hover:border-retro-gold
                  hover:-translate-y-1
                "
              >
                {tech}
              </span>
            ))}

          </div>

          {/* BUTTONS */}

          <div className="mt-12 flex flex-wrap gap-5">

            {github && github !== "" && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton>
                  GITHUB
                </RetroButton>
              </a>
            )}

            {liveDemo && liveDemo !== "" && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton variant="secondary">
                  LIVE DEMO
                </RetroButton>
              </a>
            )}

            {extraButton1 && (
              <a
                href={extraButton1Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton variant="secondary">
                {extraButton1}
                </RetroButton>
              </a>
            )}
             {extraButton2 && (
              <a
                href={extraButton2Link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <RetroButton variant="secondary">
                {extraButton2}
                </RetroButton>
              </a>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}