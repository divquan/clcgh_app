import { colorss } from '@/constants/Colors';
import React from 'react';
import {
  ActivityIndicator,
  ButtonProps,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';

//add the rest of pressable props and the type
const Button = ({
  children,
  style,
  onPress,
  loading,
  ...props
}: {
  children?: React.ReactNode;
  loading?: boolean;
  style?:
    | StyleProp<ViewStyle>
    | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>);
} & PressableProps) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        style,
        opacity: loading || pressed ? 0.85 : 1,
      })}
      onPress={onPress}
      {...props}
      disabled={loading}>
      {children}
      {loading && <ActivityIndicator color='white' size='small' />}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorss.backgroundElements,
    // padding: 10,
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
