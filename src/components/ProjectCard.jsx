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
    <div
      className="
        border-y
        border-retro-gold/20

        py-12
        md:py-16
        lg:py-20
      "
    >
      <div
        className="
          grid

          items-center

          gap-10
          lg:gap-16

          xl:grid-cols-[1.45fr_1fr]
        "
      >
        {/* LEFT */}
        
        <ProjectSlider
          images={images}
          type={type}
        />
        

        {/* RIGHT */}

        <div
          className="
            text-center

            xl:text-left
          "
        >
          <h3 className="font-retro text-3xl sm:text-4xl lg:text-5xl text-retro-gold">
            {title}
          </h3>

          <p className="
            mt-8 
            font-body
            text-ivory
            mt-6

            text-lg
            sm:text-xl
            lg:text-2xl

            leading-8
            lg:leading-10
          ">
            {description}
          </p>

          {/* TECHNOLOGIES */}

          <div className="
            mt-8

            flex

            flex-wrap

            justify-center
            xl:justify-start

            gap-3 
          ">

            {technologies.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-lg
                  border
                  border-retro-gold/20
                  bg-deep-navy

                  px-3
                  sm:px-4
                  lg:px-5

                  py-2
                  sm:py-3

                  text-sm
                  sm:text-base
                  lg:text-lg

                  font-terminal
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

          <div className="
          mt-10

          flex

          flex-col

          items-stretch

          gap-4

          sm:flex-row

          sm:flex-wrap

          sm:justify-center

          xl:justify-start
          ">

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