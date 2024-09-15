import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./PlatformToReplace.module.scss";

const words = [
    "influencers",
    "actors",
    "TV hosts",
    "influencers",
    "actors",
    "TV hosts",
];

const PlatformToReplace = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Reshaping a $300 billion industry.</span>
                    <h4>Platform for digital humans to replace:</h4>
                </div>
                <Swiper
                    direction={"vertical"}
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{ delay: 4000 }}
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
