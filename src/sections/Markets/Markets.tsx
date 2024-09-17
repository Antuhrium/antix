import { useState } from "react";
import styles from "./Markets.module.scss";

import HeadImg from "../../assets/images/markets-img.png";
import ArrowIcon from "../../assets/svg/markets/arrow-icon.svg";

const leftList = [
    {
        title: "Advertisement",
        text: "Personalized and dynamic ad campaigns, where brands interact with customers in innovative ways",
    },
    {
        title: "E-commerce",
        text: "Virtual sales assistants and online fitting rooms",
    },
    {
        title: "Customer Support",
        text: "Enhance customer service with AI-powered digital avatars that provide 24/7 assistance, improving response times and customer satisfaction.",
    },
];

const rightList = [
    {
        title: "Movie Production",
        text: "Revolutionize filmmaking with customizable digital characters that fly, shape-shift, and perform stunts—no physical limits or costly shoot days.",
    },
    {
        title: "Social media",
        text: "Boost engagement with automated digital influencers that connect 24/7—proven more effective, popular, and reliable than real influencers*",
    },
    {
        title: "Education",
        text: "Interactive digital teachers and educational programs. Employee training and development ",
    },
];

type ListItemProps = {
    item: {
        title: string;
        text: string;
    };
    isOpen: string;
    setIsOpen: React.Dispatch<React.SetStateAction<string>>;
};

const ListItem = ({ item, isOpen, setIsOpen }: ListItemProps) => {
    return (
        <button
            onClick={() => setIsOpen(isOpen === item.title ? "" : item.title)}
            key={item.title}
            className={styles.item}
        >
            <div className={styles.itemTextWrapper}>
                <h4 className={isOpen === item.title ? styles.itemActiveTitle : styles.itemTitle}>{item.title}</h4>
                {isOpen === item.title && (
                    <p className={styles.itemText}>{item.text}</p>
                )}
                <p className={styles.mobileItemText}>{item.text}</p>
            </div>
            <div className={styles.itemArrow}>
                <img
                    src={ArrowIcon}
                    alt="Arrow Down"
                    style={isOpen === item.title ? {} : { rotate: "180deg" }}
                />
            </div>
        </button>
    );
};

const Markets = () => {
    const [isOpen, setIsOpen] = useState("");
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h3 className={styles.title}>
                    Antix digital people are replacing humans in
                </h3>
                <div className={styles.wrapper}>
                    <div className={styles.list}>
                        {leftList.map((item) => (
                            <ListItem
                                item={item}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                    <div className={styles.list}>
                        {rightList.map((item) => (
                            <ListItem
                                item={item}
                                isOpen={isOpen}
                                setIsOpen={setIsOpen}
                            />
                        ))}
                    </div>
                </div>
                <img src={HeadImg} alt="" className={styles.headImg} />

                <span className={styles.bottomLink}>
                    *source:{" "}
                    <a
                        href="https://hbr.org/2024/05/should-your-brand-hire-a-virtual-influencer"
                        target="_blank"
                    >
                        Harvard Digital Review
                    </a>{" "}
                    (2024)
                </span>
            </div>
        </section>
    );
};

export default Markets;
