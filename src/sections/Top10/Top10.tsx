import React from 'react';
import styles from './Top10.module.scss';

const Top10: React.FC = () => {
    return (
        <div className={styles.container}>

            <video autoPlay loop muted className={styles.backgroundVideo}>
                <source src="/videos/bgvid.mp4" type="video/mp4" />
            </video>

            <div className={styles.content}>

                <div className={styles.header}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="210" height="42" viewBox="0 0 210 42" fill="none">
                        <path d="M17.9615 8.52503V41.3464H27.7408V8.52503H45.7023V0.653586H0V8.52503H17.9615ZM69.9807 42C85.8967 42 94.303 34.1286 94.303 21.0852V20.9147C94.303 7.87145 85.8967 0 69.9807 0C54.0368 0 45.6305 7.87145 45.6305 20.9147V21.0852C45.6305 34.1286 54.0368 42 69.9807 42ZM69.9807 34.1854C59.2767 34.1854 55.718 28.5589 55.718 21.0852V20.9147C55.718 13.4411 59.2767 7.81461 69.9807 7.81461C80.6567 7.81461 84.2434 13.4411 84.2434 20.9147V21.0852C84.2434 28.5589 80.6567 34.1854 69.9807 34.1854ZM124.744 0.653586H98.1804V41.3464H107.988V26.0582H124.66C134.384 26.0582 141.501 23.1313 141.501 13.2991V13.2422C141.501 3.49526 134.412 0.653586 124.744 0.653586ZM131.441 13.4411C131.441 17.59 128.723 18.613 124.296 18.613H107.988V8.26928H124.296C128.723 8.26928 131.441 9.23545 131.441 13.3843V13.4411ZM152.65 41.3464H162.093V0.653586H154.864V1.93234C154.808 5.91069 152.622 7.67253 146.906 7.67253H143.571V14.4073H152.678L152.65 41.3464ZM188.648 42C202.378 42 210 34.9811 210 21.2842V20.7158C210 7.01894 202.378 0 188.648 0C174.89 0 167.268 7.01894 167.268 20.7158V21.2842C167.268 34.9811 174.89 42 188.648 42ZM188.648 34.5548C179.905 34.5548 176.935 29.4682 176.935 21.2557V20.7442C176.935 12.5318 179.905 7.4452 188.648 7.4452C197.363 7.4452 200.333 12.5318 200.333 20.7442V21.2557C200.333 29.4682 197.363 34.5548 188.648 34.5548Z" fill="url(#paint0_linear_481_741)" />
                        <defs>
                            <linearGradient id="paint0_linear_481_741" x1="105.673" y1="-8.02552" x2="105.673" y2="56.1058" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FDEEBD" />
                                <stop offset="1" stop-color="#6D5C4B" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className={styles.icon}>
                        <img src="/top10/awards.png" alt="top10" />
                    </div>
                </div>

                <div className={styles.footer}>
                    <h1>
                        <span className={styles.aiDriven}>AI-Driven</span>
                        {" "}
                        <span className={styles.realism}>Realism</span>
                    </h1>
                    <p className={styles.description}>We combine 3d-modeling with AI to achieve never-seen levels of realism.</p>
                </div>

            </div>
        </div>
    );
};

export default Top10;