import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
  useTheme,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import {} from "react-native";

export default function RootLayout() {
  const { dark } = useTheme();

  return (
    <ThemeProvider value={dark ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </ThemeProvider>
  );
}
