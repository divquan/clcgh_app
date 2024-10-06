/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import { useColorScheme } from '@/hooks/useColorScheme';
import { useMemo } from 'react';

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};
// export const Colors = {
//   light: {
//     text: '#11181C',           // Main text color
//     background: '#fff',         // Background color
//     tint: tintColorLight,       // Main tint color
//     icon: '#687076',            // Icon default color
//     tabIconDefault: '#687076',  // Inactive tab icon
//     tabIconSelected: tintColorLight,  // Active tab icon
//     border: '#E5E8EB',          // Border color for inputs, cards, etc.
//     buttonBackground: '#007AFF',// Primary button background
//     buttonText: '#FFFFFF',      // Button text color
//     disabledButtonBackground: '#D1D1D6',  // Disabled button background
//     disabledButtonText: '#8E8E93',  // Disabled button text color
//     success: '#34C759',         // Success color (e.g., for notifications)
//     error: '#FF3B30',           // Error color (e.g., for alerts)
//     warning: '#FF9500',         // Warning color
//     info: '#007AFF',            // Info color (e.g., for alerts)
//     inputBackground: '#F2F2F7', // Input field background
//     inputText: '#1C1C1E',       // Input text color
//     placeholderText: '#8E8E93', // Placeholder text
//     cardBackground: '#FFFFFF',  // Card background color
//     gradientStart: '#FF5E3A',   // Gradient start color
//     gradientEnd: '#FF2D55',     // Gradient end color
//   },
//   dark: {
//     text: '#ECEDEE',            // Main text color
//     background: '#151718',      // Background color
//     tint: tintColorDark,        // Main tint color
//     icon: '#9BA1A6',            // Icon default color
//     tabIconDefault: '#9BA1A6',  // Inactive tab icon
//     tabIconSelected: tintColorDark,  // Active tab icon
//     border: '#3A3B3C',          // Border color for inputs, cards, etc.
//     buttonBackground: '#0A84FF',// Primary button background
//     buttonText: '#FFFFFF',      // Button text color
//     disabledButtonBackground: '#2C2C2E',  // Disabled button background
//     disabledButtonText: '#6C6C6D',  // Disabled button text color
//     success: '#30D158',         // Success color (e.g., for notifications)
//     error: '#FF453A',           // Error color (e.g., for alerts)
//     warning: '#FF9F0A',         // Warning color
//     info: '#0A84FF',            // Info color (e.g., for alerts)
//     inputBackground: '#2C2C2E', // Input field background
//     inputText: '#F2F2F7',       // Input text color
//     placeholderText: '#8E8E93', // Placeholder text
//     cardBackground: '#1C1C1E',  // Card background color
//     gradientStart: '#5E5CE6',   // Gradient start color
//     gradientEnd: '#AF52DE',     // Gradient end color
//   },
// };

export const colorss = {
  businessName: '#010C80',
  slogan: '#77D4FC',
  icon: '#77D4FC',
  background: '#FFFFFF',
  backgroundElements: '#010C80',
  foregroundElements: '#FFFFFF',
};

export const ThemedColors = () => {
  const colorScheme = useColorScheme();

  const color = useMemo(() => {
    return Colors[colorScheme || 'light'];
  }, [colorScheme]);
  return color;
};
