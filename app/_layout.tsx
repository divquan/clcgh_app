import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { Stack } from 'expo-router';
import 'react-native-reanimated';
import { ToastProvider } from 'react-native-toast-notifications';

import { useColorScheme } from '@/hooks/useColorScheme';
import { startNetworkLogging } from 'react-native-network-logger';
startNetworkLogging();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ToastProvider placement='top' offsetTop={30} style={{ width: '90%' }}>
        <Stack initialRouteName='(tabs)'>
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          <Stack.Screen name='+not-found' />
        </Stack>
      </ToastProvider>
    </ThemeProvider>
  );
}
