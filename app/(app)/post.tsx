import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';

const post = () => {
  const params = useLocalSearchParams();
  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, paddingHorizontal: 16, paddingTop: 16 }}>
        <Animated.View
          style={{
            height: 300,
            width: '100%',
            backgroundColor: 'gray',
            borderRadius: 30,
          }}></Animated.View>
      </ThemedView>
    </ScrollView>
  );
};

export default post;

const styles = StyleSheet.create({});
