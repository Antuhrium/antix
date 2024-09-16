import styles from "./Footer.module.scss";

import socialX from "../../../assets/svg/social-x.svg";
import socialTelegram from "../../../assets/svg/social-telegram.svg";
import socialDiscord from "../../../assets/svg/social-discord.svg";




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
                            href="mailto:token@antix.in"
                            className={styles.mailLink}
                        >
                            token@antix.in
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
            </div>


            <div className={styles.bgTitle}>
                <svg xmlns="http://www.w3.org/2000/svg" width="194" height="684" viewBox="0 0 194 684" fill="none">
                    <path d="M59.3405 345.755C52.3393 355.966 48.7896 369.934 48.7896 387.261C48.7896 409.521 56.7418 428.016 71.831 440.961L54.1204 440.961L52.5355 440.961L52.5355 442.508L52.5355 478.64L52.5355 480.189L54.1204 480.189L196.185 480.189L197.77 480.189L197.77 478.64L197.77 442.508L197.77 440.961L196.185 440.961L119.793 440.961C88.6711 440.961 80.3618 414.782 80.3618 399.31C80.3618 369.478 98.1227 366.032 111.484 366.032L196.187 366.032L197.772 366.032L197.772 364.486L197.772 328.354L197.772 326.807L196.187 326.807L99.6899 326.807C81.5366 326.817 67.9669 333.191 59.3405 345.755ZM168.905 209.938L169.42 235.085C169.42 245.588 162.588 246.629 145.808 246.629L82.5202 246.629L82.5202 210.465L82.5202 208.916L80.9353 208.916L54.133 208.916L52.5481 208.916L52.5481 210.465L52.5481 246.629L10.1735 246.629L7.42886 246.629L8.8125 248.95L30.2589 285.082L30.7143 285.855L31.6224 285.855L52.5531 285.855L52.5531 313.108L52.5531 314.655L54.138 314.655L80.9404 314.655L82.5253 314.655L82.5253 313.108L82.5253 285.855L156.532 285.855C183.398 285.855 201 282.451 201 236.923C201 225.453 200.104 218.098 198.836 208.958L198.645 207.618L197.262 207.618L170.462 207.618L168.824 207.618L168.877 209.217L168.91 209.938L168.905 209.938ZM52.5405 185.131L52.5405 186.678L54.1254 186.678L196.19 186.678L197.775 186.678L197.775 185.131L197.775 148.999L197.775 147.45L196.19 147.45L54.1254 147.45L52.5405 147.45L52.5405 148.999L52.5405 185.131ZM0.00249199 185.131L0.00249206 186.678L1.58739 186.678L31.6098 186.678L33.1947 186.678L33.1947 185.131L33.1947 148.999L33.1947 147.45L31.6098 147.45L1.58738 147.45L0.00249035 147.45L0.00249041 148.999L0.00249199 185.131ZM195.156 -45.3031L123.008 16.3798L55.1694 -41.116L52.5405 -43.3425L52.5405 -39.9486L52.5405 6.6535L52.5405 7.3949L53.1317 7.86041L97.695 43.0342L53.1418 77.4446L52.5405 77.9076L52.5405 78.6613L52.5405 125.263L52.5405 128.638L55.1594 126.441L123.008 69.4399L195.156 130.874L197.775 133.113L197.775 129.709L197.775 83.1071L197.775 82.3755L197.194 81.91L148.331 43.0638L197.174 5.24963L197.775 4.78661L197.775 4.03289L197.775 -44.1381L197.775 -47.5518L195.156 -45.3031ZM0.00250668 521.159L0.0025079 548.968L0.00250865 566.236L0.00250868 566.948L0.560993 567.411L195.164 729.273L197.772 731.448L197.772 728.096L197.772 683.021L197.772 682.309L197.214 681.844L150.59 643.071L150.59 550.515L196.177 550.515L197.762 550.515L197.762 548.968L197.762 512.836L197.762 511.287L196.177 511.287L1.58488 511.287L-9.62355e-06 511.287L-9.55584e-06 512.836L-9.19205e-06 521.159L0.00250668 521.159ZM117.146 615.242L39.328 550.515L117.146 550.515L117.146 615.242Z" fill="white" />
                </svg>
            </div>


            <div className={styles.bootomWrapper}>
                <div className={styles.bootomLinkWrapper}>
                    <a href="#" className={styles.bootomLink}>
                        Terms of Use
                    </a>
                    <a href="#" className={styles.bootomLink}>
                        Privacy Policy
                    </a>
                    <span className={styles.bootomInfo}>© 2024</span>
                </div>
                <p className={styles.bootomInfo}>
                    Antix Interactive Inc. All Rights Reserved
                </p>
            </div>
        </footer>
    );
};

export default Footer;
