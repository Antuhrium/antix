import styles from "./Amazon.module.scss";

import RightImg from "../../assets/images/amazon-img.png";
import MobileImg from "../../assets/images/mobile-amazon-img.png";
import { useEffect, useState } from "react";

const words = ["clothes", "digital twins", "accessories"];

const Amazon = () => {
    const [displayWords, setDisplayWords] = useState(words);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayWords((prevWords) => {
                const [first, ...rest] = prevWords;
                return [...rest, first];
            });
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.contentBg}>
                <div className={styles.textWrapper}>
                    <h3 className={styles.title}>
                        Amazon of <br className={styles.separator} /> AI digital
                        avatars
                    </h3>
                    <p className={styles.text}>
                        Your digital twin, with all the unique features, belongs{" "}
                        <br className={styles.separator} /> to you{" "}
                        <span>as a unique NFT</span>, ready to tune, trade or
                        rent.
                    </p>
                </div>
            </div>
            <div className={styles.rightImgWrapper}>
                <img
                    src={RightImg}
                    alt=""
                    draggable={false}
                    className={styles.rightImg}
                />
                <img
                    src={MobileImg}
                    alt=""
                    draggable={false}
                    className={styles.mobileImg}
                />
            </div>

            <div className={styles.secondContentBg}>
                <div className={styles.secondContent}>
                    <h4 className={styles.secondText}>
                        Antix features a unique <br /> marketplace to buy, rent,
                        or sell
                    </h4>
                    <div className={styles.right}>
                        {displayWords.map((word, index) => (
                            <span
                                key={word}
                                className={
                                    index === 1 ? styles.rightActive : ""
                                }
                            >
                                {word}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amazon;
