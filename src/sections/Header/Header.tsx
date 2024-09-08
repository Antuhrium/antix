import styles from "./Header.module.scss";

import XIcon from "../../assets/svg/social-x.svg";
import TgIcon from "../../assets/svg/social-telegram.svg";
import DiscordIcon from "../../assets/svg/social-discord.svg";

const links = [
    {
        title: "About Us",
        href: "/",
    },
    {
        title: "Blog",
        href: "/",
    },
    {
        title: "Contacts",
        href: "/",
    },
];

const socials = [
    {
        icon: XIcon,
        label: 43,
        name: "X",
        link: "https://x.com/antix_in",
    },
    {
        icon: TgIcon,
        label: 75,
        name: "Telegram",
        link: "https://t.me/antix_in",
    },
    {
        icon: DiscordIcon,
        label: 12,
        name: "Discord",
        link: "https://discord.com/invite/bKcMXChRRT",
    },
];

const Header = () => {
    return (
        <header className={styles.container}>
            <img src="/logo-full.svg" alt="Logo" className={styles.logo} />
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
                    <a
                        className={styles.link}
                        key={link.title}
                        href={link.href}
                    >
                        {link.title}
                    </a>
                ))}
            </div>
        </header>
    );
};

export default Header;
