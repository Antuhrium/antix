import styles from "./HeroSection.module.scss";

import HeroTimer from "../../components/HeroTimer/HeroTimer";

import HeroImg from "../../assets/images/hero-img.png";
import socialX from "../../assets/svg/social-x.svg";
import socialTelegram from "../../assets/svg/social-telegram.svg";
import socialDiscord from "../../assets/svg/social-discord.svg";
import RefferalIcon from "../../assets/svg/hero-refferal-icon.svg";

import BNB from "../../assets/svg/binance-icon.svg";
import ETH from "../../assets/svg/etherium-icon.svg";
import USDT from "../../assets/svg/tether-icon.svg";
import CARD from "../../assets/svg/card-icon.svg";

const socials = [
    {
        name: "@acronix",
        amount: "44К",
        img: socialX,
    },
    {
        name: "@acronix",
        amount: "12К",
        img: socialTelegram,
    },
    {
        name: "@acronix",
        amount: "12К",
        img: socialDiscord,
    },
];

const payments = [
    {
        name: "BNB",
        img: BNB,
    },
    {
        name: "ETH",
        img: ETH,
    },
    {
        name: "USDT",
        img: USDT,
    },
    {
        name: "CARD",
        img: CARD,
    },
    {
        name: "USDC",
        img: CARD,
    },
];

const HeroSection = () => {
    const handleClick = () => {
        console.log("Buy Antix Token clicked");
    };
    return (
        <section className={styles.container}>
            <img src={HeroImg} alt="Hero" className={styles.bgImg} />
            <div className={styles.leftWrapper}>
                <h1 className={styles.leftTitle}>
                    Antix <br /> Digital Twins
                </h1>
                <h3 className={styles.leftSubtitle}>
                    Where Digital Worlds Come Alive
                </h3>
                <p className={styles.leftText}>
                    VAgen revolutionizes digital interaction with AI-driven
                    avatars. Experience unparalleled customization and
                    engagement for users, brands, and creators — <br /> reshape
                    the future with us.
                </p>
                <div className={styles.socials}>
                    {socials.map((social, index) => (
                        <div key={index} className={styles.socialItem}>
                            <div className={styles.socialIcon}>
                                <img src={social.img} alt={social.name} />
                            </div>
                            <div className={styles.socialInfo}>
                                <span>{social.name}</span>
                                <span className={styles.socialsAmount}>
                                    {social.amount}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.rightWrapper}>
                <div className={styles.rightTitle}>
                    <img src="/logo-small.svg" alt="Logo" />
                    Buy Antix Token
                </div>
                <div className={styles.rightItem}>
                    <div className={styles.timerContainer}>
                        <span className={styles.timerTitle}>
                            The stage ends after:
                        </span>
                        <HeroTimer
                            targetDate={new Date("2024-12-31T23:59:59")}
                        />
                    </div>
                    <button
                        className={styles.rightButton}
                        onClick={handleClick}
                    >
                        Buy $Antix
                    </button>
                    <div className={styles.rightRefferal}>
                        <img src={RefferalIcon} alt="Refferal" />
                        <a href="#" className={styles.refferalLink}>
                            Get referral links
                        </a>
                    </div>
                    <div className={styles.rightPayments}>
                        <span className={styles.paymentsTitle}>
                            We accept payment in this:
                        </span>
                        <div className={styles.payments}>
                            {payments.map((pay) => (
                                <div key={pay.name} className={styles.payment}>
                                    <img
                                        src={pay.img}
                                        alt={pay.name}
                                        className={styles.paymentIcon}
                                    />
                                    <span>{pay.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={styles.rightItemBottom}>
                    <span className={styles.raisedTitle}>USD raised</span>
                    <div className={styles.raisedAmount}>
                        $200,1003 <span>/ $500,104</span>
                    </div>
                    <span className={styles.raisedAll}>
                        $500,104 of $5,000,610
                    </span>
                    <div className={styles.presale}>
                        <span className={styles.presaleTitle}>Presale</span>
                        <div className={styles.progressBar}>
                            <span
                                className={styles.progressValue}
                                style={{ width: `${35}%` }}
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.rightInfo}>
                    <a href="#" className={styles.rightInfoLink}>
                        [ ? ] About the stages
                    </a>
                    <a href="#" className={styles.rightInfoLink}>
                        [ ? ] Vesting & lockup conditions
                    </a>
                    <a href="#" className={styles.rightInfoLink}>
                        [ ? ] About disconts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
