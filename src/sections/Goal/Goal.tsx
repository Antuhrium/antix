import styles from "./Goal.module.scss"
import goalSvg from "./Goal.svg"

const Goal = () => {
    return (<div className={styles.goal}>
        <img src={goalSvg} alt="Goal" width="3045" height="471" />
    </div>)
}

export default Goal