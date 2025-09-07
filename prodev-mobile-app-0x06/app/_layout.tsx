import { Stack } from "expo-router";
import '../styles/global.css';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(home)" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="join" 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="signin" 
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}