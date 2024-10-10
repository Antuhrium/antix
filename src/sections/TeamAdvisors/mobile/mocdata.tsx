import { Content } from "./ui/Content/Content";

export interface Person {
  image: string;
  icon: string;
  name: string;
  role: string;
  linkedin: string;
  isBigIcon: boolean;
}

export interface TeamPerson extends Person {
  subRole: string;
  info: string[];
}

export type AdvisorPerson = Person;

export const team: TeamPerson[] = [
  {
    image: "/team/roman.png",
    icon: "/team/icon.png",
    name: "Roman",
    role: "Top-10 Global Talents",
    subRole: "Founder, CEO",
    linkedin: "https://www.linkedin.com/in/cyganovroman/",
    isBigIcon: false,
    info: [
      "Roman is the Founder and CEO of Antix, a company specializing in Web3, AI Digital Humans, and gaming technologies.",
      "He was recognized among the Top 10 Global Talents by OUTPUT, showcasing his expertise in digital innovation.",
      "His company Antix developed Avagen, a proprietary technology that creates photo-realistic AI Digital Humans, revolutionizing client interaction for brands and businesses.",
    ],
  },
  {
    image: "/team/marina.png",
    icon: "/team/icon.png",
    name: "Marina",
    role: "Ex-regional director at Disney",
    subRole: "Co-founder, President",
    linkedin: "https://www.linkedin.com/in/marina-jigalova/",
    isBigIcon: false,
    info: [
      "Marina established and led the regional office of the Walt Disney Company for over 13 years, overseeing operations across CIS countries, including Georgia and Mongolia.",
      "She is currently developing international startups, including Antix, a metaverse platform, and INAU, an AI project aimed at helping people with special mental needs.",
      "Marina holds an MBA from Harvard, reflecting her strong academic background.",
    ],
  },
  {
    image: "/team/anton.png",
    icon: "/team/icon.png",
    name: "Anton",
    role: "Ex-Big 4 Professional",
    subRole: "CFO",
    linkedin: "https://www.linkedin.com/in/anton-galkin-finance/",
    isBigIcon: false,
    info: [
      "Anton has a background working with top-tier finance firms, including Big 4 experience, giving him a solid foundation in financial management and control.",
      "As CFO of Antix, he managed financial controlling, treasury, and business analytics, while providing strategic support to stakeholders.",
      "At Medkon Holding, he implemented a business intelligence system (Power BI) that accelerated period-end closing by two weeks and helped secure low-interest long-term loans.",
    ],
  },
  {
    image: "/team/yulia.png",
    icon: "/team/icon.png",
    name: "Yulia",
    role: "Head of Family Office",
    subRole: 'Chief Operations Officer',
    linkedin: "https://www.linkedin.com/in/yulia-tbc/",
    isBigIcon: false,
    info: [
      "A financial executive with 18+ years of experience, specializing in financial transformation, tax strategy, and risk management.",
      "As Deputy CFO at EuroChem and several technological companies, she led projects across 50+ international companies, securing up to $50M in financing annually and achieving $100M in savings.",
      "During her 16 years at Deloitte, Yulia built strategic partnerships with major clients like Yandex and Coca-Cola, driving financial efficiency and growth across global markets."
  ],
  },
  {
    image: "/team/rafal.png",
    icon: "/team/icon.png",
    name: "Rafal",
    role: "Technological Startup Expert",
    subRole: "Project Manager",
    linkedin: "https://www.linkedin.com/in/yulia-unal-1a976415/",
    isBigIcon: false,
    info: [
      "Rafał has extensive experience helping technological and blockchain startups raise funds and scale effectively, guiding businesses from inception to profitability.",
      "He co-founded 1EV and served as Chief Operating Officer at TiltUp, showcasing his versatility in different startup environments.",
      "With a focus on business strategy, marketing, and operational efficiency, Rafał excels in optimizing companies' processes and helping them achieve growth and profitability.",
    ],
  },
  {
    image: "/team/dmitry.png",
    icon: "/team/icon.png",
    name: "Dmitry",
    role: "Developed an AAA title",
    subRole: "Software Engineer",
    linkedin: "https://www.linkedin.com/in/rafal-project-manager/",
    isBigIcon: false,
    info: [
      "Dmitry has progressed from a QA tester to a Technical Director, demonstrating deep experience across all levels of software engineering in the gaming industry with 15+ Years of Gamedev Expertise.",
      "He has worked on casual, mobile, AA, and AAA titles, contributing to both in-house and co-developed projects for renowned companies.",
      "Dmitry currently holds a leadership role at Antix, overseeing technical aspects of the company’s gaming projects, including full-cycle development from scratch.",
    ],
  },
];

export const advisors: AdvisorPerson[] = [
  {
    image: "/team/marcellomobile.png",
    icon: "/team/icon.png",
    name: "Marcello Mari",
    role: "SingularityDAO Founder & CEO",
    linkedin: "https://www.linkedin.com/in/marcellomari/",
    isBigIcon: true,
  },
  {
    image: "/team/juwanmobile.png",
    icon: "/team/icon.png",
    name: "Juwan Lee",
    role: "Co-founder of Hong Kong Blockchain Center",
    linkedin: "https://www.linkedin.com/in/juwanlee/",
    isBigIcon: true,
  },
  {
    image: "/alexander.jpg",
    icon: "/team/icon.png",
    name: "Alexander Filatov",
    role: "10+ AI Patents Holder",
    linkedin: "https://www.linkedin.com/in/alexanderfilatov/",
    isBigIcon: true,
  },
];

export const teamDescription = (
  <p>
    The team has a proven track record of
    <br />
    <b>successfully managing business projects.</b>
    <br /> They bring significant experience and
    <br /> exceptional knowledge regarding digital
    <br /> humans & Web3 ventures at scale
  </p>
);
const advisorsDescription = (
  <p>
    The Antix advisory team brings{" "}
    <b>
      80 years of
      <br /> combined experience
    </b>{" "}
    in successful investing,
    <br /> offering deep business expertise and exceptional
    <br /> knowledge of the Web3 sector.
  </p>
);

export const tabs = [
  {
    id: 1,
    label: "Team",
    children: <Content list={team} description={teamDescription} />,
  },
  {
    id: 2,
    label: "Advisors",
    children: <Content list={advisors} description={advisorsDescription} />,
  },
];
