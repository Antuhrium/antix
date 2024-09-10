import styles from "./PreDepositStage.module.scss";

const PreDepositStage = () => {
    return (
        <div className={styles.container}>
            <a href="#" className={styles.link}>
                claim your spot — Token sale <span>whitelisting in 5d 12h</span>
                <svg
                    width="27"
                    height="12"
                    viewBox="0 0 27 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.94043 5.99988H26.0597M26.0597 5.99988L21.362 1.30225M26.0597 5.99988L21.362 10.6975"
                        stroke="#032A28"
                        stroke-width="1.34218"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </a>
        </div>
    );
};

export default PreDepositStage;
