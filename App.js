import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native";
import SnapTube from "./src";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Noto-Regular": require("./src/assets/fonts/NotoSans-Regular.ttf"),
    "Noto-Medium": require("./src/assets/fonts/NotoSans-Medium.ttf"),
    "Noto-Thin": require("./src/assets/fonts/NotoSans-Thin.ttf"),
    "Noto-Bold": require("./src/assets/fonts/NotoSans-Bold.ttf"),
    "Noto-Italic": require("./src/assets/fonts/NotoSans-Italic.ttf"),
    "Noto-Light": require("./src/assets/fonts/NotoSans-Light.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SnapTube />
    </SafeAreaView>
  );
}
