import Container from "../layouts/Container";
import ProjectCard from "../components/ProjectCard";

// SOCIAL PASS
import socialHome from "../assets/images/projects/socialpass/home.png";
import socialCalendar from "../assets/images/projects/socialpass/calendar.png";
import socialDashboard from "../assets/images/projects/socialpass/dashboard.png";
import socialEvents from "../assets/images/projects/socialpass/events.png";


// MILLIONAIRE
import millionaireHome from "../assets/images/projects/millionaire/home.png";
import millionaireQuestion from "../assets/images/projects/millionaire/question.png";
import millionaireLifeline from "../assets/images/projects/millionaire/lifeline.png";
import millionaireWalkAway from "../assets/images/projects/millionaire/walkaway.png";

// HTML & CSS
import corporeHome from "../assets/images/projects/corporesano/home.png";
import corporeContact from "../assets/images/projects/corporesano/contact.png";

import salonHome1 from "../assets/images/projects/hairsalon/home1.png";
import salonHome2 from "../assets/images/projects/hairsalon/home2.png";
import salonHome3 from "../assets/images/projects/hairsalon/home3.png";
import salonContact from "../assets/images/projects/hairsalon/contact.png";
import salonProducts from "../assets/images/projects/hairsalon/products.png";


// REACT
import vodovodDashboard from "../assets/images/projects/vodovod/dashboard.png";
import vodovodBrojila from "../assets/images/projects/vodovod/brojila.png";
import vodovodRacuni from "../assets/images/projects/vodovod/racuni.png";
import vodovodKvar from "../assets/images/projects/vodovod/kvar.png";
import vodovodKorisnici from "../assets/images/projects/vodovod/korisnici.png";

import elabLogin from "../assets/images/projects/elab/login.png";
import elabNalazi from "../assets/images/projects/elab/nalazi.png";
import elabPacijent from "../assets/images/projects/elab/pacijent.png";
import elabPosiljka from "../assets/images/projects/elab/posiljke.png";


// LARAVEL
import recipesHome from "../assets/images/projects/recipes/home.png";
import recipesFilter from "../assets/images/projects/recipes/filter.png";

// FIGMA
import figmaHairSalon from "../assets/images/projects/figma/hairsalon.png";
import figmaHealthcare from "../assets/images/projects/figma/healthcare.png";

const projects = [
  {
    title: "SocialPass",
    type: "desktop",

    description:
      "AI-assisted event platform for event creation, ticketing and attendee management with a responsive and modern user experience.",
    technologies: [
      "TypeScript",
      "CSS",
      "Stripe",
      "Supabase",
    ],
    images: [
      socialHome,
      socialCalendar,
      socialDashboard,
      socialEvents,
    ],
    github: "",
    liveDemo: "https://www.socialpass.net",
  },
  {
    title: "Waterworks Information System",
    type: "desktop",

    description:
      "Information system developed with React and Node.js for managing water utility operations and customer data.",
    technologies: [
      "React",
      "Node.js",
      "MySQL",
    ],
    images: [
      vodovodDashboard,
      vodovodBrojila,
      vodovodRacuni,
      vodovodKvar,
    ],
    github: "https://github.com/abidabiogradlija/Waterworks-Vodovod",
    liveDemo: "",
  },

  {
    title: "Adore Hair Salon Management",
    type: "desktop",

    description:
      "Modern responsive salon website with gallery, services and landing page built using TypeScript, CSS, MySql.",
    technologies: [
      "TypeScript",
      "CSS3",
    ],
    images: [
      salonHome1,
      salonHome2,
      salonHome3,
      salonContact,
    ],
    github: "https://github.com/abidabiogradlija/Web-Programiranje-Frizerski-Salon",
    liveDemo: "",
  },

  {
    title: "eLaboratory",
    type: "desktop",

    description:
      "Healthcare application for patient login and laboratory result management with a clean and intuitive interface.",
    technologies: [
      "React",
      "Node.js",
      "MySQL",
      "JavaScript",
    ],
    images: [
      elabLogin,
      elabNalazi,
      elabPacijent,
      elabPosiljka,
    ],
    github: "https://github.com/abidabiogradlija/elab",
    liveDemo: "",
  },

  {
    title: "Who Wants To Be A Millionaire?",
    type: "mobile",

    description:
      "Mobile quiz application developed in .NET MAUI featuring multiple lifelines, score progression and responsive mobile interface.",
    technologies: [
      ".NET MAUI",
      "C#",
      "XAML",
      "SQLite",
    ],
    images: [
      millionaireHome,
      millionaireQuestion,
      millionaireLifeline,
      millionaireWalkAway,
    ],
    github: "https://github.com/abidabiogradlija/.NET-MAUI",
    liveDemo: "",
  },

  {
    title: "Corpore Sano",
    type: "desktop",

    description:
      "Responsive promotional website developed using HTML and CSS with focus on clean layout and accessibility.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    images: [
      corporeHome,
      corporeContact,
    ],
    github: "https://github.com/abidabiogradlija/HTML-CSS/tree/master/Corpore%20Sano",
    liveDemo: "",
  },

  {
    title: "Recipes App",
    type: "desktop",

    description:
      "Laravel application for browsing and managing recipes with responsive user interface.",
    technologies: [
      "Laravel",
      "PHP",
      "MySQL",
    ],
    images: [
      recipesHome,
      recipesFilter,
    ],
    github: "https://github.com/abidabiogradlija/RecipesApp",
    liveDemo: "",
  },

  {
    title: "UI / UX Designs",
    type: "desktop",

    description:
      "Collection of responsive user interface designs created in Figma for web and mobile applications.",
    technologies: [
      "Figma",
      "UI Design",
      "UX Design",
    ],
    images: [
      figmaHairSalon,
      figmaHealthcare,
    ],
    github: "",
    liveDemo: "",
    extraButton1: "HAIR SALON FIGMA",
    extraButton1Link: "https://www.figma.com/proto/6uHM0A3HfAW9ZLmXXnZPFE/Frizerski-salon?page-id=182%3A159&node-id=182-160&p=f&viewport=475%2C340%2C0.06&t=lvlzk7y1kDf1NhKd-1&scaling=contain&content-scaling=fixed&starting-point-node-id=182%3A160",

    extraButton2: "HEALTHCARE FIGMA",
    extraButton2Link: "https://www.figma.com/proto/o2UJwzsTAjuZ2rdu89VtEs/Zdravstveni-sistem?page-id=0%3A1&node-id=1-3&viewport=361%2C-918%2C0.23&t=EbguGaiOvhhKfr9Z-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A3&show-proto-sidebar=1",
  },
];

export default function Projects() {
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

        <h2
          className="
            mb-10
            md:mb-16
            lg:mb-20

            text-center

            font-retro

            text-3xl
            sm:text-4xl
            md:text-5xl

            text-retro-gold
          "
        >
          PROJECT INVENTORY
        </h2>

        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            {...project}
          />
        ))}

      </Container>
    </section>
  );
}