import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./MarketLeader.module.scss";
import { allLogos } from "./mocdata";
import { getLogoCount } from "./utils";

const MarketLeader = () => {
  const [displayedLogos, setDisplayedLogos] = useState(
    Array(getLogoCount()).fill(null)
  );

  useEffect(() => {
    const availableLogos = [...allLogos];
    const initialLogos = [];

    for (let i = 0; i < getLogoCount(); i++) {
      const randomIndex = Math.floor(Math.random() * availableLogos.length);
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
            const randomLogoIndex = Math.floor(Math.random() * allLogos.length);
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
    <section className={styles.wrapper}>
      <h4 className={styles.title}>From market leader serving</h4>
      <div className={styles.container}>
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
