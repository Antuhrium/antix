import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./PlatformToReplace.module.scss";
import { useEffect, useState } from "react";

const words = [
    "actors",
    "Personal Assistants",
    "influencers",
    "Fitness Instructors",
    "TV hosts",
    "Game Characters",
    "Pop singers",
    "Virtual Companions",
    "customer support agents",
    "Event Hosts",
    "Brand Ambassadors",
];

const PlatformToReplace = () => {
    // const [windowSize, setWindowSize] = useState(window.innerWidth);
    // useEffect(() => {
    //     const handleResize = () => {
    //         setWindowSize(window.innerWidth);
    //     };

    //     handleResize();
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Reshaping a $300 billion industry.</span>
                    <h4>Platform for digital humans to replace:</h4>
                </div>
                <Swiper
                    // direction={windowSize < 768 ? "horizontal" : "vertical"}
                    direction={"vertical"}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 3000 }}
                    modules={[Autoplay]}
                    allowTouchMove={false}
                    noSwiping={true}
                    keyboard={{ enabled: false }}
                    className={styles.carousel}
                >
                    {words.map((word) => (
                        <SwiperSlide key={word} className={styles.slide}>
                            {({ isActive }) => (
                                <span className={isActive ? styles.active : ""}>
                                    {word}
                                </span>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default PlatformToReplace;
