import React, { useState } from 'react';
import styles from './TeamAdvisors.module.scss';
import TeamModal from '../../../components/TeamModal/TeamModal';
import { advisors, team } from '../data';

interface PersonProps {
    image: string;
    name: string;
    role: string;
    linkedin?: string;
    isAdvisor?: boolean;
    subRole?: string;
    isBigIcon?: boolean;
    icon?: string;
    info?: string[]
    setOpenModal: React.Dispatch<React.SetStateAction<string>>;
    openModal: string;
}

const Person: React.FC<PersonProps> = ({ image, name, role, subRole, icon, isAdvisor, linkedin, info, openModal, setOpenModal }) => (
    <>
        {openModal === name && icon && subRole && linkedin && info && (
            <TeamModal
                image={image}
                icon={icon}
                name={name}
                subRole={subRole}
                linkedin={linkedin}
                info={info}
                setOpenModal={setOpenModal}
            />
        )}
        <div className={styles.person} style={{ backgroundImage: `url(${image})` }} onClick={() => setOpenModal(name)}>
            <div className={styles.inner}>
                <p className={styles.role}>{role}</p>
                <div className={styles.bottom}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                        <path d="M3.11223 0.831539L3.19944 0.767578C5.0189 2.89985 10.2023 8.69142 13.1832 8.69142C15.4858 8.69142 16.8117 5.30005 16.9922 4.81006L17.0973 4.84571C17.0973 4.84571 15.4434 9.34311 16.9977 10.528C18.5263 11.6931 24.9583 9.72616 25.5089 9.55669L25.5402 9.6586C25.5402 9.6586 18.1488 11.8445 17.6792 13.9279C17.3434 15.417 19.2684 17.5196 19.7823 18.0591L19.7049 18.1315C19.7049 18.1315 17.468 15.6928 15.8031 16.3745C13.3275 17.3887 11.912 24.481 11.7406 25.4797L11.6314 25.4597C11.6314 25.4597 13.1846 17.4676 9.2944 15.6751C7.10909 14.6675 1.71521 15.9532 0.859492 16.1614L0.828125 16.057C0.828125 16.057 8.37243 14.2181 8.37243 10.1756C8.37243 6.90367 3.11223 0.831539 3.11223 0.831539Z" fill="white" />
                    </svg>
                    <p className={isAdvisor ? styles.nameAdvisor : styles.name}>{name + (subRole ? `: ${subRole}` : '')}</p>
                    <img src={icon} onClick={() => window.open(linkedin, '_blank')} className={styles.icon} />
                </div>
            </div>
        </div>
    </>
);

const TeamAdvisors = () => {
    const [showTeam, setShowTeam] = useState(true);
    const [openModal, setOpenModal] = useState<string>("");

    return (
        <div className={styles.teamContainer} id='Advisors'>
            <div className={styles.buttons}>
                <button 
                    onClick={() => setShowTeam(true)}
                    className={showTeam ? styles.activeButton : styles.inactiveButton}
                >
                    Team
                </button>
                <button 
                    onClick={() => setShowTeam(false)}
                    className={!showTeam ? styles.activeButton : styles.inactiveButton}
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
                            <Person key={index} {...member} setOpenModal={setOpenModal} openModal={openModal} />
                        ))}
                    </div>
                </>
            ) : (
                <>
                    <div className={styles.advisorsDescription}>
                        <p>
                            The Antix advisory team brings <span>80 years of combined experience</span> in successful investing, offering deep business expertise and exceptional knowledge of the Web3 sector.
                        </p>
                    </div>

                    <div className={styles.advisorsGrid}>
                        {advisors.map((advisor, index) => (
                            <Person key={index} {...advisor} isAdvisor setOpenModal={setOpenModal} openModal={openModal} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default TeamAdvisors;