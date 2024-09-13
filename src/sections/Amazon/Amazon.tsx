import styles from "./Amazon.module.scss";

import RightImg from "../../assets/images/amazon-img.png";

const Amazon = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contentBg}>
                <div className={styles.textWrapper}>
                    <h3 className={styles.title}>
                        Amazon of <br /> AI digital avatars
                    </h3>
                    <p className={styles.text}>
                        Your digital twin, with all the unique features, belongs{" "}
                        <br /> to you <span>as a unique NFT</span>, ready to
                        tune, trade or rent.
                    </p>
                </div>
            </div>
            <div className={styles.rightImg}>
                <img src={RightImg} alt="" draggable={false} />
            </div>

            <div className={styles.secondContentBg}>
                <div className={styles.secondContent}>
                    <h4 className={styles.secondText}>
                        Antix features a unique <br /> marketplace to buy, rent,
                        or sell
                    </h4>
                    <div className={styles.right}>
                        <span>clothes</span>
                        <span className={styles.rightActive}>
                            digital twins
                        </span>
                        <span>accessories</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Amazon;
