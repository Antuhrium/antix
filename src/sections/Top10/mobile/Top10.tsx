import React from 'react';
import styles from './Top10.module.scss';

const Top10: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.footer}>
                <h1>
                    <span className={styles.aiDriven}>AI-Driven</span>
                    {" "}
                    <span className={styles.realism}>Realism</span>
                </h1>
                <p className={styles.description}>We combine <span>3d-modeling with AI</span> to achieve never-seen levels of realism.</p>
            </div>


            <div className={styles.videoWrapper}>
                
                <div className={styles.videoContainer}>
                    <video
                        loop
                        muted
                        className={styles.backgroundVideo}
                        onClick={(e) => {
                            const video = e.currentTarget as HTMLVideoElement;
                            if (video.paused) {
                                video.play();
                            } else {
                                video.pause();
                            }
                        }}
                    >
                        <source src="/videos/bgvid.mp4" type="video/mp4" />
                    </video>
                </div>


                <div className={styles.header}>
                    <div className={styles.icon}>
                        <img src="/top10/awards.png" alt="top10" />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="13" viewBox="0 0 60 13" fill="none">
                        <path d="M5.13185 2.53143V11.909H7.92594V2.53143H13.0578V0.282442H0V2.53143H5.13185ZM19.9945 12.0957C24.5419 12.0957 26.9437 9.84672 26.9437 6.12006V6.07134C26.9437 2.34469 24.5419 0.0957031 19.9945 0.0957031C15.4391 0.0957031 13.0373 2.34469 13.0373 6.07134V6.12006C13.0373 9.84672 15.4391 12.0957 19.9945 12.0957ZM19.9945 9.86296C16.9362 9.86296 15.9194 8.25538 15.9194 6.12006V6.07134C15.9194 3.93603 16.9362 2.32845 19.9945 2.32845C23.0448 2.32845 24.0696 3.93603 24.0696 6.07134V6.12006C24.0696 8.25538 23.0448 9.86296 19.9945 9.86296ZM35.6412 0.282442H28.0515V11.909H30.8536V7.5409H35.6172C38.3953 7.5409 40.4288 6.70463 40.4288 3.89543V3.87919C40.4288 1.09435 38.4033 0.282442 35.6412 0.282442ZM37.5547 3.93603C37.5547 5.12141 36.7781 5.4137 35.5131 5.4137H30.8536V2.45836H35.5131C36.7781 2.45836 37.5547 2.7344 37.5547 3.91979V3.93603ZM43.6143 11.909H46.3124V0.282442H44.2468V0.6478C44.2308 1.78447 43.6063 2.28785 41.9731 2.28785H41.0204V4.21208H43.6223L43.6143 11.909ZM53.8994 12.0957C57.8224 12.0957 60 10.0903 60 6.17689V6.01451C60 2.10112 57.8224 0.0957031 53.8994 0.0957031C49.9685 0.0957031 47.7908 2.10112 47.7908 6.01451V6.17689C47.7908 10.0903 49.9685 12.0957 53.8994 12.0957ZM53.8994 9.9685C51.4016 9.9685 50.5529 8.51519 50.5529 6.16877V6.02263C50.5529 3.67622 51.4016 2.2229 53.8994 2.2229C56.3893 2.2229 57.2379 3.67622 57.2379 6.02263V6.16877C57.2379 8.51519 56.3893 9.9685 53.8994 9.9685Z" fill="url(#paint0_linear_630_5204)" />
                        <defs>
                            <linearGradient id="paint0_linear_630_5204" x1="30.1921" y1="-2.1973" x2="30.1921" y2="16.1259" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FDEEBD" />
                                <stop offset="1" stop-color="#6D5C4B" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

        </div>
    );
};

export default Top10;