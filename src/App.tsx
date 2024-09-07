import styles from "./App.module.scss";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import TokenomicsSection from "./sections/TokenomicsSection/TokenomicsSection";
import RoadMap from "./sections/RoadMap/Roadmap";
import UserFlow from "./sections/UserFlow/UserFlow";

function App() {
    return (
        <main className={styles.container}>
            <Header />
            <HeroSection />
            <TokenomicsSection />
            <RoadMap />
            <UserFlow />
            <Footer />
        </main>
    );
}

export default App;
