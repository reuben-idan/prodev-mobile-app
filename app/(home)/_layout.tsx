import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      <Stack.Screen name="saved" options={{ title: 'Saved Properties' }} />
      <Stack.Screen name="search" options={{ title: 'Search Properties' }} />
      <Stack.Screen name="inbox" options={{ title: 'Inbox' }} />
    </Stack>
  );
}
