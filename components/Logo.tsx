import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/clc-logo-blue.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 35,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
