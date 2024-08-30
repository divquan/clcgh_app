import {
  Dimensions,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
//   import { OtpInput } from 'react-native-otp-entry';
import Button from '@/components/Button';
import Constants from 'expo-constants';
import { OtpInput } from 'react-native-otp-entry';
import { Colors, colorss } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Logo from '@/components/Logo';

const { height } = Dimensions.get('window');
const VerifyOTP = () => {
  const [otp, setOtp] = useState('');
  const mode = useColorScheme();
  const [loading, setLoading] = useState(false);
  console.log(mode);

  const verifyOtp = () => {
    try {
      setLoading(true);
    } catch (e) {
    } finally {
      setLoading(false);
    }
  };
  return (
    <Pressable
      onPress={Keyboard.dismiss}
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: Constants.statusBarHeight + 12,
        paddingHorizontal: 34,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          width: '100%',
          position: 'static',
        }}>
        <Logo />
      </View>

      <View
        style={{
          width: '100%',
          flex: 1,
          // borderWidth: 2,
        }}>
        <View
          style={{
            top: '20%',
            gap: 32,
          }}>
          <View>
            <ThemedText type='title' style={{}}>
              Verify OTP{' '}
            </ThemedText>
            <ThemedText>Enter the OTP send to "your@email.com"</ThemedText>
          </View>
          <View
            style={{
              width: '100%',
              // borderWidth: 2,
            }}>
            <OtpInput
              numberOfDigits={6}
              onTextChange={(text) => console.log(text)}
              onFilled={(text) => console.log(text)}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              focusColor={colorss.backgroundElements}
              theme={{
                containerStyle: {
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
                pinCodeTextStyle: {
                  color:
                    mode === 'light' ? Colors.light.text : Colors.dark.text,
                },

                pinCodeContainerStyle: {
                  borderColor:
                    mode === 'light' ? Colors.light.icon : Colors.dark.icon,
                },
              }}
            />
            {/* <ThemedText style={{ marginLeft: 10, marginTop: 3 }}>
              You will recieve an One-Time password{' '}
            </ThemedText> */}
          </View>
        </View>
      </View>

      <View
        style={{
          position: 'absolute',
          top: height - Constants.statusBarHeight - 12,
          width: '100%',
          // paddingHorizontal: 24,
        }}>
        <Button onPress={verifyOtp} loading={loading}>
          <Text style={{ color: 'white' }}>Send OTP</Text>
        </Button>
      </View>
    </Pressable>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({});
