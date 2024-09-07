import styles from "./TokenomicsSection.module.scss";
import PieChartComponent from "../../components/PieChart/PieChart";

import RightBg from "../../assets/svg/tokenomics-right-bg.svg";
import LeftBg from "../../assets/svg/tokenomics-left-bg.svg";

const TokenomicsSection = () => {
    return (
        <section className={styles.tokenomicsWrapper}>
            <div className={styles.container}>
                <h3 className={styles.title}>Tokenomics</h3>

                <div className={styles.chart}>
                    <div className={styles.innerChartText}>
                        <span>1B</span>
                        Tokens
                    </div>
                    <PieChartComponent />
                </div>
            </div>
            <img
                src={RightBg}
                alt=""
                className={styles.rightBg}
                draggable={false}
            />
            <img
                src={LeftBg}
                alt=""
                className={styles.leftBg}
                draggable={false}
            />
        </section>
    );
};

export default TokenomicsSection;
