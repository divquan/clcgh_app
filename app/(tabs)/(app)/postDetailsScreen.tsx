import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import src from 'react-native-network-logger';
import { storage, tokenStorage } from '@/utils/storage';
import { ListPostType } from '@/utils/wpApi';

const PostDetailsScreen = () => {
  const params = useLocalSearchParams();
  //!fix type here
  //@ts-ignore
  const { title, content, imageUrl, excerpt, id, slug } =
    params as ListPostType;

  useEffect(() => {
    tokenStorage.storeRecentlyOpenedPost({
      content,
      title,
      imageUrl,
      excerpt,
      id,
      slug,
    });
  }, []);
  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={{ flex: 1, padding: 16 }}>
        <Animated.Image
          src={imageUrl}
          // sharedTransitionTag={sharedTagID}
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

export default PostDetailsScreen;

const styles = StyleSheet.create({});
