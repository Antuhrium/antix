import { lazy, Suspense, useEffect, useState } from "react";
import styles from "./App.module.scss";

const Header = lazy(() => import("./sections/Header/Header"));
const HeroSection = lazy(() => import("./sections/HeroSection/HeroSection"));
const FeaturedIn = lazy(() => import("./sections/FeaturedIn/FeaturedIn"));
const MarketLeader = lazy(() => import("./sections/MarketLeader/MarketLeader"));
const PlatformToReplace = lazy(() => import("./sections/PlatformToReplace/PlatformToReplace"));
const Why = lazy(() => import("./sections/Why/Why"));
const Quote = lazy(() => import("./sections/Quote/Quote"));
const Statistics = lazy(() => import("./sections/Statistics/Statistics"));

const useResponsiveComponent = <Props,>(
  mobileBreakpoint: number,
  DesktopComponent: React.LazyExoticComponent<React.ComponentType<Props>>,
  MobileComponent: React.LazyExoticComponent<React.ComponentType<Props>>
) => {
  const [Component, setComponent] = useState<
    React.LazyExoticComponent<React.ComponentType<Props>>
  >(() => DesktopComponent);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= mobileBreakpoint) {
        setComponent(MobileComponent);
      } else {
        setComponent(DesktopComponent);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint, DesktopComponent, MobileComponent]);

  return Component; // Return the component itself, not JSX
};

// Dynamically imported components
const Markets = lazy(() => import("./sections/Markets/Markets"));
const Amazon = lazy(() => import("./sections/Amazon/Amazon"));
const Revolutionizing = lazy(
  () => import("./sections/Revolutionizing/Revolutionizing")
);
const DigitalMap = lazy(() => import("./sections/DigitalMap/DigitalMap"));
const TokenInfo = lazy(() => import("./sections/TokenInfo/TokenInfo"));
const UserFlow = lazy(() => import("./sections/UserFlow/UserFlow"));
const TokenomicsSection = lazy(
  () => import("./sections/TokenomicsSection/TokenomicsSection")
);
const TeamAdvisors = lazy(() => import("./sections/TeamAdvisors/TeamAdvisors"));
const RoadMap = lazy(() => import("./sections/RoadMap/Roadmap"));
const JoinUs = lazy(() => import("./sections/JoinUs/JoinUs"));
const FAQ = lazy(() => import("./sections/Faq/Faq"));
const Footer = lazy(() => import("./sections/Footer/Footer"));
// const PreDepositStage = lazy(() => import("./sections/PreDepositStage/PreDepositStage"));

// Mobile versions (example for TokenInfo)
// const TokenInfoMobile = lazy(() => import("./sections/TokenInfo/TokenInfoMobile"));
const TeamAdvisorsMobile = lazy(
  () => import("./sections/TeamAdvisors/mobile/TeamAdvisors")
);
const TokenomicsSectionMobile = lazy(
  () => import("./sections/TokenomicsSection/mobile/TokenomicsSection")
);
const TokenInfoMobile = lazy(
  () => import("./sections/TokenInfo/mobile/TokenInfo")
);
const RoadMapMobile = lazy(() => import("./sections/RoadMap/mobile/Roadmap"));

const Top10 = lazy(() => import('./sections/Top10/Top10'));
const Top10Mobile = lazy(() => import('./sections/Top10/mobile/Top10'));
const FooterMobile = lazy(() => import('./sections/Footer/mobile/Footer'));

function App() {
  const TeamAdvisorsResponsive = useResponsiveComponent(768, TeamAdvisors, TeamAdvisorsMobile);
  const TokenomicsSectionResponsive = useResponsiveComponent(768, TokenomicsSection, TokenomicsSectionMobile);
  const TokenInfoResponsive = useResponsiveComponent(768, TokenInfo, TokenInfoMobile);
  const RoadMapResponsive = useResponsiveComponent(768, RoadMap, RoadMapMobile);
  const Top10Responsive = useResponsiveComponent(768, Top10, Top10Mobile);
  const FooterResponsive = useResponsiveComponent(768, Footer, FooterMobile);

  return (
    <main className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <HeroSection />
        <FeaturedIn />
        <PlatformToReplace />
        <MarketLeader />
        <Why />
        <Quote />
        <Statistics />
        <Markets />
        <Amazon />
        <Revolutionizing />
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
      </Suspense>
    </main>
  );
}

export default App;
