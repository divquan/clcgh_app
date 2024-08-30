import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
  Keyboard,
} from 'react-native';
import React from 'react';
import Button from '@/components/Button';
import Constants from 'expo-constants';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors, colorss } from '@/constants/Colors';
import Logo from '@/components/Logo';
import { useToast } from 'react-native-toast-notifications';
import axios from 'axios';

const { height } = Dimensions.get('window');

const Login = () => {
  const [email, setEmail] = React.useState('');
  const colortheme = useColorScheme();
  const router = useRouter();

  const toast = useToast();
  const [loading, setLoading] = React.useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        'http://192.168.137.1:8000/auth/email/',
        {
          email: 'johndoe@gmail.com',
        }
      );
      console.log(response.data); // Handle successful response

      toast.show('OTP sent to your phone number', { type: 'success' });
      router.navigate('/(auth)/otpScreen');
    } catch (error: any) {
      console.error('error', error.message);
      toast.show(error.message, { type: 'fail' });
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
              Login
            </ThemedText>
            <ThemedText>Enter your email</ThemedText>
          </View>
          <View
            style={{
              width: '100%',
              // borderWidth: 2,
            }}>
            <ThemedText style={{ fontWeight: '800', marginLeft: 10 }}>
              Email
            </ThemedText>
            <TextInput
              value={email}
              onPress={() => {
                setLoading(false);
              }}
              onChangeText={(text) => setEmail(text)}
              keyboardType='email-address'
              style={{
                borderBottomWidth: 1,
                borderRadius: 12,
                borderColor: colorss.backgroundElements,
                color: colortheme === 'dark' ? 'white' : 'black',
                height: 52,
                fontSize: 16,
                paddingHorizontal: 12,
              }}
              cursorColor={colorss.backgroundElements}
            />
            <ThemedText style={{ marginLeft: 10, marginTop: 3 }}>
              You will recieve an One-Time password{' '}
            </ThemedText>
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
        <Button onPress={handleLogin} loading={loading}>
          <Text style={styles.text}>Send OTP</Text>
        </Button>
      </View>
    </Pressable>
  );
};

export default Login;
const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
