import { WhyItemType } from "../../mocdata";
import styles from "./WhyItem.module.scss";

export const WhyItem = ({ boldText, text, index }: WhyItemType) => {
  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>{boldText}</h4>
      <p className={styles.desc}>
        {text}
      </p>
      <div className={styles.number}>0{index}</div>
    </div>
  );
};
