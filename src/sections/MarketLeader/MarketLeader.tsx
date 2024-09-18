import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./MarketLeader.module.scss";
import { allLogos } from "./data";
import { getLogoCount } from "./utils";

const getRandomLogos = (num: number) => {
  const shuffled = [...allLogos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const MarketLeader = () => {
  const [displayedLogos, setDisplayedLogos] = useState(
    getRandomLogos(getLogoCount())
  );
  const [shownLogos, setShownLogos] = useState(new Set(displayedLogos));
  const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingLogos = allLogos.filter((logo) => !shownLogos.has(logo));

      if (remainingLogos.length === 0) {
        return;
      }

      const newLogo =
        remainingLogos[Math.floor(Math.random() * remainingLogos.length)];
      const indexToReplace = Math.floor(Math.random() * displayedLogos.length);

      setDisplayedLogos((prevLogos) => {
        const newLogos = [...prevLogos];
        const oldLogo = newLogos[indexToReplace];
        newLogos[indexToReplace] = newLogo;

        setShownLogos((prevShownLogos) => {
          const updatedShownLogos = new Set(prevShownLogos);
          updatedShownLogos.delete(oldLogo);
          updatedShownLogos.add(newLogo);
          return updatedShownLogos;
        });

        return newLogos;
      });
      const logoRef = logoRefs.current[indexToReplace];
      if (logoRef) {
        gsap.fromTo(
          logoRef,
          { scale: 0.9 },
          {
            scale: 1,
            duration: 0.2,
            onComplete: () => {
              if (logoRef) {
                logoRef.src = newLogo;
              }
            },
          }
        );
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [shownLogos, displayedLogos]);

  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>From market leader serving</h4>
      <div className={styles.container}>
        {displayedLogos.map((url, index) => (
          <div key={index} className={styles.item}>
            <img
              src={url}
              alt="Logo"
              ref={(el) => (logoRefs.current[index] = el)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketLeader;
