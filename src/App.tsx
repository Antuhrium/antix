import styles from "./App.module.scss";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import TokenomicsSection from "./sections/TokenomicsSection/TokenomicsSection";

function App() {
    return (
        <main className={styles.container}>
            <Header />
            <HeroSection />
            <TokenomicsSection />
            <Footer />
        </main>
    );
}

export default App;
