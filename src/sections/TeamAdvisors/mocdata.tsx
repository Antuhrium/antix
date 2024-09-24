import { team } from "./data";
import { Content } from "./mobile/ui/Content/Content";

export interface Person {
  image: string;
  icon: string;
  name: string;
  role: string;
  linkedin: string;
  isBigIcon: boolean;
}

export interface TeamItem extends Person {
  subRole?: string;
  hasReadMore?: boolean;
}

export type AdvisorItem = Person;

// export const team: TeamItem[] = [
//   {
//     image: "/team/roman.png",
//     icon: "/team/icon.png",
//     name: "Roman",
//     role: "Top-10 Global Talents",
//     subRole: "Founder, CEO",
//     linkedin: "https://www.linkedin.com/in/cyganovroman/",
//     hasReadMore: true,
//     isBigIcon: false,
//   },
//   {
//     image: "/team/marina.png",
//     icon: "/team/icon.png",
//     name: "Marina",
//     role: "Ex-regional director at Disney",
//     subRole: "Co-founder, President",
//     linkedin: "https://www.linkedin.com/in/marina-jigalova/",
//     hasReadMore: true,
//     isBigIcon: false,
//   },
//   {
//     image: "/team/anton.png",
//     icon: "/team/icon.png",
//     name: "Anton",
//     role: "Ex-Big 4 Professional",
//     subRole: "CFO",
//     linkedin: "https://www.linkedin.com/in/anton-galkin-finance/",
//     isBigIcon: false,
//     hasReadMore: false,
//   },
//   {
//     image: "/team/yulia.png",
//     icon: "/team/icon.png",
//     name: "Yulia",
//     role: "Head of Family Office",
//     subRole: "TBC",
//     linkedin: "https://www.linkedin.com/in/yulia-tbc/",
//     isBigIcon: false,
//     hasReadMore: false,
//   },
//   {
//     image: "/team/kacper.png",
//     icon: "/team/icon.png",
//     name: "Kacper",
//     role: "Senior Social Media Manager",
//     subRole: "Community Manager",
//     linkedin: "https://www.linkedin.com/in/hoffmannk96/",
//     isBigIcon: false,
//     hasReadMore: false,
//   },
//   {
//     image: "/team/rafal.png",
//     icon: "/team/icon.png",
//     name: "Rafal",
//     role: "Technological Startup Expert",
//     subRole: "Project Manager",
//     linkedin: "https://www.linkedin.com/in/yulia-unal-1a976415/",
//     isBigIcon: false,
//     hasReadMore: false,
//   },
//   {
//     image: "/team/dmitry.png",
//     icon: "/team/icon.png",
//     name: "Dmitry",
//     role: "Developed an AAA title",
//     subRole: "Software Engineer",
//     linkedin: "https://www.linkedin.com/in/rafal-project-manager/",
//     isBigIcon: false,
//     hasReadMore: false,
//   },
// ];

export const advisors: TeamItem[] = [
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
    image: "/team/alexandermobile.png",
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
