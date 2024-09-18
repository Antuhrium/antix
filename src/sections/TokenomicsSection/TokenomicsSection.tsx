import { memo } from 'react';
import styles from "./TokenomicsSection.module.scss";
import PieChartComponent from "../../components/PieChart/PieChart";

import RightBg from "../../assets/svg/tokenomics-right-bg.svg";
import LeftBg from "../../assets/svg/tokenomics-left-bg.svg";

const TokenomicsSection = memo(() => {
    return (
        <section className={styles.tokenomicsWrapper} id='Tokenomics'>
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
                loading="lazy"
            />
            <img
                src={LeftBg}
                alt=""
                className={styles.leftBg}
                draggable={false}
                loading="lazy"
            />
        </section>
    );
});

TokenomicsSection.displayName = 'TokenomicsSection';

export default TokenomicsSection;
