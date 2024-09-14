import { useEffect, useState, useRef } from "react";
import styles from "./PlatformToReplace.module.scss";

const words = ["influencers", "actors", "TV hosts"];

const PlatformToReplace = () => {
    const [displayWords, setDisplayWords] = useState(words);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDisplayWords((prevWords) => {
                const [first, ...rest] = prevWords;
                return [...rest, first];
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <span>Reshaping a $300 billion industry.</span>
                    <h4>Platform for digital humans to replace:</h4>
                </div>
                <div className={styles.right} ref={containerRef}>
                    {displayWords.map((word, index) => (
                        <span
                            key={word}
                            className={index === 1 ? styles.rightActive : ""}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlatformToReplace;
