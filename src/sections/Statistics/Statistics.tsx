import { useCallback } from "react";
import { Mobile } from "./ui/Mobile/Mobile";
import { Desktop } from "./ui/Desktop/Desktop";

const Statistics = () => {
  const isMobile = useCallback(() => window.innerWidth <= 992, []);
  if (isMobile()) return <Mobile />;
  return <Desktop />;
};

export default Statistics;
