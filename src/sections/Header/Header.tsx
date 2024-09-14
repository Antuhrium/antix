import { useState } from "react";
import styles from "./Header.module.scss";
import { links, socials } from "./mocdata";
import { BurgerButton } from "./ui/BurgerButton/BurgerButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={styles.wrapper}>
      <div className={`${styles.container} ${isOpen ? styles.isOpen : null}`}>
        <div className={styles.burgerBtn}>
          <BurgerButton
            isOpen={isOpen}
            onClick={() => setIsOpen((oldState) => !oldState)}
          />
        </div>
        <div className={styles.logo}>
          <img src="/logo-full.svg" alt="Logo" />
        </div>
        <div className={styles.socialsContainer}>
          {socials.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className={styles.socialItem}
              target="_blank"
            >
              <div className={styles.socialIcon}>
                <img src={item.icon} alt={item.name} />
              </div>
              <span className={styles.socialName}>{item.label}K</span>
            </a>
          ))}
        </div>
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <a className={styles.link} key={link.title} href={link.href}>
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
