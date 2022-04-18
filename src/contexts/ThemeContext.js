import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

const uiTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#D64045",
    accent: "#1d3354",
  },
  roundness: 2,
};

const ThemeContextProvider = ({ children }) => {
  return <PaperProvider theme={uiTheme}>{children}</PaperProvider>;
};

export default ThemeContextProvider;
