import { useState } from "react";
import styles from "./HeroSection.module.scss";

import Xlogo from "../../assets/svg/social-x.svg"
import Tglogo from "../../assets/svg/social-telegram.svg"
import Discordlogo from "../../assets/svg/social-discord.svg"

import { LoaderSvg } from "./ui/LoaderSvg/LoaderSvg";
import { HeroTimer } from "./ui/HeroTimer/HeroTimer";
import FadeIn from "../../components/FadeIn/FadeIn";
// import PreDepositStage from "../PreDepositStage/PreDepositStage";

const HeroSection = () => {
  const [percents] = useState(30);

  // const goToRoadmap = useCallback(() => {
  //   document.querySelector("#roadmap")?.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // }, []);

  // const svgPath = useMemo(() => (
  //   <path
  //     d="M62.7071 8.70711C63.0976 8.31658 63.0976 7.68342 62.7071 7.29289L56.3431 0.928932C55.9526 0.538408 55.3195 0.538408 54.9289 0.928932C54.5384 1.31946 54.5384 1.95262 54.9289 2.34315L60.5858 8L54.9289 13.6569C54.5384 14.0474 54.5384 14.6805 54.9289 15.0711C55.3195 15.4616 55.9526 15.4616 56.3431 15.0711L62.7071 8.70711ZM0 9H62V7H0V9Z"
  //     fill="#AFAFAF"
  //   />
  // ), []);

  return (
    <section className={styles.wrapper}>
      <div className={styles.videoWrapper}>
        <video autoPlay muted loop className={styles.backgroundVideo}>
          <source src="/header-video-bg.webm" type="video/webm" />
        </video>
      </div>
      <div className={styles.container}>
        <div className={styles.leftColumn}>
          <FadeIn direction="right" distance="50%">
            <h1 className={styles.title}>
              Ready to be
              <br />
              <span>Replaced by AI?</span>
            </h1>
            <span className={styles.subtitle}>
              The new era of AI-powered digital humans is here.
            </span>
            <p className={styles.description}>
              Step in <b>$300 billion industry</b> with next-gen
              <br /> digital twins for film, content, and beyond
            </p>
          </FadeIn>
          <FadeIn direction="right" distance="50%" delay={0.4}>
            <div className={styles.actions}>
              {/* <button className={styles.button}>How it works?</button>
              <a className={styles.linkButton} onClick={goToRoadmap}>
                <span>Roadmap</span>
                <svg
                  width="63"
                  height="16"
                  viewBox="0 0 63 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {svgPath}
                </svg>
              </a> */}
              <a className={styles.socialLink} href="https://x.com/antix_in" target="_blank">
                <div className={styles.socialIcon}><img src={Xlogo} alt="X" /></div>
                <span>40.9К</span>
              </a>
              <a className={styles.socialLink} href="https://t.me/antix_in" target="_blank">
                <div className={styles.socialIcon}><img src={Tglogo} alt="Telegram" /></div>
                <span>65.8К</span>
              </a>
              <a className={styles.socialLink} href="https://discord.com/invite/bKcMXChRRT" target="_blank">
                <div className={styles.socialIcon}><img src={Discordlogo} alt="Discord" /></div>
                <span>2К</span>
              </a>

            </div>
          </FadeIn>
        </div>
        <div className={styles.rightColumn}>
          <FadeIn direction="left" distance="50%" delay={0.8}>
            <div className={styles.timerWrapper}>
              <div className={styles.timerWrapperTitle}>
                <img src="/logo-small.svg" alt="Logo" />
                ANTIX Presale
              </div>
              <div className={styles.timer}>
                <span className={styles.title}>Coming Soon</span>
                <div className={styles.loader}>
                  <LoaderSvg percent={percents} />
                </div>
                <HeroTimer targetDate={new Date("2024-12-31T23:59:59")} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
