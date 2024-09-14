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
            setCurrentAuthorIndex((prevIndex) => (prevIndex + 1) % authors.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const currentAuthor = authors[currentAuthorIndex];

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.quoteText}>
                    <span>
                        Thats not an issue that everyone will own their digital
                        twin in upcoming years.
                    </span>{" "}
                    The question is how we will manage their rights?
                </p>
                <span className={styles.quoteAuthor}>[с] Alan Kepler</span>
            </div>
            <div className={styles.quoteImage}>
                <img src={currentAuthor.avatar} alt={currentAuthor.user} />
                <span>{currentAuthor.user}</span>
            </div>
            <div className={styles.dots}>
                <div className={styles.dotsContent}>
                    <svg
                        width="54"
                        height="39"
                        viewBox="0 0 54 39"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M53.2012 16.9307C53.2012 16.0147 52.4586 15.2721 51.5426 15.2721H44.5119C43.279 15.2721 42.4771 13.9746 43.0285 12.8719L48.2101 2.50872C48.7615 1.40596 47.9596 0.108456 46.7267 0.108456H39.0625C38.4343 0.108456 37.86 0.463383 37.5791 1.02526L30.6307 14.9219C30.5155 15.1522 30.4556 15.4062 30.4556 15.6637V36.3592C30.4556 37.2752 31.1981 38.0178 32.1141 38.0178H51.5426C52.4586 38.0178 53.2012 37.2752 53.2012 36.3592V16.9307ZM21.2151 38.0178C22.1311 38.0178 22.8736 37.2752 22.8736 36.3592V16.9307C22.8736 16.0147 22.1311 15.2721 21.2151 15.2721H14.1844C12.9515 15.2721 12.1496 13.9746 12.701 12.8719L17.8826 2.50872C18.434 1.40596 17.6321 0.108456 16.3992 0.108456H8.73496C8.10676 0.108456 7.53247 0.463383 7.25153 1.02526L0.303104 14.9219C0.187954 15.1522 0.128002 15.4062 0.128002 15.6637V36.3592C0.128002 37.2752 0.870556 38.0178 1.78654 38.0178H21.2151Z"
                            fill="white"
                        />
                        <path
                            d="M53.2012 16.9307C53.2012 16.0147 52.4586 15.2721 51.5426 15.2721H44.5119C43.279 15.2721 42.4771 13.9746 43.0285 12.8719L48.2101 2.50872C48.7615 1.40596 47.9596 0.108456 46.7267 0.108456H39.0625C38.4343 0.108456 37.86 0.463383 37.5791 1.02526L30.6307 14.9219C30.5155 15.1522 30.4556 15.4062 30.4556 15.6637V36.3592C30.4556 37.2752 31.1981 38.0178 32.1141 38.0178H51.5426C52.4586 38.0178 53.2012 37.2752 53.2012 36.3592V16.9307ZM21.2151 38.0178C22.1311 38.0178 22.8736 37.2752 22.8736 36.3592V16.9307C22.8736 16.0147 22.1311 15.2721 21.2151 15.2721H14.1844C12.9515 15.2721 12.1496 13.9746 12.701 12.8719L17.8826 2.50872C18.434 1.40596 17.6321 0.108456 16.3992 0.108456H8.73496C8.10676 0.108456 7.53247 0.463383 7.25153 1.02526L0.303104 14.9219C0.187954 15.1522 0.128002 15.4062 0.128002 15.6637V36.3592C0.128002 37.2752 0.870556 38.0178 1.78654 38.0178H21.2151Z"
                            fill="url(#paint0_linear_191_482)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_191_482"
                                x1="63.131"
                                y1="38.0178"
                                x2="5.67113"
                                y2="-14.8682"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stop-color="#12FFF1" />
                                <stop
                                    offset="1"
                                    stop-color="#12FFF1"
                                    stop-opacity="0.4"
                                />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Quote;
