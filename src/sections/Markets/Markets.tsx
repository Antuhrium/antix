import { useState } from "react";
import styles from "./Markets.module.scss";

import HeadImg from "../../assets/images/markets-img.png";
import ArrowIcon from "../../assets/svg/markets/arrow-icon.svg";
import FadeIn from "../../components/FadeIn/FadeIn";

const leftList = [
    {
        title: "Advertisement",
        text: "Personalized and dynamic ad campaigns, where brands interact with customers in innovative ways",
    },
    {
        title: "Fashion and modeling",
        text: "AI-driven avatars will transform fashion with customizable, always-available digital models. No more costly shoots or limits—adapt to any style instantly, making fashion faster and more innovative than ever.",
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
  const isActive = isOpen === item.title;

  return (
    <button
      onClick={() => setIsOpen(isActive ? "" : item.title)}
      key={item.title}
      className={styles.item}
    >
      <div className={`${styles.itemTextWrapper} ${isActive ? styles.openItemTextWrapper : ""}`}>
        <h4 className={isActive ? styles.itemActiveTitle : styles.itemTitle}>
          {item.title}
        </h4>
        <div className={`${isActive ? styles.openContent : ""}`}>
          <p className={styles.itemText}>{item.text}</p>
        </div>
        <p className={styles.mobileItemText}>{item.text}</p>
      </div>
      <div className={styles.itemArrow}>
        <img
            className={!isActive ? styles.openArrow : ""}
          src={ArrowIcon}
          alt="Arrow Down"
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
                <FadeIn direction="up" distance={"100%"}>
                    <h3 className={styles.title}>
                        Antix Avatars <span>are Replacing</span> <span>Humans in</span>
                    </h3>
                </FadeIn>
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
