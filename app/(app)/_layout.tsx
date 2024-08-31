import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerTitle: 'Home' }} />
      <Stack.Screen name='post' options={{ headerTitle: 'Post' }} />
      {/* <Stack.Screen name='+not-found' /> */}
    </Stack>
  );
}
