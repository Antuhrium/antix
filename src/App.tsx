import styles from "./App.module.scss";

import Footer from "./sections/Footer/Footer";
import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import TokenomicsSection from "./sections/TokenomicsSection/TokenomicsSection";
import RoadMap from "./sections/RoadMap/Roadmap";
import UserFlow from "./sections/UserFlow/UserFlow";
import FAQ from "./sections/Faq/Faq";
import JoinUs from "./sections/JoinUs/JoinUs";
import TeamAdvisors from "./sections/TeamAdvisors/TeamAdvisors";
import FeaturedIn from "./sections/FeaturedIn/FeaturedIn";
import TokenInfo from "./sections/TokenInfo/TokenInfo";
import MarketLeader from "./sections/MarketLeader/MarketLeader";
import PlatformToReplace from "./sections/PlatformToReplace/PlatformToReplace";
import PreDepositStage from "./sections/PreDepositStage/PreDepositStage";
import Why from "./sections/Why/Why";
import Quote from "./sections/Quote/Quote";
import Statistics from "./sections/Statistics/Statistics";

function App() {
    return (
        <main className={styles.container}>
            <PreDepositStage />
            <Header />
            <HeroSection />
            <FeaturedIn />
            <PlatformToReplace />
            <MarketLeader />
            <Why />
            <Quote />
            <Statistics />
            <UserFlow />
            <TokenInfo />
            <TokenomicsSection />
            <RoadMap />
            <TeamAdvisors />
            <JoinUs />
            <FAQ />
            <Footer />
        </main>
    );
}

export default App;
