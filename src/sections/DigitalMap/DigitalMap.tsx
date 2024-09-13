import styles from "./DigitalMap.module.scss";

const DigitalMap = () => {
    return (
        <section className={styles.container}>
            <div className="content">
                <p>
                    Antix makes <span>Hollywood-quality</span> digital humans
                    accessible to all without the need for big teams, long
                    timelines, or massive costs.
                </p>
                <h4>Digital humans everywhere</h4>
            </div>
        </section>
    );
};

export default DigitalMap;
