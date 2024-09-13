import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./MarketLeader.module.scss";

import logo1 from "../../assets/svg/marketLeader/1.svg";
import logo2 from "../../assets/svg/marketLeader/2.svg";
import logo3 from "../../assets/svg/marketLeader/3.svg";
import logo4 from "../../assets/svg/marketLeader/4.svg";
import logo5 from "../../assets/svg/marketLeader/5.svg";
import logo6 from "../../assets/svg/marketLeader/6.svg";
import logo7 from "../../assets/svg/marketLeader/7.svg";
import logo8 from "../../assets/svg/marketLeader/8.svg";
import logo9 from "../../assets/svg/marketLeader/9.svg";
import logo10 from "../../assets/svg/marketLeader/10.svg";
import logo11 from "../../assets/svg/marketLeader/11.svg";
import logo12 from "../../assets/svg/marketLeader/12.svg";
import logo13 from "../../assets/svg/marketLeader/13.svg";
import logo14 from "../../assets/svg/marketLeader/14.svg";
import logo15 from "../../assets/svg/marketLeader/15.svg";
import logo16 from "../../assets/svg/marketLeader/16.svg";
import logo17 from "../../assets/svg/marketLeader/17.svg";
import logo18 from "../../assets/svg/marketLeader/18.svg";
import logo19 from "../../assets/svg/marketLeader/19.svg";
import logo20 from "../../assets/svg/marketLeader/20.svg";
import logo21 from "../../assets/svg/marketLeader/21.svg";
import logo22 from "../../assets/svg/marketLeader/22.svg";
import logo23 from "../../assets/svg/marketLeader/23.svg";

// Список всех логотипов
const allLogos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    logo15,
    logo16,
    logo17,
    logo18,
    logo19,
    logo20,
    logo21,
    logo22,
    logo23,
];

const MarketLeader = () => {
    const numberOfLogos = 10;
    const [displayedLogos, setDisplayedLogos] = useState(
        Array(numberOfLogos).fill(null)
    );

    useEffect(() => {
        let availableLogos = [...allLogos];
        const initialLogos = [];

        for (let i = 0; i < numberOfLogos; i++) {
            const randomIndex = Math.floor(
                Math.random() * availableLogos.length
            );
            initialLogos.push(availableLogos[randomIndex]);
            availableLogos.splice(randomIndex, 1);
        }

        setDisplayedLogos(initialLogos);

        const changeInterval = 9000;

        const intervalIds = initialLogos.map((_, index) => {
            const delay = Math.random() * changeInterval;
            return setTimeout(() => {
                const intervalId = setInterval(() => {
                    setDisplayedLogos((prev) => {
                        const newLogos = [...prev];
                        const randomLogoIndex = Math.floor(
                            Math.random() * allLogos.length
                        );
                        const newLogo = allLogos[randomLogoIndex];
                        newLogos[index] = newLogo;
                        return newLogos;
                    });
                }, changeInterval);
                return intervalId;
            }, delay);
        });

        return () => {
            intervalIds.forEach((id) => clearTimeout(id));
        };
    }, []);

    return (
        <section className={styles.container}>
            <h4 className={styles.title}>From market leader serving</h4>
            <div className={styles.wrapper}>
                {displayedLogos.map((item, index) => (
                    <motion.div
                        key={`${item}-${index}`}
                        className={styles.item}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        {item && <img src={item} alt="Logo" />}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MarketLeader;
