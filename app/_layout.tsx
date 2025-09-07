import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import 'react-native-reanimated';
import { useColorScheme } from 'react-native';
import { NativeWindStyleSheet } from 'nativewind';

// Enable nativewind style resolution
NativeWindStyleSheet.setOutput({
  default: 'native',
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="(home)" />
        <Stack.Screen name="index" />
        <Stack.Screen name="join" />
        <Stack.Screen name="signin" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
