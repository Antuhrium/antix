import React, { useState } from 'react';
import styles from './TeamAdvisors.module.scss';

interface PersonProps {
    image: string;
    name: string;
    role: string;
    linkedin?: string;
    isAdvisor?: boolean;
    subRole?: string;
    isBigIcon?: boolean;
    icon?: string;
}

const Person: React.FC<PersonProps> = ({ image, name, role, subRole, icon, isAdvisor }) => (
    <div className={styles.person} style={{ backgroundImage: `url(${image})` }}>
        <div className={styles.inner}>
            <p className={styles.role}>{role}</p>
            <div className={styles.bottom}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M3.11223 0.831539L3.19944 0.767578C5.0189 2.89985 10.2023 8.69142 13.1832 8.69142C15.4858 8.69142 16.8117 5.30005 16.9922 4.81006L17.0973 4.84571C17.0973 4.84571 15.4434 9.34311 16.9977 10.528C18.5263 11.6931 24.9583 9.72616 25.5089 9.55669L25.5402 9.6586C25.5402 9.6586 18.1488 11.8445 17.6792 13.9279C17.3434 15.417 19.2684 17.5196 19.7823 18.0591L19.7049 18.1315C19.7049 18.1315 17.468 15.6928 15.8031 16.3745C13.3275 17.3887 11.912 24.481 11.7406 25.4797L11.6314 25.4597C11.6314 25.4597 13.1846 17.4676 9.2944 15.6751C7.10909 14.6675 1.71521 15.9532 0.859492 16.1614L0.828125 16.057C0.828125 16.057 8.37243 14.2181 8.37243 10.1756C8.37243 6.90367 3.11223 0.831539 3.11223 0.831539Z" fill="white" />
                </svg>
                <p className={isAdvisor ? styles.nameAdvisor : styles.name}>{name + (subRole ? `: ${subRole}` : '')}</p>
                <img src={icon} className={styles.icon} />
            </div>
        </div>
    </div>
);

const TeamAdvisors = () => {
    const [showTeam, setShowTeam] = useState(true);

    const team = [
        {
            image: '/team/roman.png',
            icon: '/team/icon.png',
            name: 'Roman',
            role: 'Top-10 Global Talents',
            subRole: 'Founder, CEO',
            linkedin: 'https://www.linkedin.com/in/roman-founder-ceo/',
            hasReadMore: true,
            isBigIcon: false
        },
        {
            image: '/team/marina.png',
            icon: '/team/icon.png',
            name: 'Marina',
            role: 'Ex-regional director at Disney',
            subRole: 'Co-founder, President',
            linkedin: 'https://www.linkedin.com/in/marina-co-founder-president/',
            hasReadMore: true,
            isBigIcon: false
        },
        {
            image: '/team/anton.png',
            icon: '/team/icon.png',
            name: 'Anton',
            role: 'Ex-Big 4 Professional',
            subRole: 'CFO',
            linkedin: 'https://www.linkedin.com/in/anton-cfo/',
            isBigIcon: false
        },
        {
            image: '/team/yulia.png',
            icon: '/team/icon.png',
            name: 'Yulia',
            role: 'Head of Family Office',
            subRole: 'TBC',
            linkedin: 'https://www.linkedin.com/in/yulia-tbc/',
            isBigIcon: false
        },
        {
            image: '/team/kacper.png',
            icon: '/team/icon.png',
            name: 'Kacper',
            role: 'Senior Social Media Manager',
            subRole: 'Community Manager',
            linkedin: 'https://www.linkedin.com/in/kacper-community-manager/',
            isBigIcon: false
        },
        {
            image: '/team/rafal.png',
            icon: '/team/icon.png',
            name: 'Rafal',
            role: 'Technological Startup Expert',
            subRole: 'Project Manager',
            linkedin: 'https://www.linkedin.com/in/rafal-project-manager/',
            isBigIcon: false
        },
        {
            image: '/team/dmitry.png',
            icon: '/team/icon.png',
            name: 'Dmitry',
            role: 'Developed an AAA title',
            subRole: 'Software Engineer',
            linkedin: 'https://www.linkedin.com/in/rafal-project-manager/',
            isBigIcon: false
        }
    ];

    const advisors = [
        {
            image: '/team/marcellomobile.png',
            icon: '/team/icon.png',
            name: 'Marcello Mari',
            role: 'SingularityDAO Founder & CEO',
            linkedin: 'https://www.linkedin.com/in/marcellomari/',
            isBigIcon: true
        },
        {
            image: '/team/juwanmobile.png',
            icon: '/team/icon.png',
            name: 'Juwan Lee',
            role: 'Co-founder of Hong Kong Blockchain Center',
            linkedin: 'https://www.linkedin.com/in/juwanlee/',
            isBigIcon: true
        },
        {
            image: '/team/alexandermobile.png',
            icon: '/team/icon.png',
            name: 'Alexander Filatov',
            role: '10+ AI Patents Holder',
            linkedin: 'https://www.linkedin.com/in/alexanderfilatov/',
            isBigIcon: true
        }
    ];

    return (
        <div className={styles.teamContainer}>
            <div className={styles.buttons}>
                <button 
                    onClick={() => setShowTeam(true)}
                    className={showTeam ? styles.activeButton : ''}
                >
                    Team
                </button>
                <button 
                    onClick={() => setShowTeam(false)}
                    className={!showTeam ? styles.activeButton : ''}
                >
                    Advisors
                </button>
            </div>

            {showTeam ? (
                <>
                    <div className={styles.teamDescription}>
                        <p>
                            The team has a proven track record of <span>successfully managing business projects.</span> They bring significant experience and exceptional knowledge regarding digital humans & Web3 ventures at scale.
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        {team.map((member, index) => (
                            <Person key={index} {...member} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.advisorsDescription}>
                        <p>
                            Antix advisory team has a proven <span>ten-year track record</span> of successful investing, bringing significant business experience and exceptional knowledge of Web3 sector.
                        </p>
                    </div>

                    <div className={styles.advisorsGrid}>
                        {advisors.map((advisor, index) => (
                            <Person key={index} {...advisor} isAdvisor />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TeamAdvisors;