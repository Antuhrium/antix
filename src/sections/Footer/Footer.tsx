import styles from "./Footer.module.scss";

import socialX from "../../assets/svg/social-x.svg";
import socialTelegram from "../../assets/svg/social-telegram.svg";
import socialDiscord from "../../assets/svg/social-discord.svg";

import TitleImg from "../../assets/svg/footer-title.svg";

const Footer = () => {
    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <footer className={styles.footer} id="Footer">
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
                            href="mailto:token@antix.in"
                            className={styles.mailLink}
                        >
                            token@antix.in
                        </a>
                        <div className={styles.centerLinksWrapper}>
                        <div className={styles.linkWrapper}>
                                <button onClick={() => handleClick("Advisors")}>Advisors</button>
                                <button onClick={() => handleClick("AboutTokens")}>About tokens</button>
                                <button onClick={() => handleClick("Tokenomics")}>Tokenomics</button>
                            </div>
                            <div className={styles.linkWrapper}>
                                <button onClick={() => handleClick("AboutProject")}>About project</button>
                                <button onClick={() => handleClick("Advisors")}>Team</button>
                                <button onClick={() => handleClick("Partners")}>Partners</button>
                            </div>

                            <div className={styles.linkWrapper}>
                                <button onClick={() => handleClick("RoadMap")}>Road map</button>
                                <button onClick={() => handleClick("Community")}>Community</button>
                                <button onClick={() => handleClick("FAQ")}>FAQ</button>
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
