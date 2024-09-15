import styles from "./Statistics.module.scss";

import img1 from "../../assets/images/statistics/1.png";
import img2 from "../../assets/images/statistics/2.png";
import img3 from "../../assets/images/statistics/3.png";
import img4 from "../../assets/images/statistics/4.png";
import img5 from "../../assets/images/statistics/5.png";
import img6 from "../../assets/images/statistics/6.png";
import img7 from "../../assets/images/statistics/7.png";
import img8 from "../../assets/images/statistics/8.png";

import Percent20 from "../../assets/svg/statistics/20.svg";
import Percent50 from "../../assets/svg/statistics/50.svg";
import Percent90 from "../../assets/svg/statistics/90.svg";
import StickIcon from "../../assets/svg/statistics/stick.svg";
import DollarIcon from "../../assets/svg/statistics/dollar.svg";
import ArrovButtom from "../../assets/svg/statistics/arrovButtom.svg";
import Icon15m from "../../assets/svg/statistics/15m.svg";
import { useEffect, useState } from "react";

const EmptySection = ({ width }: { width: number }) => {
  return <div className={styles.empty} style={{ width: width }}></div>;
};

const Statistics = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    console.log("window.innerWidth---", window.innerWidth);
    if (window.innerWidth <= 768) {
      setHidden(true);
    }
  }, []);

  return (
    <>
      <section
        className={`${styles.container} ${hidden ? styles.hidden : null}`}
      >
        <EmptySection width={233} />
        <img
          src={img1}
          alt=""
          style={{ width: 233, height: 233, borderRadius: 10 }}
        />
        <div className={styles.item}>
          <img src={Percent50} alt="50%" />
          <p>
            <span>Adoption in Gaming and VR/AR Industries:</span> 40% of new
            games and 50% of VR content to feature digital humans by 2025.
          </p>
        </div>
        <img
          src={img2}
          alt=""
          style={{ width: 506, height: 233, borderRadius: 10 }}
        />
        <div className={styles.item}>
          <p style={{ maxWidth: 174 }}>
            <span>Yearly market growth:</span> $10B in 2023, projected to $30B
            by 2030, 20% CAGR.
          </p>
          <img src={Percent20} alt="20%" />
        </div>
        <EmptySection width={233} />
        <img
          src={img3}
          alt=""
          style={{ width: 233, height: 233, borderRadius: 10 }}
        />
        <div className={styles.item} style={{ width: 506 }}>
          <span className={styles.itemAbs}>100M+</span>
          <p style={{ marginTop: 140 }}>
            <span>Antix digital humans:</span> Seen by 100M+ viewers globally
            across films, marketing, and games.
          </p>
        </div>
        <img
          src={img4}
          alt=""
          style={{ width: 233, height: 233, borderRadius: 10 }}
        />
        <div className={styles.item} style={{ width: 344 }}>
          <img src={Icon15m} alt="" />
          <p>
            <span>Virtual influencers market growth:</span> $15B market by 2025,
            triple the engagement of human.
          </p>
        </div>
        <div className={styles.item} style={{ width: 137 }}>
          <img
            src={DollarIcon}
            alt=""
            className={styles.itemAbs}
            style={{ top: 0 }}
          />
        </div>
        <EmptySection width={492} />
        <div className={styles.minContent}>
          <div className={styles.item}>
            <img src={Percent90} alt="90%" />
            <p>
              <span>Production cost and time reduction:</span> Antix cuts
              digital human creation time from weeks to hours, costs down by
              90%.
            </p>
          </div>
          <EmptySection width={507} />
          <img
            src={img5}
            alt=""
            style={{ width: 233, height: 233, borderRadius: 10 }}
          />
          <img
            src={img6}
            alt=""
            style={{ width: 233, height: 233, borderRadius: 10 }}
          />
          <img
            src={img7}
            alt=""
            style={{ width: 233, height: 233, borderRadius: 10 }}
          />
          <EmptySection width={233} />
          <img
            src={img8}
            alt=""
            style={{ width: 233, height: 233, borderRadius: 10 }}
          />
        </div>
        <div className={styles.maxItem} style={{ width: 233 }}>
          <div className={styles.maxItemTop}>
            <span>$100K</span>
            <img src={StickIcon} alt="" />
            <span>$500K</span>
          </div>
          <p>
            <span>Cost of Pre-Antix digital characters:</span> Ultra-realistic
            digital characters cost $100K-$500K, weeks of production time.
          </p>
        </div>
      </section>
      <div className={styles.action}>
        {hidden ? (
          <button
            className={styles.btn}
            onClick={() => setHidden((oldState) => !oldState)}
          >
            Read more{" "}
            <span>
              <img src={ArrovButtom} alt="" />
            </span>
          </button>
        ) : (
          <button
            className={styles.btn}
            onClick={() => setHidden((oldState) => !oldState)}
          >
            Hide Details{" "}
            <span>
              <img
                src={ArrovButtom}
                alt=""
                style={{ transform: "rotate(180deg)" }}
              />
            </span>
          </button>
        )}
      </div>
    </>
  );
};

export default Statistics;
