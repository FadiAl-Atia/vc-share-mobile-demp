// app/_layout.tsx
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css"; // harmless on native, used by web builds
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    FrutigerArabicLight: require("../assets/fonts/FrutigerLTArabic45Light.ttf"),
    FrutigerArabicRoman: require("../assets/fonts/FrutigerLTArabic55Roman.ttf"),
    FrutigerArabicBold: require("../assets/fonts/FrutigerLTArabic65Bold.ttf"),
  });

  if (!loaded) return null;
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="second-flow" options={{ title: "secondFlow" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
