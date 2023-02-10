export const isSmallScreen = () => {
  if (!window) return false;
  const { innerWidth: screenWidth } = window;
  return screenWidth < 576;
};
