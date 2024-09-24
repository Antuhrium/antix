export interface teamType {
    image: string;
    icon: string;
    name: string;
    role: string;
    subRole: string;
    linkedin: string;
    hasReadMore?: boolean;
    isBigIcon: boolean;
    info: string[];
}

export const team: teamType[] = [
    {
        image: '/team/roman.png',
        icon: '/team/icon.png',
        name: 'Roman',
        role: 'Top-10 Global Talents',
        subRole: 'Founder, CEO',
        linkedin: 'https://www.linkedin.com/in/cyganovroman/',
        hasReadMore: true,
        isBigIcon: false,
        info: [
            "Roman is the Founder and CEO of Antix, a company specializing in Web3, AI Digital Humans, and gaming technologies.",
            "He was recognized among the Top 10 Global Talents by OUTPUT, showcasing his expertise in digital innovation.",
            "His company Antix developed Avagen, a proprietary technology that creates photo-realistic AI Digital Humans, revolutionizing client interaction for brands and businesses."
        ]
    },
    {
        image: '/team/marina.png',
        icon: '/team/icon.png',
        name: 'Marina',
        role: 'Ex-regional director at Disney',
        subRole: 'Co-founder, President',
        linkedin: 'https://www.linkedin.com/in/marina-jigalova/',
        hasReadMore: true,
        isBigIcon: false,
        info: [
            "Marina established and led the regional office of the Walt Disney Company for over 13 years, overseeing operations across CIS countries, including Georgia and Mongolia.",
            "She is currently developing international startups, including Antix, a metaverse platform, and INAU, an AI project aimed at helping people with special mental needs.",
            "Marina holds an MBA from Harvard, reflecting her strong academic background."
        ]
    },
    {
        image: '/team/anton.png',
        icon: '/team/icon.png',
        name: 'Anton',
        role: 'Ex-Big 4 Professional',
        subRole: 'CFO',
        linkedin: 'https://www.linkedin.com/in/anton-galkin-finance/',
        isBigIcon: false,
        info: [
            "Anton has a background working with top-tier finance firms, including Big 4 experience, giving him a solid foundation in financial management and control.",
            "As CFO of Antix, he managed financial controlling, treasury, and business analytics, while providing strategic support to stakeholders.",
            "At Medkon Holding, he implemented a business intelligence system (Power BI) that accelerated period-end closing by two weeks and helped secure low-interest long-term loans."
        ]
    },
    {
        image: '/team/yulia.png',
        icon: '/team/icon.png',
        name: 'Yulia',
        role: 'Head of Family Office',
        subRole: 'TBC',
        linkedin: 'https://www.linkedin.com/in/yulia-tbc/',
        isBigIcon: false,
        info: [
            "Yulia is currently the Head of a Family Office, managing investments across media, technology, and FMCG sectors, based in Dubai.",
            "As Deputy CFO at EuroChem, she managed cross-functional projects that attracted over $50 million annually and achieved savings of approximately $90 million.",
            "At T1 Group, she built a tax and risk management function from scratch, helping save over $100 million in taxes."
        ]
    },
    {
        image: '/team/kacper.png',
        icon: '/team/icon.png',
        name: 'Kacper',
        role: 'Senior Social Media Manager',
        subRole: 'Community Manager',
        linkedin: 'https://www.linkedin.com/in/hoffmannk96/',
        isBigIcon: false,
        info: [
            "Kacper is currently a Senior Social Media Manager at One Agency Media, leading a team and developing strategies for various platforms, including Twitter, Instagram, and LinkedIn.",
            "He has extensive experience managing teams, including overseeing 8 Social Media Executives and guiding their work to boost engagement and visibility for brands.",
            'Kacper holds a verified certificate in "Blockchain and Web3" and actively applies his knowledge to help brands within the crypto space boost their digital presence and engage with blockchain-focused communities.'
        ]
    },
    {
        image: '/team/rafal.png',
        icon: '/team/icon.png',
        name: 'Rafal',
        role: 'Technological Startup Expert',
        subRole: 'Project Manager',
        linkedin: 'https://www.linkedin.com/in/yulia-unal-1a976415/',
        isBigIcon: false,
        info: [
            "Rafał has extensive experience helping technological and blockchain startups raise funds and scale effectively, guiding businesses from inception to profitability.",
            "He co-founded 1EV and served as Chief Operating Officer at TiltUp, showcasing his versatility in different startup environments.",
            "With a focus on business strategy, marketing, and operational efficiency, Rafał excels in optimizing companies' processes and helping them achieve growth and profitability."
        ]
    },
    {
        image: '/team/dmitry.png',
        icon: '/team/icon.png',
        name: 'Dmitry',
        role: 'Developed an AAA title',
        subRole: 'Software Engineer',
        linkedin: 'https://www.linkedin.com/in/rafal-project-manager/',
        isBigIcon: false,
        info: [
            "Dmitry has progressed from a QA tester to a Technical Director, demonstrating deep experience across all levels of software engineering in the gaming industry with 15+ Years of Gamedev Expertise.",
            "He has worked on casual, mobile, AA, and AAA titles, contributing to both in-house and co-developed projects for renowned companies.",
            "Dmitry currently holds a leadership role at Antix, overseeing technical aspects of the company’s gaming projects, including full-cycle development from scratch."
        ]
    }
];

export const advisors = [
    {
        image: '/team/marcello.png',
        icon: '/team/bigicon.png',
        name: 'Marcello Mari',
        role: 'SingularityDAO Founder & CEO',
        linkedin: 'https://www.linkedin.com/in/marcellomari/',
        isBigIcon: true
    },
    {
        image: '/team/juwan.png',
        icon: '/team/bigicon.png',
        name: 'Juwan Lee',
        role: 'Co-founder of Hong Kong Blockchain Center',
        linkedin: 'https://www.linkedin.com/in/juwanlee/',
        isBigIcon: true
    },
    {
        image: '/team/alexander.png',
        icon: '/team/bigicon.png',
        name: 'Alexander Filatov',
        role: '10+ AI Patents Holder',
        linkedin: 'https://www.linkedin.com/in/alexanderfilatov/',
        isBigIcon: true
    }
];