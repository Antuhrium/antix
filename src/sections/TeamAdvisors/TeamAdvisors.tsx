import React, { useEffect, useRef, useState } from "react";
import styles from "./TeamAdvisors.module.scss";
import FadeIn from "../../components/FadeIn/FadeIn";
import { advisors, team } from "./mocdata";

interface PersonProps {
  image: string;
  name: string;
  role: string;
  linkedin?: string;
  isAdvisor?: boolean;
  subRole?: string;
  isBigIcon?: boolean;
  icon?: string;
}

const Person: React.FC<PersonProps> = ({
  image,
  name,
  role,
  isBigIcon,
  subRole,
  icon,
  isAdvisor,
  linkedin,
}) => (
  <div className={styles.person} style={{ backgroundImage: `url(${image})` }}>
    <div className={styles.inner}>
      <p className={isAdvisor ? styles.roleAdvisor : styles.role}>{role}</p>
      <div className={styles.bottom}>
        {isAdvisor ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="40"
            viewBox="0 0 41 40"
            fill="none"
          >
            <path
              d="M4.52654 0.788093L4.66503 0.686523C7.5543 4.07254 15.7854 13.2695 20.5191 13.2695C24.1756 13.2695 26.2811 7.88401 26.5677 7.10592L26.7345 7.16252C26.7345 7.16252 24.1083 14.3043 26.5765 16.186C29.0037 18.0361 39.2178 14.9126 40.092 14.6435L40.1418 14.8053C40.1418 14.8053 28.4044 18.2765 27.6586 21.5849C27.1254 23.9495 30.1822 27.2885 30.9983 28.1451L30.8754 28.2601C30.8754 28.2601 27.3232 24.3875 24.6795 25.4701C20.7481 27.0806 18.5004 38.3431 18.2283 39.9289L18.0549 39.8972C18.0549 39.8972 20.5212 27.2059 14.3437 24.3594C10.8735 22.7594 2.30809 24.8011 0.949225 25.1316L0.899414 24.9659C0.899414 24.9659 12.8796 22.0457 12.8796 15.6263C12.8796 10.4305 4.52654 0.788093 4.52654 0.788093Z"
              fill="white"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M3.11223 0.831539L3.19944 0.767578C5.0189 2.89985 10.2023 8.69142 13.1832 8.69142C15.4858 8.69142 16.8117 5.30005 16.9922 4.81006L17.0973 4.84571C17.0973 4.84571 15.4434 9.34311 16.9977 10.528C18.5263 11.6931 24.9583 9.72616 25.5089 9.55669L25.5402 9.6586C25.5402 9.6586 18.1488 11.8445 17.6792 13.9279C17.3434 15.417 19.2684 17.5196 19.7823 18.0591L19.7049 18.1315C19.7049 18.1315 17.468 15.6928 15.8031 16.3745C13.3275 17.3887 11.912 24.481 11.7406 25.4797L11.6314 25.4597C11.6314 25.4597 13.1846 17.4676 9.2944 15.6751C7.10909 14.6675 1.71521 15.9532 0.859492 16.1614L0.828125 16.057C0.828125 16.057 8.37243 14.2181 8.37243 10.1756C8.37243 6.90367 3.11223 0.831539 3.11223 0.831539Z"
              fill="white"
            />
          </svg>
        )}
        <p className={isAdvisor ? styles.nameAdvisor : styles.name}>
          {name + (subRole ? `: ${subRole}` : "")}
        </p>
        {isBigIcon ? (
          <img
            src={icon}
            onClick={() => window.open(linkedin, "_blank")}
            className={styles.bigIcon}
          />
        ) : (
          <img
            src={icon}
            onClick={() => window.open(linkedin, "_blank")}
            className={styles.icon}
          />
        )}
      </div>
    </div>
  </div>
);

const TeamAdvisors = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const itemWidth = 233;
  const gap = 16;

  const scrollCarousel = (direction: "left" | "right") => {
    if (!gridRef.current) return;

    const scrollAmount = (itemWidth + gap) * 3; // Scroll by 3 items at a time
    gridRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const checkScrollability = () => {
    if (!gridRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = gridRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => window.removeEventListener("resize", checkScrollability);
  }, []);

  return (
    <div className={styles.teamContainer}>
      <section className={styles.team} id="Team">
        <FadeIn direction="up" distance={"50%"}>
          <h2 className={styles.sectionTitle}>Team</h2>
        </FadeIn>
        <p className={styles.sectionDescription}>
          The team has a proven track record of{" "}
          <span>successfully managing business projects.</span> They bring
          significant experience and exceptional knowledge regarding digital
          humans & Web3 ventures at scale.
        </p>
        <div className={styles.gridWrapper}>
          <div
            className={styles.grid}
            ref={gridRef}
            onScroll={checkScrollability}
          >
            {team.map((member, index) => (
              <Person key={index} {...member} />
            ))}
          </div>
        </div>
        {canScrollLeft ||
          (canScrollRight && (
            <div className={styles.buttons}>
              <img
                src="/team/left.png"
                onClick={() => scrollCarousel("left")}
                alt="Scroll left"
                style={{
                  opacity: canScrollLeft ? 1 : 0.5,
                  cursor: canScrollLeft ? "pointer" : "default",
                }}
              />
              <img
                src="/team/right.png"
                onClick={() => scrollCarousel("right")}
                alt="Scroll right"
                style={{
                  opacity: canScrollRight ? 1 : 0.5,
                  cursor: canScrollRight ? "pointer" : "default",
                }}
              />
            </div>
          ))}
      </section>

      <section className={styles.advisors} id="Advisors">
        <FadeIn direction="up" distance={"50%"}>
          <h2 className={styles.sectionTitle}>Advisors</h2>
        </FadeIn>
        <p className={styles.sectionDescription}>
          The Antix advisory team brings{" "}
          <span>80 years of combined experience</span> in successful investing,
          offering deep business expertise and exceptional knowledge of the Web3
          sector.
        </p>
        <div className={styles.advisor}>
          {advisors.map((advisor, index) => (
            <Person key={index} {...advisor} isAdvisor />
          ))}
        </div>
      </section>
    </div>
  );
};

export default TeamAdvisors;
