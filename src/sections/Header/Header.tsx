import styles from "./Header.module.scss";

const links = [
    {
        title: "Buy Token",
        href: "/",
    },
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

const Header = () => {
    const handleClick = () => {
        console.log("Connect wallet clicked");
    };

    return (
        <header className={styles.container}>
            <img src="/logo-full.svg" alt="Logo" className={styles.logo} />
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
            <button className={styles.button} onClick={handleClick}>
                Connect Wallet
            </button>
        </header>
    );
};

export default Header;
