import styles from "./TokenomicsSection.module.scss";
import PieChartComponent from "../../../components/PieChart/mobile/PieChart";

const TokenomicsSection = () => {
    return (
        <section className={styles.tokenomicsWrapper} id="Tokenomics">
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
        </section>
    );
};

export default TokenomicsSection;
