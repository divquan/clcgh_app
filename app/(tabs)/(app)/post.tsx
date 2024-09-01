import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import src from 'react-native-network-logger';

const post = () => {
  const params = useLocalSearchParams();
  const { title, content, imageUrl } = params;
  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, padding: 16 }}>
        <Animated.Image
          src={imageUrl}
          style={{
            height: 300,
            width: '100%',
            backgroundColor: 'gray',
            borderRadius: 30,
          }}></Animated.Image>
        <ThemedView style={{ marginTop: 24, gap: 24 }}>
          <ThemedText type='title'>{title}</ThemedText>
          <ThemedText selectable>{content}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

export default post;

const styles = StyleSheet.create({});
