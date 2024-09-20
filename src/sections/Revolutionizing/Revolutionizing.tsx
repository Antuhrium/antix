// import React from "react";
// import "swiper/swiper-bundle.min.css";
import styles from "./Revolutionizing.module.scss";

import Icon1 from "../../assets/svg/revolutionizing/1.svg";
import Icon2 from "../../assets/svg/revolutionizing/2.svg";
import Icon3 from "../../assets/svg/revolutionizing/3.svg";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import FadeIn from "../../components/FadeIn/FadeIn";

const items = [
    {
        title: "Antix Platform",
        text: "Create hyper-realistic 3D avatars with customizable behavior, voice, and appearance that evolve over time. Dive into personalized digital spaces and next-level social interactions.",
        icon: Icon1,
    },
    {
        title: "Antix Digital Humans",
        text: "Setting new standards in realism and personalization. Fully customizable AI-powered avatars offer immersive experiences for brands and users.",
        icon: Icon2,
    },
    {
        title: "Security",
        text: "Antix safeguards privacy and ensures user safety with AML, KYC protocols, and smart contract verification. Regular audits uphold the highest security standards.",
        icon: Icon3,
    },
];

const Revolutionizing = () => {
    return (
        <section className={styles.container}>
            <FadeIn direction="up" distance={"100%"}>
                <h3 className={styles.title}>Revolutionizing Digital Human</h3>
            </FadeIn>
            <div className={styles.mobileSlider}>
                <Swiper spaceBetween={50} slidesPerView={1}>
                    {items.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.item}>
                                <div className={styles.iconWrapper}>
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className={styles.textWrapper}>
                                    <h4 className={styles.itemName}>
                                        {item.title}
                                    </h4>
                                    <div className={styles.text}>
                                        <p>{item.text}</p>
                                        <span className={styles.itemIndex}>
                                            0{index + 1}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className={styles.wrapper}>
                {items.map((item, index) => (
                    <FadeIn direction="right" distance={"50%"} delay={0.2 * index} key={index}>
                        <div className={styles.item}>
                            <div className={styles.iconWrapper}>
                                <img src={item.icon} alt={item.title} />
                            </div>
                            <div className={styles.textWrapper}>
                                <h4 className={styles.itemName}>
                                    {item.title}
                                </h4>
                                <div className={styles.text}>
                                    <p>{item.text}</p>
                                    <span className={styles.itemIndex}>
                                        0{index + 1}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default Revolutionizing;
