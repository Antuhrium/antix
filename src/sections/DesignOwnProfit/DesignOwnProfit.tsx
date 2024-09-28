import styles from "./DesignOwnProfit.module.scss";
import { AABT } from "./ui/AABT/AABT";
import { DOP } from "./ui/DOP/DOP";

export const DesignOwnProfit = () => {
  return (
    <section className={styles.wrapper}>
      <h3 className={styles.title}>Design. Own. Profit.</h3>
      <p className={styles.description}>
        Antix lets you <b>create, develop, and profit</b>
        <br /> from hyper-realistic digital humans
      </p>
      <DOP />
      <h4 className={styles.smallTitle}>Advanced AI & Blockchain Technology</h4>
      <AABT />
    </section>
  );
};
