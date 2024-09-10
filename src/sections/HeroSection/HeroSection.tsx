import { useState } from "react";
import styles from "./HeroSection.module.scss";

import HeroTimer from "../../components/HeroTimer/HeroTimer";

const LoaderSvg = ({ percent }: { percent: number }) => {
    return (
        <svg
            width="221"
            height="226"
            viewBox="0 0 221 226"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="Gradient2" x2="0" y2="1">
                    <stop offset={`${percent}%`} stop-color="#494D54" />
                    <stop offset={`${percent}%`} stop-color="#12FFF1" />
                </linearGradient>
            </defs>
            <path
                d="M20.8343 0.584944L21.6107 0C37.8085 19.5003 83.9537 72.466 110.492 72.466C130.99 72.466 142.794 41.4508 144.401 36.9698L145.336 37.2958C145.336 37.2958 130.613 78.4259 144.45 89.2624C158.058 99.9176 215.32 81.929 220.221 80.3792L220.5 81.3112C220.5 81.3112 154.698 101.302 150.517 120.355C147.527 133.973 164.665 153.203 169.24 158.136L168.551 158.798C168.551 158.798 148.636 136.496 133.815 142.73C111.776 152.005 99.1741 216.867 97.6487 226L96.6765 225.817C96.6765 225.817 110.503 152.727 75.8711 136.334C56.4164 127.119 8.39727 138.878 0.779249 140.781L0.5 139.827C0.5 139.827 67.6633 123.009 67.6633 86.0393C67.6633 56.1165 20.8343 0.584944 20.8343 0.584944Z"
                fill="url(#Gradient2)"
            />
        </svg>
    );
};

const HeroSection = () => {
    const [percents] = useState(30);

    const goToRoadmap = () => {
        document.querySelector("#roadmap")?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.leftWrapper}>
                    <h1 className={styles.leftTitle}>
                        Ready to <br />
                        Be <span>Replaced?</span>
                    </h1>
                    <span className={styles.subtitle}>The new era of AI-powered digital humans is here.</span>
                    <p className={styles.leftText}>
                        Step in <span>$300 billion industry</span> with next-gen
                        digital twins for film, content, and beyond
                    </p>
                    <div className={styles.leftButtons}>
                        <button className={styles.leftButton}>
                            How it works?
                        </button>
                        <a onClick={goToRoadmap} className={styles.leftLink}>
                            Roadmap
                            <svg
                                width="63"
                                height="16"
                                viewBox="0 0 63 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M62.7071 8.70711C63.0976 8.31658 63.0976 7.68342 62.7071 7.29289L56.3431 0.928932C55.9526 0.538408 55.3195 0.538408 54.9289 0.928932C54.5384 1.31946 54.5384 1.95262 54.9289 2.34315L60.5858 8L54.9289 13.6569C54.5384 14.0474 54.5384 14.6805 54.9289 15.0711C55.3195 15.4616 55.9526 15.4616 56.3431 15.0711L62.7071 8.70711ZM0 9H62V7H0V9Z"
                                    fill="#AFAFAF"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.rightWrapper}>
                    <div className={styles.rightTitle}>
                        <img src="/logo-small.svg" alt="Logo" />
                        ANTIX Presale
                    </div>
                    <div className={styles.rightItem}>
                        <span className={styles.timerTitle}>Coming Soon</span>
                        <div className={styles.loader}>
                            <LoaderSvg percent={percents} />
                        </div>
                        <div className={styles.timerContainer}>
                            <HeroTimer
                                targetDate={new Date("2024-12-31T23:59:59")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
