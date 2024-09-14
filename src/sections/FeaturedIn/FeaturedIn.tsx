import React from "react";
import styles from "./FeaturedIn.module.scss";
import { logos } from "./mocdata";
import { RunLine } from "../../components/RunLineProps/RunLine";

const FeaturedIn: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h4 className={styles.title}>Featured in</h4>
      <div className={styles.container}>
        <RunLine>
          {logos.map((url) => (
            <div key={url} className={styles.item}>
              <img src={url} alt="Featured in" height={40} />
            </div>
          ))}
        </RunLine>
      </div>
    </section>
  );
};

export default FeaturedIn;
