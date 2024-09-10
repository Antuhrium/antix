import styles from "./MarketLeader.module.scss";

import logo1 from "../../assets/svg/marketLeader/1.svg";
import logo2 from "../../assets/svg/marketLeader/2.svg";
import logo3 from "../../assets/svg/marketLeader/3.svg";
import logo4 from "../../assets/svg/marketLeader/4.svg";
import logo5 from "../../assets/svg/marketLeader/5.svg";
import logo6 from "../../assets/svg/marketLeader/6.svg";
import logo7 from "../../assets/svg/marketLeader/7.svg";
import logo8 from "../../assets/svg/marketLeader/8.svg";
import logo9 from "../../assets/svg/marketLeader/9.svg";
import logo10 from "../../assets/svg/marketLeader/10.svg";

const logos = [
    "",
    "",
    "",
    logo1,
    logo2,
    "",
    "",
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
];

const MarketLeader = () => {
    return (
        <section className={styles.container}>
            <h4 className={styles.title}>From market leader <br /> serving</h4>
            <div className={styles.wrapper}>
                {logos.map((item, index) => (
                    <div key={`${item}-${index}`} className={styles.item}>
                        {item && <img src={item} alt="Logo" />}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MarketLeader;
