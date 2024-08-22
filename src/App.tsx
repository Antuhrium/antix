import styles from "./App.module.scss";
import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";

function App() {
    return (
        <main className={styles.container}>
            <Header />
            <HeroSection />
        </main>
    );
}

export default App;
