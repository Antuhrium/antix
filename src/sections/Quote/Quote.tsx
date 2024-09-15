import { useEffect, useState } from "react";
import styles from "./Quote.module.scss";

import Avatar1 from "../../assets/images/quote/1.png";
import Avatar2 from "../../assets/images/quote/2.png";
import Avatar3 from "../../assets/images/quote/3.png";
import Avatar4 from "../../assets/images/quote/4.png";

const authors = [
    {
        user: "@lilmiquela",
        avatar: Avatar1,
    },
    {
        user: "@magazineluiza",
        avatar: Avatar2,
    },
    {
        user: "K/DA pop-group",
        avatar: Avatar3,
    },
    {
        user: "FN Meka - rapper",
        avatar: Avatar4,
    },
];

const Quote = () => {
    const [currentAuthorIndex, setCurrentAuthorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentAuthorIndex(
                (prevIndex) => (prevIndex + 1) % authors.length
            );
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    const currentAuthor = authors[currentAuthorIndex];

    return (
        <div className={styles.container}>
            <div className={styles.infoWrapper}>
                <p className={styles.quoteText}>
                    <span>
                        Thats not an issue that everyone will own their digital
                        twin in upcoming years.
                    </span>{" "}
                    The question is how we will manage their rights?
                </p>
                <span className={styles.quoteAuthor}>- Alan Kepler</span>
            </div>
            <div className={styles.quoteImage}>
                <img src={currentAuthor.avatar} alt={currentAuthor.user} />
                <span>{currentAuthor.user}</span>
            </div>
            <div className={styles.dots}>
                <div className={styles.dotsContent}></div>
            </div>
        </div>
    );
};

export default Quote;
