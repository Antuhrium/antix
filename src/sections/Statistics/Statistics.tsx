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
import Icon15m from "../../assets/svg/statistics/15m.svg";
import ArrovButtom from "../../assets/svg/statistics/arrovButtom.svg";
import { useRef, useState } from "react";
import { FadeInNew } from "../../components/FadeInNew/FadeInNew";
import { ImgBox } from "./ui/ImgBox/ImgBox";

const Statistics = () => {
  // Состояние для управления высотой элемента
  const [isCollapsed, setIsCollapsed] = useState(true);
  // ---
  const collapsedRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Функция для переключения состояния высоты
  const toggleHeight = () => {
    console.log(
      "collapsedRef.current && contentRef.current",
      collapsedRef.current && contentRef.current
    );
    if (collapsedRef.current && contentRef.current) {
      if (isCollapsed) {
        collapsedRef.current.style.height = `${contentRef.current.offsetHeight}px`;
      } else {
        collapsedRef.current.style.height = "0px";
      }
    }
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <>
      <section className={styles.wrapperNew}>
        <div className={styles.vitrin}>
          <FadeInNew direction="left" distance={"50%"}>
            <div>
              <ImgBox src={img2} className={styles.imgBox} />
            </div>
          </FadeInNew>
          <FadeInNew direction="right" distance={"50%"}>
            <div>
              <div>
                <span>100M+</span>
                <p>
                  <b>Antix digital humans:</b> Seen by 100M+ viewers globally
                  across films, marketing, and games.
                </p>
              </div>
            </div>
          </FadeInNew>
        </div>
        <div
          ref={collapsedRef}
          className={`${styles.hiddenWrapper} ${
            isCollapsed ? styles.collapsed : ""
          }`}
        >
          <div ref={contentRef} className={styles.content}>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <ImgBox src={img2} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <div>
                  <span>100M+</span>
                  <p>
                    <b>Antix digital humans:</b> Seen by 100M+ viewers globally
                    across films, marketing, and games.
                  </p>
                </div>
              </div>
            </FadeInNew>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <ImgBox src={img5} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <ImgBox src={img8} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <div>
                  <div>
                    <span>$100K</span>
                    <img src={StickIcon} alt="" />
                    <span>$500K</span>
                  </div>
                  <p>
                    <b>Cost of Pre-Antix digital characters:</b> Ultra-realistic
                    digital characters cost $100K-$500K, weeks of production
                    time.
                  </p>
                </div>
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <div>
                  <img src={Percent50} alt="50%" />
                  <p>
                    <b>Adoption in Gaming and VR/AR Industries:</b> 40% of new
                    games and 50% of VR content to feature digital humans by
                    2025.
                  </p>
                </div>
              </div>
            </FadeInNew>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <ImgBox src={img1} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <ImgBox src={img3} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <div>
                  <p>
                    <b>Yearly market growth:</b> $10B in 2023, projected to $30B
                    by 2030, 20% CAGR.
                  </p>
                  <img src={Percent20} alt="20%" />
                </div>
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <div>
                  <img src={Icon15m} alt="" />
                  <p>
                    <b>Virtual influencers market growth:</b> $15B market by
                    2025, triple the engagement of human.
                  </p>
                </div>
                <div>
                  <ImgBox
                    src={DollarIcon}
                    className={styles.imgBox}
                    style={{ backgroundSize: "contain" }}
                  />
                </div>
              </div>
            </FadeInNew>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <div>
                  <img src={Percent90} alt="90%" />
                  <p>
                    <b>Production cost and time reduction:</b> Antix cuts
                    digital human creation time from weeks to hours, costs down
                    by 90%.
                  </p>
                </div>
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <ImgBox src={img4} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="right" distance={"50%"}>
              <div>
                <ImgBox src={img6} className={styles.imgBox} />
              </div>
            </FadeInNew>
            <FadeInNew direction="left" distance={"50%"}>
              <div>
                <ImgBox src={img7} className={styles.imgBox} />
              </div>
            </FadeInNew>
          </div>
        </div>
        <div className={styles.action}>
          <button className={styles.btn} onClick={toggleHeight}>
            {isCollapsed ? (
              <>
                {"Read more "}
                <span>
                  <img src={ArrovButtom} alt="" />
                </span>
              </>
            ) : (
              <>
                {"Hide Details "}
                <span>
                  <img
                    src={ArrovButtom}
                    alt=""
                    style={{ transform: "rotate(180deg)" }}
                  />
                </span>
              </>
            )}
          </button>
        </div>
      </section>
    </>
  );
};

export default Statistics;
