import styles from "./PlatformToReplace.module.scss";

const PlatformToReplace = () => {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <span>Reshaping a $300 billion industry.</span>
                <h4>Platform for digital humans to replace:</h4>
            </div>
            <div className={styles.right}>
                <span>influencers</span>
                <span className={styles.rightActive}>actors</span>
                <span>TV hosts</span>
            </div>
        </section>
    );
};

export default PlatformToReplace;
