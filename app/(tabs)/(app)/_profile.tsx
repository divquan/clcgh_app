import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Constants from 'expo-constants';
import { ThemedText } from '@/components/ThemedText';
import Button from '@/components/Button';
const Profile = () => {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 32,
        paddingHorizontal: 16,
      }}>
      <ThemedView>
        <ThemedView>
          <MaterialIcons name='update' size={24} color='black' />
          <ThemedText>Updates</ThemedText>
        </ThemedView>
        <Button>
          <Text>Check for updates</Text>
        </Button>
      </ThemedView>
    </ThemedView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
