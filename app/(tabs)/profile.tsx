import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import Constants from 'expo-constants';
import { ThemedText } from '@/components/ThemedText';
const profile = () => {
  return (
    <ThemedView style={{ flex: 1 }}>
      <ThemedView>
        <ThemedText>Runtime Version:{Constants.expoRuntimeVersion}</ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default profile;

const styles = StyleSheet.create({});
