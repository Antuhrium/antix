import styles from "./Revolutionizing.module.scss";

import Icon1 from "../../assets/svg/revolutionizing/1.svg";
import Icon2 from "../../assets/svg/revolutionizing/2.svg";
import Icon3 from "../../assets/svg/revolutionizing/3.svg";

const items = [
    {
        title: "Antix Platform",
        text: "Create hyper-realistic 3D avatars with customizable behavior, voice, and appearance that evolve over time. Dive into personalized digital spaces and next-level social interactions.",
        icon: Icon1,
    },
    {
        title: "Antix Digital Humans",
        text: "Setting new standards in realism and personalization. Fully customizable AI-powered avatars offer immersive experiences for brands and users.",
        icon: Icon2,
    },
    {
        title: "Security",
        text: "Antix safeguards privacy and ensures user safety with AML, KYC protocols, and smart contract verification. Regular audits uphold the highest security standards.",
        icon: Icon3,
    },
];

const Revolutionizing = () => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>Revolutionizing Digital Human</h3>
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.iconWrapper}>
                            <img src={item.icon} alt={item.title} />
                        </div>
                        <div className={styles.textWrapper}>
                            <h4 className={styles.itemName}>{item.title}</h4>
                            <div className={styles.text}>
                                <p>{item.text}</p>
                                <span className={styles.itemIndex}>
                                    0{index+1}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Revolutionizing;
