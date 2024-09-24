import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import src from 'react-native-network-logger';
import { storage, tokenStorage } from '@/utils/storage';
import { getPostById, ListPostType } from '@/utils/wpApi';
import { useToast } from 'react-native-toast-notifications';

const PostDetailsScreenById = () => {
  const params = useLocalSearchParams();
  const [postDetails, setPostDetails] = useState<null | ListPostType>(null);
  const [loading, setLoading] = useState(false);
  const { title, id } = params as ListPostType;
  const toast = useToast();
  useEffect(() => {
    setLoading(true);
    getPostById(id)
      .then((res) => {
        setPostDetails(res);
      })
      .catch((e) => {
        toast.show('Error fetching post: ' + e.message, {
          type: 'danger',
        });
      })
      .finally(() => {
        setLoading(false);
      });
    // tokenStorage.storeRecentlyOpenedPost({
    //   content,
    //   title,
    //   imageUrl,
    //   excerpt,
    //   id,
    //   slug,
    // });
  }, []);
  // if (loading) {
  //   return
  // }
  return (
    <ScrollView style={{ flex: 1 }}>
      {loading && (
        <ActivityIndicator style={{ top: 4, left: 4, position: 'absolute' }} />
      )}
      <ThemedView style={{ flex: 1, padding: 16 }}>
        <Animated.Image
          src={postDetails?.imageUrl}
          // sharedTransitionTag={sharedTagID}
          style={{
            height: 300,
            width: '100%',
            backgroundColor: 'gray',
            borderRadius: 30,
          }}></Animated.Image>
        <ThemedView style={{ marginTop: 24, gap: 24 }}>
          <ThemedText type='title'>{title}</ThemedText>
          <ThemedText selectable>{postDetails?.content}</ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
};

export default PostDetailsScreenById;

const styles = StyleSheet.create({});
