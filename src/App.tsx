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
import FeaturedIn from "./sections/FeaturedIn/FeaturedIn";
import VideoSection from "./sections/VideoSection/VideoSection";

function App() {
    return (
        <main className={styles.container}>
            <Header />
            <HeroSection />
            <FeaturedIn />
            <VideoSection />
            <Goal />
            <TokenomicsSection />
            <RoadMap />
            <UserFlow />
            <JoinUs />
            <FAQ />
            <Footer />
        </main>
    );
}

export default App;
