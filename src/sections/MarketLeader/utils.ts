export const getLogoCount = () => {
  console.log("window.innerWidth", window.innerWidth);
  if (window.innerWidth <= 758) return 6;
  return 10;
};
