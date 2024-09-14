import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./MarketLeader.module.scss";
import { allLogos } from "./data";

const getRandomLogos = (num: number) => {
    const shuffled = [...allLogos].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
};

const MarketLeader = () => {
    const [displayedLogos, setDisplayedLogos] = useState(getRandomLogos(10));
    const [shownLogos, setShownLogos] = useState(new Set(displayedLogos));
    const logoRefs = useRef<(HTMLImageElement | null)[]>([]);

    useEffect(() => {
        const interval = setInterval(() => {
            const remainingLogos = allLogos.filter(
                (logo) => !shownLogos.has(logo)
            );

            if (remainingLogos.length === 0) {
                return;
            }

            const newLogo =
                remainingLogos[
                    Math.floor(Math.random() * remainingLogos.length)
                ];
            const indexToReplace = Math.floor(
                Math.random() * displayedLogos.length
            );

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
                        duration: 1,
                        onComplete: () => {
                            if (logoRef) {
                                logoRef.src = newLogo;
                            }
                        },
                    }
                );
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [shownLogos, displayedLogos]);

    return (
        <section className={styles.container}>
            <h4 className={styles.title}>From market leader serving</h4>
            <div className={styles.wrapper}>
                {displayedLogos.map((logo, index) => (
                    <div key={index} className={styles.item}>
                        <img
                            src={logo}
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
