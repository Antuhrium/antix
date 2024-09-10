import styles from "./Quote.module.scss";

const Quote = () => {
    return (
        <div className={styles.container}>
            <div className="">
                <p>
                    Thats not an issue that everyone will own their digital twin
                    in upcoming years. The question is how we will manage their
                    rights?
                </p>
                <span>[с] Alan Kepler</span>
            </div>
        </div>
    );
};

export default Quote;
