import { whyData } from "./mocdata";
import { WhyItem } from "./ui/WhyItem/WhyItem";
import styles from "./Why.module.scss";

const Why = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {whyData.map((data) => (
          <div className={styles.item}>
            <WhyItem
              key={data.index}
              boldText={data.boldText}
              text={data.text}
              index={data.index}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
