import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import src from 'react-native-network-logger';
import Entypo from '@expo/vector-icons/Entypo';
import { storage, tokenStorage } from '@/utils/storage';
import { ListPostType } from '@/utils/wpApi';
import RBSheet from 'react-native-raw-bottom-sheet';

const PostDetailsScreen = () => {
  const params = useLocalSearchParams();
  const refRBSheet = useRef(null);

  //!fix type here
  //@ts-ignore
  const { title, content, imageUrl, excerpt, id, slug } =
    params as ListPostType;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name='dots-three-vertical'
          size={24}
          color='black'
          onPress={() => {
            refRBSheet?.current.open();
            console.log('someti');
          }}
        />
      ),
    });
  }, [navigation]);
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
