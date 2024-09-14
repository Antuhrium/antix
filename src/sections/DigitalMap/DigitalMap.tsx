import styles from "./DigitalMap.module.scss";

import Point1 from "../../assets/svg/map/location-1.svg";
import Point2 from "../../assets/svg/map/location-2.svg";
import Point3 from "../../assets/svg/map/location-3.svg";
import Point4 from "../../assets/svg/map/location-4.svg";
import Point5 from "../../assets/svg/map/location-5.svg";

import VideoImg from "../../assets/images/map-avatar.png";

const PlayIcon = () => {
    return (
        <svg
            width="37"
            height="42"
            viewBox="0 0 37 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M35.3919 18.1895C37.4204 19.3386 37.4204 22.261 35.3919 23.4101L4.72863 40.7795C2.72873 41.9124 0.250002 40.4677 0.250002 38.1692L0.250003 3.43039C0.250004 1.13192 2.72873 -0.312767 4.72863 0.82009L35.3919 18.1895Z"
                fill="#D9D9D9"
            />
        </svg>
    );
};

const DigitalMap = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <p className={styles.subTitle}>
                    Antix makes <span>Hollywood-quality</span> digital humans
                    accessible to all without the need for big teams, long
                    timelines, or massive costs.
                </p>
                <h4 className={styles.title}>Digital humans everywhere</h4>
            </div>

            <a
                className={styles.point1}
                href="https://www.youtube.com/watch?v=lYHnSGHx4ig"
                target="_blank"
            >
                <img src={Point1} alt="" draggable={false} />

                <div className={styles.videoWrapper}>
                    <img src={VideoImg} alt="" draggable={false} />
                    <div className={styles.play}>
                        <PlayIcon />
                    </div>
                </div>
            </a>

            <div className={styles.point2}>
                <img src={Point2} alt="" draggable={false} />
            </div>

            <div className={styles.point3}>
                <img src={Point3} alt="" draggable={false} />
            </div>

            <a
                className={styles.point4}
                href="https://www.youtube.com/watch?v=lYHnSGHx4ig"
                target="_blank"
            >
                <img src={Point4} alt="" draggable={false} />

                <div className={styles.videoWrapper}>
                    <img src={VideoImg} alt="" draggable={false} />
                    <div className={styles.play}>
                        <PlayIcon />
                    </div>
                </div>
            </a>

            <a
                className={styles.point5}
                href="https://www.youtube.com/watch?v=lYHnSGHx4ig"
                target="_blank"
            >
                <img src={Point5} alt="" draggable={false} />

                <div className={styles.videoWrapper}>
                    <img src={VideoImg} alt="" draggable={false} />
                    <div className={styles.play}>
                        <PlayIcon />
                    </div>
                </div>
            </a>
        </section>
    );
};

export default DigitalMap;
