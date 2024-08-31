import {
  Dimensions,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedColors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';

const index = () => {
  const fetchPosts = () => {};
  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => {}} />
      }>
      <ThemedView style={{ paddingHorizontal: 16, paddingTop: 16 }}>
        <CategoriesList />
        <FeaturedPosts />

        <Posts />
      </ThemedView>
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({});

const Posts = () => {
  return (
    <ThemedView
      style={{
        marginTop: 32,
        flex: 1,
      }}>
      <ThemedText style={{}} type='defaultSemiBold'>
        Posts
      </ThemedText>
      <ThemedView style={{ flex: 1 }}>
        {Array.from({ length: 10 }).map((_, index) => (
          <Post key={index} index={index} />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

const { width } = Dimensions.get('window');
const FeaturedPosts = () => {
  return (
    <ThemedView
      style={{
        marginTop: 32,
      }}>
      <ThemedText>Featured Posts</ThemedText>
      <ScrollView
        horizontal
        pagingEnabled
        style={{
          height: 210,
        }}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}>
        {Array.from({ length: 10 }).map((_, index) => (
          <FeaturedPost key={index} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};
const FeaturedPost = () => {
  return (
    <ThemedView
      style={{
        flex: 1,
        width: width - 32,
        paddingHorizontal: 8,
      }}>
      <ThemedView
        style={{
          backgroundColor: 'aquamarine',
          borderRadius: 25,
          flex: 1,
          // borderWidth: 3,
          width: width - 32 - 8 - 8,
          // marginHorizon\tal: 8,
        }}></ThemedView>
    </ThemedView>
  );
};
const CategoriesList = () => {
  return (
    <ThemedView style={{ marginTop: 12 }}>
      <ThemedText style={{ fontSize: 24, fontWeight: 'bold' }}>
        Categories
      </ThemedText>
      <ThemedView style={{ flexDirection: 'row' }}>
        <ScrollView
          style={{
            flexDirection: 'row',
            gap: 20,
            paddingVertical: 6,
            // borderWidth: 2,
            // borderColor: ThemedColors().tint,
            borderRadius: 8,
            paddingHorizontal: 12,
          }}
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal>
          {Array.from({ length: 10 }).map((_, index) => (
            <Category key={index} />
          ))}
        </ScrollView>
      </ThemedView>
    </ThemedView>
  );
};
const Category = () => {
  return (
    <Pressable style={{ marginRight: 12 }}>
      <ThemedView
        style={{
          borderWidth: 1,
          borderColor: ThemedColors().tint,
          paddingHorizontal: 12,
          paddingVertical: 16,
          borderRadius: 8,
        }}>
        <ThemedText>Category one</ThemedText>
      </ThemedView>
    </Pressable>
  );
};

const Post = ({ index }: { index: number }) => {
  const router = useRouter();

  return (
    <Pressable
      style={{
        height: 130,
        width: '100%',
        flexDirection: 'row',
        padding: 10,
        gap: 13,
        alignItems: 'center',
        // justifyContent: 'space-between',
      }}
      onPress={() => {
        //@ts-ignore
        router.push({ pathname: '/(app)/post', params: { id: index } });
        console.log('post-image' + index);
      }}>
      <Animated.View
        // sharedTransitionTag={'post-image' + index}
        style={{
          aspectRatio: 1,
          backgroundColor: 'gray',
          height: 110,
          width: 110,
          borderRadius: 20,
          left: 0,
        }}></Animated.View>
      <ThemedView>
        <ThemedText type='defaultSemiBold'>Post title</ThemedText>
        <ThemedText>Post description</ThemedText>
        <ThemedText>Date</ThemedText>
      </ThemedView>
    </Pressable>
  );
};
