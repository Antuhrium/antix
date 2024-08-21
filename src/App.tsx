import styles from "./App.module.scss";
import Header from "./sections/Header/Header";

function App() {
    return (
        <main className={styles.container}>
            <Header />
        </main>
    );
}

export default App;
