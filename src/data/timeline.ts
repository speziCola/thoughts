/**
 * Timeline content, mirrored from chriskuhrt.de/timeline.
 *
 * - `href` turns the organisation into a link.
 * - `logo` shows a 32×32 company logo beside the entry (key of the logo map in timeline.astro).
 * - `description` may contain inline links written as Markdown: [text](url).
 * - `highlights` render as a bullet list after the description; an optional
 *   `label` is set in bold before the text ("Label: text").
 */

export type TimelineHighlight = { label?: string; text: string };

export type TimelineEntry = {
  date: string;
  organisation: string;
  href?: string;
  logo?: "etops" | "patronas" | "chrono24" | "reservix";
  role: string;
  description: string;
  highlights?: TimelineHighlight[];
};

export type TimelineSection = {
  id: string;
  title: string;
  entries: TimelineEntry[];
};

export const timelineSections: TimelineSection[] = [
  {
    id: "work-experience",
    title: "Work Experience",
    entries: [
      {
        date: "03/2025 – Present",
        organisation: "Etops",
        logo: "etops",
        href: "https://www.etops.com/",
        role: "Head of Research & Design",
        description:
          "Leading a cross-functional design team of 3–5 designers, driving UX strategy and product harmonization across a growing portfolio of financial software acquired through multiple mergers. My focus is on transforming independently developed applications into a cohesive product ecosystem, establishing scalable design standards and aligning user experience with business and product strategy. Key responsibilities and initiatives:",
        highlights: [
          {
            label: "Driving post-merger UX harmonization",
            text: "Defining shared interaction patterns, navigation principles and visual standards across previously independent applications.",
          },
          {
            label: "Creating a unified product experience",
            text: "Initiating and leading the design of a shared app shell and app switcher, enabling users to navigate more seamlessly between products within a connected software ecosystem.",
          },
          {
            label: "Scaling the Abundantia Design System",
            text: "Evolving our design system into a shared foundation for multiple products, including reusable components, semantic tokens, theming and governance.",
          },
          {
            label: "Leading design across teams",
            text: "Coordinating a team of 3–5 designers, setting design direction and collaborating with product management, engineering and senior leadership.",
          },
          {
            label: "Introducing AI-assisted UX evaluations",
            text: "Developing portfolio-wide product health checks to identify usability issues, inconsistent patterns and opportunities for strategic improvement.",
          },
        ],
      },
      {
        date: "02/2022 – 03/2025",
        organisation: "PATRONAS / niiio finance group",
        logo: "patronas",
        href: "https://patronas.de/",
        role: "Product Designer → Design System Lead",
        description:
          "Joined PATRONAS to help modernize its financial software, focusing on transforming a complex desktop-based RCP application into a modern web experience. As collaboration between PATRONAS and other companies within the niiio finance group expanded, my responsibilities evolved beyond individual product design toward establishing shared UX foundations across the organization. Key responsibilities and achievements:",
        highlights: [
          {
            label: "Modernizing enterprise financial software",
            text: "Contributing to the transition from a desktop-based RCP client to a modern, web-based platform.",
          },
          {
            label: "Founding the Abundantia Design System",
            text: "Identifying the need for a shared design language, developing the initial strategy and advocating for its establishment across the group.",
          },
          {
            label: "Establishing scalable UX foundations",
            text: "Defining reusable components, visual standards and interaction patterns to support consistency across different financial software products.",
          },
          {
            label: "Improving design and development workflows",
            text: "Introducing shared tools, processes and closer collaboration between design, product and engineering.",
          },
          {
            label: "Supporting organizational integration",
            text: "Helping bridge previously independent product teams through common UX principles and design practices.",
          },
        ],
      },
      {
        date: "11/2020 – 01/2022",
        organisation: "Chrono24",
        logo: "chrono24",
        href: "https://about.chrono24.com/en/company",
        role: "UX/UI Designer",
        description:
          "As a member of a newly formed senior team, our primary responsibility was to provide first-class service to VIP customers. My further responsibilities and achievements included:",
        highlights: [
          {
            label: "Leading Figma Roll-Out",
            text: "I was leading the introduction of Figma for the whole team.",
          },
          {
            label: "Designing a new customer login",
            text: "I conducted research and developed concepts for a new login interface. Its implementation resulted in a conversion rate increase of up to 12%.",
          },
          {
            label: "Creating the basis for the design system",
            text: "I worked with another designer, collaborating closely with the front-end team to create the foundations of the design system.",
          },
          {
            label: "Harmonizing Web & App UX/UI",
            text: "In collaboration with a designer from the App Team, we harmonized the user experience and user interface across web and mobile applications.",
          },
        ],
      },
      {
        date: "06/2015 – 08/2020",
        organisation: "Reservix",
        logo: "reservix",
        href: "https://www.reservix.net/",
        role: "UX/UI Designer",
        description:
          "I was responsible for UX/UI in the portal team that managed over 3,000 white-label web shops and supported various teams across web, app, B2C, B2B and products. Key responsibilities and achievements:",
        highlights: [
          {
            label: "Shaping product requirements",
            text: "Gathering requirements with stakeholders and turning them into prototypes.",
          },
          {
            label: "Laying the design system foundations",
            text: "Creating the first shared foundations for a design system across the portal products.",
          },
          {
            label: "Introducing Figma",
            text: "Replacing the previous tool stack of Sketch, Adobe XD, Zeplin and Abstract with Figma.",
          },
          {
            label: "Designing ticket resale for the 1st Bundesliga",
            text: "Designing the ticket resale process for clubs of Germany’s top football league.",
          },
          {
            label: "Increasing ticket insurance sales",
            text: "Improving the purchase flow, raising ticket insurance sales by up to 7%.",
          },
          {
            label: "Rethinking the seating plan",
            text: "Making the seating plan modular and flexible to fit the needs of each organizer.",
          },
        ],
      },
      {
        date: "01/2009 – 02/2009",
        organisation: "Platformsixproduction",
        role: "Web Design, Photography",
        description:
          "Brisbane, Australia: Using Photoshop, I modified and enhanced fashion, people and lifestyle pictures. I was also responsible for maintaining the in-house customer management system.",
      },
    ],
  },
  {
    id: "passion-projects",
    title: "Passion & Projects",
    entries: [
      {
        date: "12/2022",
        organisation: "Figma Plugin: Pixelbricks",
        href: "https://pixelbricks.de/",
        role: "Product Design",
        description:
          "Pixelbricks is a Figma plugin that allows you to transform your pixel art into Lego and order them via BrickLink. I always find it exciting to combine digital and analogue. I aimed to manage the entire process, from start to finish. This included overseeing the plugin, Figma files, homepage, FAQs and Instagram – every part that makes a good product complete. Thanks to Marius for the coding.",
      },
      {
        date: "03/2021",
        organisation: "Freiburger UX Community – German UPA",
        href: "https://germanupa.de/regionalgruppen/regionalgruppe-freiburg",
        role: "Co-founder",
        description:
          "Our initial mission was straightforward: share UX insights with like-minded peers. This endeavor eventually led to the founding of the German UPA regional group in Freiburg. Since then, we've launched an official website, wiki and Discord server, creating a vibrant community where members collaborate, exchange insights and provide mutual support in the realm of UX. A significant portion of the credit for our Discord server's notable growth goes to my dedicated co-founders, Laura and Miriam.",
      },
      {
        date: "01/2020 – 11/2020",
        organisation: "Hammertime",
        role: "Product Design",
        description:
          "Redesigned our website, elevated the standards and presented our product compellingly, leading our efforts in customer acquisition. Our success against the competition earned us a wildcard from Baden-Campus, a start-up accelerator. This allowed us to attend the valuable workshops they offer.",
      },
      {
        date: "03/2015 – 04/2021",
        organisation: "Frau Skroblies & Freunde",
        href: "https://www.youtube.com/watch?v=_iG_hdReJvo",
        role: "Cinematography",
        description:
          "Producing, shooting and editing wedding films, I also lent a hand with technical aspects when needed. The role demands meticulous and swift workmanship. There's absolutely no room for error at any stage.",
      },
      {
        date: "05/2012",
        organisation: "SteamCalculator",
        href: "https://steamcalculator.com/",
        role: "UX/UI, Frontend",
        description:
          "Creating the designs and using the project as an opportunity to acquaint myself with new technologies, diving into some frontend coding in the process. The significant popularity the application garnered enabled me to base my Bachelor's thesis* on it. *Title: Online Gaming Self-Efficacy: Designing Personalized Data Visualizations as Marketing Instruments for a Gaming Community.",
      },
    ],
  },
  {
    id: "freelancer",
    title: "Freelancer",
    entries: [
      {
        date: "06/2015 – 10/2020",
        organisation: "GeoSpin",
        role: "Product Design",
        description:
          "As a product design consultant, I not only designed the homepage but also established a comprehensive corporate design. Using the given basic color as a foundation, I developed a style guide to ensure consistency. Additionally, I implemented a CMS using Docker to streamline content management.",
      },
      {
        date: "04/2015 – 05/2015",
        organisation: "IPB – Ingenieurbüro für Projektentwicklung",
        role: "Product Design",
        description:
          "I conceptualized and designed a logo for the company and subsequently extended the design to create a cohesive set of company stationery, ensuring brand consistency throughout.",
      },
      {
        date: "02/2015 – 05/2015",
        organisation: "Herlyn-konsens",
        href: "http://www.herlyn-konsens.de/",
        role: "Web Design",
        description:
          "While designing the homepage, I also customized a WordPress theme tailored to my client's branding and specific requirements.",
      },
      {
        date: "02/2013 – 04/2013",
        organisation: "Physiologikum Mengeringhausen",
        href: "http://physiologikum.de/",
        role: "Product Design",
        description:
          "Along with designing and implementing the homepage, I also designed the company's stationery, which included letterheads, appointment reminder cards and marketing brochures.",
      },
      {
        date: "05/2012 – 07/2012",
        organisation: "sunzinet",
        href: "https://www.sunzinet.com/en/",
        role: "UI Design",
        description:
          "Collaborated directly with the Creative Art Director to transform a design concept into a responsive webpage.",
      },
      {
        date: "03/2011 – 05/2011",
        organisation: "Torsten Ulrich Galts",
        role: "Web Design",
        description:
          "Creating a portfolio showcasing fashion design photographs for a renowned European photographer.",
      },
      {
        date: "02/2011 – 05/2011",
        organisation: "Kunstlicht",
        role: "Cinematography",
        description:
          "Alongside a colleague, I directed, shot and edited a corporate video for Kunstlicht, a premium interior lighting design firm. We collaborated on this project, managing it independently and delivering it ahead of the scheduled timeline.",
      },
      {
        date: "03/2010",
        organisation: "newCasa",
        role: "Print, Photography",
        description:
          "Designed the company stationery like letterhead and business cards.",
      },
    ],
  },
  {
    id: "further-education",
    title: "Further Education",
    entries: [
      {
        date: "07/2023",
        organisation: "Nielsen Norman Group",
        role: "Workshop",
        description: "Becoming a UX Strategist, with Nancy Dickenson.",
      },
      {
        date: "09/2022 – 10/2022",
        organisation: "Smashing",
        role: "Workshop",
        description:
          "Interface Design Patterns UX Training, with Vitaly Friedman.",
      },
      {
        date: "05/2021 – 06/2021",
        organisation: "Product Discovery",
        role: "Coaching",
        description:
          "Tim Herbig's Product Discovery Coaching provides continuous, hands-on support for product teams, guiding them in understanding the Problem and Solution Space.",
      },
      {
        date: "03/2021",
        organisation: "SmashingConf",
        role: "Workshop",
        description:
          "Creating and Maintaining Successful Design Systems, with Brad Frost.",
      },
      {
        date: "12/2019",
        organisation: "Udemy",
        role: "Online Learning",
        description: "JavaScript, jQuery, node.js",
      },
      {
        date: "09/2019",
        organisation: "Design Sprint Masterclass",
        role: "Online Learning",
        description:
          "Masterclass with Jake Knapp and Jonathan Courtney: Steering Teams to Conceptualize and Validate New Products in only 4 Days.",
      },
      {
        date: "04/2019",
        organisation: "Ticketing Business Forum",
        role: "Conference",
        description:
          "Showcasing the future of live entertainment ticketing. – Manchester UK",
      },
      {
        date: "03/2019",
        organisation: "Internet World Expo",
        role: "Fair",
        description: "The commerce e-xperience 2019. – Munich",
      },
      {
        date: "12/2018",
        organisation: "Udacity",
        role: "Online Learning",
        description:
          "Product Design: Ideation & Validation, UX/UI, Design Sprint, Key Metrics.",
      },
      {
        date: "10/2018",
        organisation: "Communication, Cooperation, Coordination",
        role: "Workshop",
        description:
          "Learning different types of conversation techniques. – Freiburg",
      },
      {
        date: "09/2018",
        organisation: "SmashingConf",
        role: "Conference",
        description:
          "Focused on real-world problems and solutions. Covering everything web relevant. Like front-end, UX/UI design or machine learning. – Freiburg",
      },
      {
        date: "03/2018",
        organisation: "Google",
        role: "Talk",
        description: "Progressive Web Apps Roadshow. – London",
      },
      {
        date: "12/2017",
        organisation: "CodeSchool",
        role: "Online Learning",
        description: "HTML & CSS – Master Status.",
      },
      {
        date: "09/2017",
        organisation: "SmashingConf",
        role: "Conference",
        description:
          "Solve real-life design problems and what workflow we are using to solve them intelligently. – Freiburg",
      },
      {
        date: "08/2017",
        organisation: "Google",
        role: "Conference",
        description: "Polymer Summit 2017. – Copenhagen",
      },
      {
        date: "05/2017",
        organisation: "Google",
        role: "Online Learning",
        description: "The Digital Garage: Online Marketing",
      },
      {
        date: "09/2016",
        organisation: "SmashingConf",
        role: "Workshop",
        description: "Scalable Design Systems, with Nathan Curtis. – Freiburg",
      },
      {
        date: "06/2016",
        organisation: "IA Konferenz 2016",
        role: "Conference",
        description:
          "The IA Conference is the annual gathering of the German-speaking IA and UX community, which includes information architects, conceptual designers, UX designers, usability engineers, product managers, service designers and service providers. Topic “Vision. Strategy. Product.” – Berlin",
      },
      {
        date: "05/2016",
        organisation: "Facebook",
        role: "Conference",
        description:
          "The event covered topics around digitalisation, especially in the area of “online” and “mobile”. In a discussion, regional companies reported on their experiences with Facebook and emphasised the increasing usage time by users. – Freiburg",
      },
      {
        date: "05/2016",
        organisation: "re-lounge",
        role: "Meetup",
        description:
          "How to use online marketing to not only reach your customers, but also understand them. – Freiburg",
      },
    ],
  },
  {
    id: "volunteer-work",
    title: "Volunteer Work",
    entries: [
      {
        date: "03/2017",
        organisation: "Haus des Engagements",
        href: "https://haus-des-engagements.de/",
        role: "Corporate Design",
        description:
          "I developed a small style guide, offering logo designs and defining corporate colors.",
      },
      {
        date: "02/2012 – 02/2013",
        organisation: "Palliatives Hospiz Solingen",
        role: "Cinematography",
        description:
          "I worked on filming and editing a corporate video for PHoS – Palliatives Hospiz Solingen, a nonprofit end-of-life care organization. This promotional film was incorporated into my friend's bachelor thesis.",
      },
      {
        date: "06/2005, 06/2006, 07/2007",
        organisation: "Caritas",
        href: "https://www.caritas-rheine.de/hilfeundberatung/kinderjugendlicheundfamilien/kinder-jugendliche-und-familien",
        role: "Child carer",
        description:
          "During my summer break, I organized and led day trips for socially underprivileged children, providing them with both work and play opportunities.",
      },
    ],
  },
  {
    id: "backer",
    title: "Backer",
    entries: [
      {
        date: "05/2018",
        organisation: "Använda",
        href: "https://www.kickstarter.com/projects/557072737/anvanda-a-great-f-cking-bag",
        role: "Fashion & Design",
        description: "Använda – „A Great F*cking Bag.“ Just a cool looking bag.",
      },
      {
        date: "10/2016",
        organisation: "Subform",
        href: "https://www.kickstarter.com/projects/298226251/subform-a-modern-tool-for-digital-product-designer",
        role: "Software & Design",
        description:
          "A tool for digital designers, where dynamic layouts merge with direct code manipulation.",
      },
      {
        date: "09/2015",
        organisation: "Reissue of the 1975 NASA Graphics Standards Manual",
        href: "https://www.kickstarter.com/projects/thestandardsmanual/reissue-of-the-1975-nasa-graphics-standards-manual",
        role: "Design",
        description:
          "This Kickstarter campaign honors the legacy of Danne and Blackburn. Revived 41 years post-design and 23 years after its disappearance.",
      },
      {
        date: "08/2015",
        organisation: "MegaBots",
        href: "https://www.kickstarter.com/projects/megabots/support-team-usa-in-the-giant-robot-duel",
        role: "Tech",
        description:
          "Support Team USA in the Giant Robot Duel: They challenged Japan to a massive robot duel. Japan accepted with the condition of hand-to-hand combat. They've rallied a formidable team to upgrade the Mk.II for this monumental showdown and needed support for the improvements.",
      },
    ],
  },
  {
    id: "gaming",
    title: "Gaming",
    entries: [
      {
        date: "11/2018",
        organisation: "Half-Life Docker",
        href: "https://github.com/spezifanta/hldm-docker",
        role: "Visuals, Video",
        description:
          "For Half-Life’s 20th anniversary, my brother packaged an old-school Half-Life Deathmatch server as a Docker image that starts with a single command. I created the visuals for the project and produced the YouTube video presenting it.",
      },
      {
        date: "08/2004",
        organisation: "ThW Mapping Contest",
        role: "Co-Organizer",
        description:
          "Organized a Half-Life deathmatch remake mapping contest for the thewall.de community, which was the leading German Half-Life mapping community of its time.",
      },
      {
        date: "07/2004",
        organisation: "Killbox Mod",
        href: "https://web.archive.org/web/20241221074401/https://killbox.spike-fx.net/home.html",
        role: "Level Design",
        description:
          "During a LAN-Party, we developed v1.0 in 17 hours. Additionally, a mapping contest was held where my map was awarded the second place.",
      },
      {
        date: "09/2002",
        organisation: "PC Action Counter-Strike Special-Edition",
        href: "https://web.archive.org/web/20030104001635/http://clan00.de/mapping/mappacks/pca_exc.php",
        role: "Level Design",
        description:
          "Winning a mapping contest for an exclusive Counter-Strike map pack. The exclusive pack, also known as the “best of German-speaking mappers” pack, was organized by the Clan00 map forum in collaboration with the PC Action magazine. The pack contained 12 premium maps. My contest map he_metzel is still available as a [download](https://www.17buddies.rocks/17b2/View/Map/60930/he_metzel.html).",
      },
      {
        date: "06/2001",
        organisation: "spezi-clan",
        href: "https://spezi-clan.com/",
        role: "Co-Clan Leader, Web Design",
        description:
          "As a co-clan leader, I organized clan wars, spearheaded training sessions and supervised our gaming server. Also tested self-made aim maps on our gaming server.",
      },
    ],
  },
];
