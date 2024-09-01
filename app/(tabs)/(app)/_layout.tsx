import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name='homeScreen' options={{ headerTitle: 'Home' }} />
      <Stack.Screen
        name='postDetailsScreen'
        options={{ headerTitle: 'Post' }}
      />
      {/* <Stack.Screen name='+not-found' /> */}
    </Stack>
  );
}
