import React from "react";
import styles from "./App.module.scss";

import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import FeaturedIn from "./sections/FeaturedIn/FeaturedIn";
import PlatformToReplace from "./sections/PlatformToReplace/PlatformToReplace";
import MarketLeader from "./sections/MarketLeader/MarketLeader";
import Why from "./sections/Why/Why";
import Quote from "./sections/Quote/Quote";
import Statistics from "./sections/Statistics/Statistics";
import Markets from "./sections/Markets/Markets";
import { DesignOwnProfit } from "./sections/DesignOwnProfit/DesignOwnProfit";
import Amazon from "./sections/Amazon/Amazon";
// import Revolutionizing from "./sections/Revolutionizing/Revolutionizing";
import DigitalMap from "./sections/DigitalMap/DigitalMap";
import TokenInfo from "./sections/TokenInfo/TokenInfo";
import UserFlow from "./sections/UserFlow/UserFlow";
import TokenomicsSection from "./sections/TokenomicsSection/TokenomicsSection";
import TeamAdvisors from "./sections/TeamAdvisors/TeamAdvisors";
import RoadMap from "./sections/RoadMap/Roadmap";
import JoinUs from "./sections/JoinUs/JoinUs";
import FAQ from "./sections/Faq/Faq";
import Footer from "./sections/Footer/Footer";

import TeamAdvisorsMobile from "./sections/TeamAdvisors/mobile/TeamAdvisors";
import TokenomicsSectionMobile from "./sections/TokenomicsSection/mobile/TokenomicsSection";
import TokenInfoMobile from "./sections/TokenInfo/mobile/TokenInfo";
import RoadMapMobile from "./sections/RoadMap/mobile/Roadmap";
import Top10 from "./sections/Top10/Top10";
import Top10Mobile from "./sections/Top10/mobile/Top10";
import FooterMobile from "./sections/Footer/mobile/Footer";

import { useState, useEffect } from "react";

// Update the useResponsiveComponent hook
const useResponsiveComponent = <Props,>(
  mobileBreakpoint: number,
  DesktopComponent: React.ComponentType<Props>,
  MobileComponent: React.ComponentType<Props>
): React.ComponentType<Props> => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < mobileBreakpoint
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  return isMobile ? MobileComponent : DesktopComponent;
};

function App() {
  const TeamAdvisorsResponsive = useResponsiveComponent(
    768,
    TeamAdvisors,
    TeamAdvisorsMobile
  );
  const TokenomicsSectionResponsive = useResponsiveComponent(
    768,
    TokenomicsSection,
    TokenomicsSectionMobile
  );
  const TokenInfoResponsive = useResponsiveComponent(
    768,
    TokenInfo,
    TokenInfoMobile
  );
  const RoadMapResponsive = useResponsiveComponent(768, RoadMap, RoadMapMobile);
  const Top10Responsive = useResponsiveComponent(768, Top10, Top10Mobile);
  const FooterResponsive = useResponsiveComponent(768, Footer, FooterMobile);

  return (
    <main className={styles.container}>
      <Header />
      <HeroSection />
      <FeaturedIn />
      <PlatformToReplace />
      <MarketLeader />
      <Why />
      <Quote />
      <Statistics />
      <Markets />
      <DesignOwnProfit />
      <Amazon />
      {/* <Revolutionizing /> */}
      <DigitalMap />
      <Top10Responsive />
      <TokenInfoResponsive />
      <UserFlow />
      <TokenomicsSectionResponsive />
      <TeamAdvisorsResponsive />
      <RoadMapResponsive />
      <JoinUs />
      <FAQ />
      <FooterResponsive />
    </main>
  );
}

export default App;
