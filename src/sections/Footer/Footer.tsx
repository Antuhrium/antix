import styles from "./Footer.module.scss";

import socialX from "../../assets/svg/social-x.svg";
import socialTelegram from "../../assets/svg/social-telegram.svg";
import socialDiscord from "../../assets/svg/social-discord.svg";

import TitleImg from "../../assets/svg/footer-title.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerConatiner}>
                <div className={styles.topWrapper}>
                    <div className={styles.topItem}>
                        <span className={styles.smallTitle}>Follow us:</span>
                        <div className={styles.socials}>
                            <a href="https://x.com/antix_in" target="_blank" className={styles.socialLink}>
                                <img src={socialX} alt="X" />
                            </a>
                            <a href="https://discord.com/invite/bKcMXChRRT" target="_blank" className={styles.socialLink}>
                                <img src={socialDiscord} alt="Discord" />
                            </a>
                            <a href="https://t.me/antix_in" target="_blank" className={styles.socialLink}>
                                <img src={socialTelegram} alt="Telegram" />
                            </a>
                        </div>
                    </div>
                    <div className={styles.topItem}>
                        <span className={styles.smallTitle}>E-mail:</span>
                        <a
                            href="mailto:hello@antix.in"
                            className={styles.mailLink}
                        >
                            hello@antix.in
                        </a>
                        <div className={styles.centerLinksWrapper}>
                            <div className={styles.linkWrapper}>
                                <a href="#">Advisors</a>
                                <a href="#">About tokens</a>
                                <a href="#">Tocenomics</a>
                            </div>
                            <div className={styles.linkWrapper}>
                                <a href="#">About project</a>
                                <a href="#">Team</a>
                                <a href="#">Partners</a>
                            </div>

                            <div className={styles.linkWrapper}>
                                <a href="#">Road map</a>
                                <a href="#">Community</a>
                                <a href="#">FAQ</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.bootomWrapper}>
                    <div className={styles.bootomLinkWrapper}>
                        <a href="#" className={styles.bootomLink}>
                            Terms of Use
                        </a>
                        <a href="#" className={styles.bootomLink}>
                            Privacy Policy
                        </a>
                    </div>
                    <p className={styles.bootomInfo}>
                        Antix Interactive Inc. All Rights Reserved
                    </p>
                    <span className={styles.bootomInfo}>© 2024</span>
                </div>
            </div>
            <div className={styles.bgTitle}>
                <img src={TitleImg} alt="Antix" draggable={false} />
            </div>
        </footer>
    );
};

export default Footer;
