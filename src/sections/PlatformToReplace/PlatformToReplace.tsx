import styles from "./PlatformToReplace.module.scss";

const PlatformToReplace = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.description}>
          <span>Reshaping a $300 billion industry.</span>
          <h4>Platform for digital humans to replace</h4>
        </div>
        <div className={styles.carousel}>
          <span>influencers</span>
          <span className={styles.active}>actors</span>
          <span>TV hosts</span>
        </div>
      </div>
    </section>
  );
};

export default PlatformToReplace;
