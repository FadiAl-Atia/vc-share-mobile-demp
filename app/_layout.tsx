// app/_layout.tsx
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "@/global.css"; // harmless on native, used by web builds
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack>
        {/* Tabs are a child route group */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* Non-tab screens */}
        <Stack.Screen name="second-flow" options={{ title: "secondFlow" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
