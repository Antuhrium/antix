import { useCallback, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { burgerLinks, links } from "./mocdata";
import { BurgerButton } from "./ui/BurgerButton/BurgerButton";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isBlur, setIsBlur] = useState(false);

    const getLinks = useCallback(() => {
        return window.innerWidth < 992 ? burgerLinks : links;
    }, []);

    const [link, setLink] = useState(getLinks);

    useEffect(() => {
        const handleResize = () => {
            const updatedLinks = getLinks();
            setLink((prevLink) => {
                if (prevLink !== updatedLinks) {
                    return updatedLinks;
                }
                return prevLink;
            });
        };

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [getLinks]);

    useEffect(() => {}, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsBlur(true);
            } else {
                setIsBlur(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleClick = (id: string) => {
        const el = document.getElementById(id)
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "center" });
            setIsOpen(false)
        }
    }

    return (
        <header className={`${styles.wrapper} ${isBlur ? styles.blur : ""}`}>
            <div
                className={`${styles.container} ${
                    isOpen ? styles.isOpen : null
                }`}
            >
                <div className={styles.burgerBtn}>
                    <BurgerButton
                        isOpen={isOpen}
                        onClick={() => setIsOpen((oldState) => !oldState)}
                    />
                </div>
                <div className={styles.logo}>
                    <img src="/logo-full.svg" alt="Logo" />
                </div>
                {/* <div className={styles.socialsContainer}>
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
        </div> */}
                <div className={styles.linksContainer}>
                    {link.map((link) => (
                        <button
                            className={styles.link}
                            key={link.title}
                            onClick={() => handleClick(link.href)}
                        >
                            {link.title}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
