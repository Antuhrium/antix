import styles from "./Amazon.module.scss";

import RightImg from "../../assets/images/amazon-img.png";
import MobileImg from "../../assets/images/mobile-amazon-img.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const words = [
    "influencers",
    "actors",
    "TV hosts",
    "influencers",
    "actors",
    "TV hosts",
];

const Amazon = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contentBg}>
                <div className={styles.textWrapper}>
                    <h3 className={styles.title}>
                        Amazon of <br className={styles.separator} /> AI digital
                        avatars
                    </h3>
                    <p className={styles.text}>
                        Your digital twin, with all the unique features, belongs{" "}
                        <br className={styles.separator} /> to you{" "}
                        <span>as a unique NFT</span>, ready to tune, trade or
                        rent.
                    </p>
                </div>
            </div>
            <div className={styles.rightImgWrapper}>
                <img
                    src={RightImg}
                    alt=""
                    draggable={false}
                    className={styles.rightImg}
                />
                <img
                    src={MobileImg}
                    alt=""
                    draggable={false}
                    className={styles.mobileImg}
                />
            </div>

            <div className={styles.secondContentBg}>
                <div className={styles.secondContent}>
                    <h4 className={styles.secondText}>
                        Antix features a unique <br /> marketplace to buy, rent,
                        or sell
                    </h4>
                    <Swiper
                        direction={"vertical"}
                        slidesPerView={3}
                        loop={true}
                        centeredSlides={true}
                        autoplay={{ delay: 1000 }}
                        modules={[Autoplay]}
                        allowTouchMove={false}
                        noSwiping={true}
                        keyboard={{ enabled: false }}
                        className={styles.carousel}
                    >
                        {words.map((word) => (
                            <SwiperSlide key={word} className={styles.slide}>
                                {({ isActive }) => (
                                    <span
                                        className={
                                            isActive ? styles.active : ""
                                        }
                                    >
                                        {word}
                                    </span>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Amazon;
