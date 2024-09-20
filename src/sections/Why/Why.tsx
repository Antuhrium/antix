import FadeIn from "../../components/FadeIn/FadeIn";
import { whyData } from "./mocdata";
import { WhyItem } from "./ui/WhyItem/WhyItem";
import styles from "./Why.module.scss";

const Why = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        {whyData.map((data, index) => (
          <div className={styles.item}>
            <FadeIn delay={0.2 * index} direction={index === 1 ? "left" : "right"}>
              <WhyItem
                key={data.index}
                boldText={data.boldText}
                text={data.text}
                index={data.index}
              />
            </FadeIn>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Why;
