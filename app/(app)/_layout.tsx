import { Redirect, Stack } from 'expo-router';

export default function RootLayout() {
  return <Redirect href='/(auth)' />;

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      {/* <Stack.Screen name='+not-found' /> */}
    </Stack>
  );
}
