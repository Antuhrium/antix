import { WhyItemType } from "../../mocdata";
import styles from "./WhyItem.module.scss";

export const WhyItem = ({ boldText, text, index }: WhyItemType) => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.desc}>
        <span>{boldText}</span> {text}
      </p>
      <div className={styles.number}>0{index}</div>
    </div>
  );
};
