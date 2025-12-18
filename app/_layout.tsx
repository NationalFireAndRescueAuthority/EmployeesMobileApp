
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { I18nManager } from "react-native";
import { ThemeProvider } from "../providers/ThemeProvider";

// Force RTL layout for the entire app
try {
  I18nManager.forceRTL(true);
  I18nManager.allowRTL(true);
} catch (e) {
  console.log("Failed to set RTL:", e);
}

export default function RootLayout() {
  return (
    <ThemeProvider>
        <SafeAreaView style={{ flex: 1 }}>
            <Stack screenOptions={{ headerShown: false }} />
        </SafeAreaView>
    </ThemeProvider>

  );
}
