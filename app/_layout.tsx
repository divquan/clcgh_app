import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { ToastProvider } from 'react-native-toast-notifications';

import { useColorScheme } from '@/hooks/useColorScheme';
import { startNetworkLogging } from 'react-native-network-logger';
startNetworkLogging();

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ToastProvider>
        <Stack initialRouteName='(auth)'>
          <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          <Stack.Screen name='(app)' options={{ headerTitle: 'Home' }} />
          <Stack.Screen name='+not-found' />
        </Stack>
      </ToastProvider>
    </ThemeProvider>
  );
}
