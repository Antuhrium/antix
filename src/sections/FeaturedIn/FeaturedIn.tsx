import React from "react";
import styles from "./FeaturedIn.module.scss";

import Logo1 from "../../assets/svg/featuredIn/1.svg";
import Logo2 from "../../assets/svg/featuredIn/2.svg";
import Logo3 from "../../assets/svg/featuredIn/3.svg";
import Logo4 from "../../assets/svg/featuredIn/4.svg";
import Logo5 from "../../assets/svg/featuredIn/5.svg";
import Logo6 from "../../assets/svg/featuredIn/6.svg";
import Logo7 from "../../assets/svg/featuredIn/7.svg";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7];

const FeaturedIn: React.FC = () => {
    return (
        <section className={styles.container}>
            <h4 className={styles.title}>Featured in</h4>
            <div className={styles.logosWrapper}>
                {logos.map((logo) => (
                    <div key={logo} className={styles.logo}>
                        <img src={logo} alt="Featured in" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedIn;
