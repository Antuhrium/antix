import React from 'react';
import styles from './TeamAdvisors.module.scss';
import { Linkedin } from 'lucide-react';

interface PersonProps {
    image: string;
    name: string;
    role: string;
    linkedin?: string;
    isAdvisor?: boolean;
}

const Person: React.FC<PersonProps> = ({ image, name, role, linkedin }) => (
    <div className={styles.person} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.imageContainer}>
            <div className={styles.overlay}>
                {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.linkedinButton}>
                        <Linkedin size={20} />
                    </a>
                )}
            </div>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.role}>{role}</p>
        {/* {isAdvisor && <ArrowUpRight className={styles.arrowIcon} size={20} />} */}
    </div>
);

const TeamAdvisors = () => {
    const team = [
        {
            image: '/team/roman.png',
            name: 'Roman',
            role: 'Top-10 Global Talents',
            subRole: 'Founder, CEO',
            linkedin: 'https://www.linkedin.com/in/roman-founder-ceo/',
            hasReadMore: true
        },
        {
            image: '/team/marina.png',
            name: 'Marina',
            role: 'Ex-regional director at Disney',
            subRole: 'Co-founder, President',
            linkedin: 'https://www.linkedin.com/in/marina-co-founder-president/',
            hasReadMore: true
        },
        {
            image: '/team/anton.png',
            name: 'Anton',
            role: 'Ex-Big 4 Professional',
            subRole: 'CFO',
            linkedin: 'https://www.linkedin.com/in/anton-cfo/'
        },
        {
            image: '/team/yulia.png',
            name: 'Yulia',
            role: 'Head of Family Office',
            subRole: 'TBC',
            linkedin: 'https://www.linkedin.com/in/yulia-tbc/'
        },
        {
            image: '/team/kacper.png',
            name: 'Kacper',
            role: 'Senior Social Media Manager',
            subRole: 'Community Manager',
            linkedin: 'https://www.linkedin.com/in/kacper-community-manager/'
        },
        {
            image: '/team/rafal.png',
            name: 'Rafał',
            role: 'Technological Startup Expert',
            subRole: 'Project Manager',
            linkedin: 'https://www.linkedin.com/in/rafal-project-manager/'
        }
    ];

    const advisors = [
        {
            image: '/team/marcello.png',
            name: 'Marcello Mari',
            role: 'SingularityDAO Founder & CEO',
            linkedin: 'https://www.linkedin.com/in/marcellomari/'
        },
        {
            image: '/team/juwan.png',
            name: 'Juwan Lee',
            role: 'Co-founder of Hong Kong Blockchain Center',
            linkedin: 'https://www.linkedin.com/in/juwanlee/'
        },
        {
            image: '/team/alexander.png',
            name: 'Alexander Filatov',
            role: '10+ AI Patents Holder',
            linkedin: 'https://www.linkedin.com/in/alexanderfilatov/'
        }
    ];


    return (
        <div className={styles.teamContainer}>
            <section className={styles.team}>
                <h2 className={styles.sectionTitle}>Team</h2>
                <p className={styles.sectionDescription}>
                    The team has a proven track record of successfully managing business projects. They bring significant experience and exceptional knowledge regarding digital humans & Web3 ventures at scale.
                </p>
                <div className={styles.grid}>
                    {team.map((member, index) => (
                        <Person key={index} {...member} />
                    ))}
                </div>
            </section>

            <section className={styles.advisors}>
                <h2 className={styles.sectionTitle}>Advisors</h2>
                <p className={styles.sectionDescription}>
                    AnIkii advisory team has a proven ten-year track record of successful investing, bringing significant business experience and exceptional knowledge of Web3 sector.
                </p>
                <div className={styles.advisor}>
                    {advisors.map((advisor, index) => (
                        <Person key={index} {...advisor} isAdvisor />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default TeamAdvisors;