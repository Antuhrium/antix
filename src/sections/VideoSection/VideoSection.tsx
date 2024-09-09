import styles from "./VideoSection.module.scss";

// import VideoBg from "../../assets/images/video-img.png";

import Aword1 from "../../assets/svg/video-awords/1.svg";
import Aword2 from "../../assets/svg/video-awords/2.svg";
import Aword3 from "../../assets/svg/video-awords/3.svg";
import Aword4 from "../../assets/svg/video-awords/4.svg";
import TopAword from "../../assets/svg/video-awords/top.png";

const awords = [Aword1, Aword2, Aword3, Aword4];

const VideoSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.videoWrapper}>
                <button className={styles.playButton}>
                    <svg
                        width="42"
                        height="49"
                        viewBox="0 0 42 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M41.7402 24.5793L0.871332 48.6932L0.871334 0.465304L41.7402 24.5793Z"
                            fill="#F0F0F0"
                        />
                    </svg>
                </button>
                <div className={styles.awordsWrapper}>
                    <img src={TopAword} alt="Top Aword" className={styles.topAword} />
                    {awords.map((aword, index) => (
                        <img key={index} src={aword} alt="" />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
