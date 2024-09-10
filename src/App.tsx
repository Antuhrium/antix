import styles from "./App.module.scss";
import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import TokenomicsSection from "./sections/TokenomicsSection/TokenomicsSection";
import RoadMap from "./sections/RoadMap/Roadmap";
import UserFlow from "./sections/UserFlow/UserFlow";
import Goal from "./sections/Goal/Goal";
import FAQ from "./sections/Faq/Faq";
import JoinUs from "./sections/JoinUs/JoinUs";
import TeamAdvisors from "./sections/TeamAdvisors/TeamAdvisors";

function App() {
    return (
        <main className={styles.container}>
            <Header />
            <HeroSection />
            <TokenomicsSection />
            <Goal />
            <RoadMap />
            <UserFlow />
            <TeamAdvisors />
            <JoinUs />
            <FAQ />
            <Footer />
        </main>
    );
}

export default App;
