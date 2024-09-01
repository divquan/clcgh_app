import {
  Dimensions,
  Image,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedColors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { router, useRouter } from 'expo-router';
import Animated from 'react-native-reanimated';
import { Posts } from '@/components/PostsList';
import { listPosts, ListPostType } from '@/utils/wpApi';
import { useToast } from 'react-native-toast-notifications';

const HomeScreen = () => {
  const [fetchingPosts, setFetchingPosts] = React.useState(false);
  const [posts, setPosts] = React.useState<ListPostType[]>([]);

  const toast = useToast();
  const fetchPosts = async () => {
    try {
      setFetchingPosts(true);
      const posts = await listPosts();
      setPosts(posts);
    } catch (error: any) {
      toast.show('Error fetching posts: ' + error.message, { type: 'danger' });
    } finally {
      setFetchingPosts(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  useEffect(() => {
    // toast.show("Fetching posts..", {type:"loading"})
  }, []);
  return (
    <ScrollView
      style={{ flex: 1 }}
      // contentContainerStyle={{ flex: 1 }}
      refreshControl={
        <RefreshControl refreshing={fetchingPosts} onRefresh={fetchPosts} />
      }>
      <ThemedView
        style={{
          paddingHorizontal: 16,
          paddingTop: 16,
          flex: 1,
        }}>
        {/* <CategoriesList /> */}
        <FeaturedPosts posts={posts.slice(0, 3)} />

        <Posts posts={posts} />
      </ThemedView>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

const { width } = Dimensions.get('window');
const FeaturedPosts = ({ posts }: { posts: ListPostType[] }) => {
  return (
    <ThemedView
      style={{
        marginTop: 32,
      }}>
      <ThemedText type='defaultSemiBold'>Featured Posts</ThemedText>
      <ScrollView
        horizontal
        pagingEnabled
        style={{
          height: 210,
        }}
        contentContainerStyle={{}}
        showsHorizontalScrollIndicator={false}>
        {posts.map((item, index) => (
          <FeaturedPost key={index} postDetails={item} />
        ))}
      </ScrollView>
    </ThemedView>
  );
};
const FeaturedPost = ({ postDetails }: { postDetails: ListPostType }) => {
  const router = useRouter();
  return (
    <Pressable
      onPress={() => {
        router.push({
          pathname: '/(tabs)/(app)/PostDetailsScreen',
          params: { ...postDetails },
        });
      }}>
      <ThemedView
        style={{
          flex: 1,
          width: width - 32,
          paddingHorizontal: 8,
        }}>
        <Image
          src={postDetails.imageUrl}
          style={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: 25,
            flex: 1,
            width: width - 32 - 8 - 8,
          }}></Image>
      </ThemedView>
    </Pressable>
  );
};
const CategoriesList = () => {
  return (
    <ThemedView style={{ marginTop: 12 }}>
      <ThemedText style={{}} type='defaultSemiBold'>
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
