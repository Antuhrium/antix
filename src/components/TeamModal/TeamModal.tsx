import React, { useEffect } from "react";
import styles from "./TeamModal.module.scss";
import CloseButton from "../../assets/images/close.png";

interface TeamModalProps {
    image: string;
    icon: string;
    name: string;
    subRole: string;
    linkedin: string;
    info: string[];
    setOpenModal: React.Dispatch<React.SetStateAction<string>>;
}

const TeamModal: React.FC<TeamModalProps> = ({
    image,
    icon,
    name,
    subRole,
    linkedin,
    info,
    setOpenModal,
}) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <>
            <div className={styles.blurBg} onClick={() => setOpenModal("")} />
            <div className={styles.container}>
                <button
                    onClick={() => setOpenModal("")}
                    className={styles.close}
                >
                    <img src={CloseButton} alt="Close" />
                </button>

                <div className={styles.header}>
                    <img src={image} alt={name} />
                    <div className={styles.headerName}>
                        <h3>{name}</h3>
                        <span>{subRole}</span>
                    </div>
                </div>
                <div className={styles.main}>
                    {info.map((item, index) => (
                        <p key={index} className={styles.mainItem}>
                            <div />
                            {item}
                        </p>
                    ))}
                </div>

                <a
                    href={linkedin}
                    target="_blank"
                    className={styles.linkedInLink}
                >
                    <img src={icon} alt="" />
                </a>
            </div>
        </>
    );
};

export default TeamModal;
