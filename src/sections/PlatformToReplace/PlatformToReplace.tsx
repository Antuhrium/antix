import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import styles from "./PlatformToReplace.module.scss";
import { useEffect, useRef } from "react";

const words = [
    "actors",
    "Personal Assistants",
    "influencers",
    "Fitness Instructors",
    "TV hosts",
    "Game Characters",
    "Pop singers",
    "Virtual Companions",
    "support agents",
    "Event Hosts",
    "Brand Ambassadors",
];

const PlatformToReplace = () => {
    const swiperRef = useRef<SwiperRef | null>(null);
    useEffect(() => {
        setTimeout(() => {
            if (swiperRef.current && swiperRef.current.swiper) {
                swiperRef.current.swiper.update();
            }
        }, 100);
    }, []);

    return (
        <section className={styles.wrapper} id="AboutProject">
            <div className={styles.container}>
                <div className={styles.description}>
                    <span>Reshaping a $300 billion industry.</span>
                    <h4>
                        Platform to create, train and monetize <br /> AI-powered
                        digital characters to replace:
                    </h4>
                </div>
                <Swiper
                    ref={swiperRef}
                    direction={
                        window.innerWidth > 1200 ? "vertical" : "horizontal"
                    }
                    slidesPerView={3}
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
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
