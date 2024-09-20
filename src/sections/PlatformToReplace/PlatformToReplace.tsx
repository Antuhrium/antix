import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./PlatformToReplace.module.scss";
// import { useEffect, useState } from "react";

const words = [
    "actors",
    "Personal Assistants",
    "influencers",
    "Fitness Instructors",
    "Game Characters",
    "Pop singers",
    "Virtual Companions",
    "Event Hosts",
    "Brand Ambassadors",
    "TV hosts",
    "customer support agents",
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
        <section className={styles.wrapper} id="AboutProject">
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Reshaping a $300 billion industry.</span>
                    <h4>Platform to create, train and monetize AI-powered digital characters to replace:</h4>
                </div>
                <Swiper
                    direction={window.innerWidth > 1400 ? "vertical" : "horizontal"}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    allowTouchMove={false}
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
