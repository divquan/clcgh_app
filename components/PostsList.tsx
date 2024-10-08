import { useRouter } from 'expo-router';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { Pressable } from 'react-native';
import Animated from 'react-native-reanimated';
import { ListPostType } from '@/utils/wpApi';

export const Posts = ({ posts }: { posts: ListPostType[] }) => {
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
        {posts.map((item, index) => (
          <Post key={index} postDetails={item} />
        ))}
      </ThemedView>
    </ThemedView>
  );
};

export const Post = ({ postDetails }: { postDetails: ListPostType }) => {
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
      }}
      onPress={() => {
        router.push({
          pathname: '/(app)/postDetailsScreen',
          params: { ...postDetails },
        });
      }}>
      <Animated.Image
        src={postDetails.imageUrl}
        style={{
          aspectRatio: 1,
          backgroundColor: 'gray',
          height: 110,
          width: 110,
          borderRadius: 20,
          left: 0,
        }}></Animated.Image>
      <ThemedView style={{ overflow: 'hidden', flex: 1 }}>
        <ThemedText
          type='defaultSemiBold'
          lineBreakMode='tail'
          numberOfLines={1}>
          {postDetails.title}
        </ThemedText>
        <ThemedText lineBreakMode='head' numberOfLines={2}>
          {postDetails.excerpt}
        </ThemedText>
        <ThemedText>Date</ThemedText>
      </ThemedView>
    </Pressable>
  );
};
