import { lazy, Suspense, useEffect, useState } from 'react';
import styles from "./App.module.scss";
import Header from "./sections/Header/Header";
import HeroSection from "./sections/HeroSection/HeroSection";
import FeaturedIn from "./sections/FeaturedIn/FeaturedIn";
import MarketLeader from "./sections/MarketLeader/MarketLeader";
import PlatformToReplace from "./sections/PlatformToReplace/PlatformToReplace";
import Why from "./sections/Why/Why";
import Quote from "./sections/Quote/Quote";
import Statistics from "./sections/Statistics/Statistics";

// Custom hook for responsive imports
const useResponsiveComponent = (mobileBreakpoint: number, DesktopComponent: React.LazyExoticComponent<() => JSX.Element>, MobileComponent: React.LazyExoticComponent<() => JSX.Element>) => {
  const [Component, setComponent] = useState<React.ComponentType>(() => DesktopComponent);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobileBreakpoint) {
        setComponent(MobileComponent);
      } else {
        setComponent(DesktopComponent);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileBreakpoint, DesktopComponent, MobileComponent]);

  return Component; // Return the component itself, not JSX
};

// Dynamically imported components
const Top10 = lazy(() => import("./sections/Top10/Top10"));
const Markets = lazy(() => import("./sections/Markets/Markets"));
const Amazon = lazy(() => import("./sections/Amazon/Amazon"));
const Revolutionizing = lazy(() => import("./sections/Revolutionizing/Revolutionizing"));
const DigitalMap = lazy(() => import("./sections/DigitalMap/DigitalMap"));
const TokenInfo = lazy(() => import("./sections/TokenInfo/TokenInfo"));
const UserFlow = lazy(() => import("./sections/UserFlow/UserFlow"));
const TokenomicsSection = lazy(() => import("./sections/TokenomicsSection/TokenomicsSection"));
const TeamAdvisors = lazy(() => import("./sections/TeamAdvisors/TeamAdvisors"));
const RoadMap = lazy(() => import("./sections/RoadMap/Roadmap"));
const JoinUs = lazy(() => import("./sections/JoinUs/JoinUs"));
const FAQ = lazy(() => import("./sections/Faq/Faq"));
const Footer = lazy(() => import("./sections/Footer/Footer"));
const PreDepositStage = lazy(() => import("./sections/PreDepositStage/PreDepositStage"));

// Mobile versions (example for TokenInfo)
// const TokenInfoMobile = lazy(() => import("./sections/TokenInfo/TokenInfoMobile"));
const TeamAdvisorsMobile = lazy(() => import("./sections/TeamAdvisors/mobile/TeamAdvisors"));

function App() {
  // const TokenInfoResponsive = useResponsiveComponent(768, TokenInfo, TokenInfoMobile);
  const TeamAdvisorsResponsive = useResponsiveComponent(768, TeamAdvisors, TeamAdvisorsMobile);

  return (
    <main className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <PreDepositStage />
      </Suspense>
      <Header />
      <HeroSection />
      <FeaturedIn />
      <PlatformToReplace />
      <MarketLeader />
      <Why />
      <Quote />
      <Statistics />
      <Suspense fallback={<div>Loading...</div>}>
        <Top10 />
        <Markets />
        <Amazon />
        <Revolutionizing />
        <DigitalMap />
        {/* <TokenInfoResponsive /> */}
        <TokenInfo />
        <UserFlow />
        <TokenomicsSection />
        <TeamAdvisorsResponsive />
        <RoadMap />
        <JoinUs />
        <FAQ />
        <Footer />
      </Suspense>
    </main>
  );
}

export default App;
