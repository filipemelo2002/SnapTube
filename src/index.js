import ThemeContextProvider from "./contexts/ThemeContext";
import Routes from "./routes";

export default function SnapTube() {
  return (
    <ThemeContextProvider>
      <Routes />
    </ThemeContextProvider>
  );
}
