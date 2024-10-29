import {
  Button,
  Pressable,
  ScrollView,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import Animated from 'react-native-reanimated';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import src from 'react-native-network-logger';
import Entypo from '@expo/vector-icons/Entypo';
import { storage, tokenStorage } from '@/utils/storage';
import { ListPostType } from '@/utils/wpApi';
// @ts-ignore
import BottomSheet, { BottomSheetMethods } from '@devvie/bottom-sheet';
import { ThemedColors } from '@/constants/Colors';
import Fontisto from '@expo/vector-icons/Fontisto';
import { EvilIcons, Feather } from '@expo/vector-icons';
import { bookmarkService } from '@/utils/bookmark';

const PostDetailsScreen = () => {
  const params = useLocalSearchParams();
  const sheetRef = useRef<BottomSheetMethods>(null);
  const colors = ThemedColors();
  //!fix type here
  //@ts-ignore
  const { title, content, imageUrl, excerpt, id, slug } =
    params as ListPostType;
  const navigation = useNavigation();
  const [isBookmarked, setIsBookmarked] = useState(
    bookmarkService.isBookmarked(id)
  );
  const onShare = async () => {
    try {
      const result = await Share.share({
        url: `https://www.clcgh.org/${slug}`,
        message: excerpt.slice(0, 20) + '...',
        title: title,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {}
  };
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Entypo
          name='dots-three-vertical'
          size={24}
          color={colors.icon}
          onPress={() => {
            sheetRef.current?.open();
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

  useEffect(() => {
    if (isBookmarked) {
      console.log('adding bookmark');
      bookmarkService.addBookmark({
        content,
        title,
        imageUrl,
        excerpt,
        id,
        slug,
      });
    } else {
      console.log('removing bookmark');
      bookmarkService.removeBookmark(id);
    }
  }, [isBookmarked]);
  return (
    <>
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
        <BottomSheet ref={sheetRef}>
          <Text>
            The smart 😎, tiny 📦, and flexible 🎗 bottom sheet your app craves
            🚀
          </Text>
        </BottomSheet>
      </ScrollView>
      <BottomSheet
        ref={sheetRef}
        style={{ backgroundColor: colors.background }}
        height={160}>
        <ThemedText style={{ marginLeft: 14, marginBottom: 14 }}>
          Options
        </ThemedText>
        <ThemedView
          style={{
            paddingHorizontal: 8,
            flexDirection: 'row',
            gap: 25,
          }}>
          <MenuItem
            active
            icon={
              <Fontisto
                name={isBookmarked ? 'bookmark-alt' : 'bookmark'}
                color={isBookmarked ? colors.buttonBackground : colors.icon}
                size={24}
              />
            }
            title='Bookmark'
            onPress={() => {
              setIsBookmarked((prev) => !prev);
            }}
          />
          <MenuItem
            active
            icon={<Feather name='share' size={24} color={colors.icon} />}
            title='Share'
            onPress={onShare}
          />
        </ThemedView>
        <Text></Text>
      </BottomSheet>
    </>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({});

const MenuItem = ({
  icon,
  title,
  onPress,
  active,
}: {
  title: string;
  onPress: () => void;
  icon: React.ReactNode;
  active: boolean;
}) => {
  const colors = ThemedColors();
  return (
    <Pressable
      style={({ pressed }) => ({ flex: 1, opacity: pressed ? 0.8 : 1 })}
      onPress={onPress}>
      <ThemedView
        style={{
          // flex: 1,
          paddingVertical: 12,
          paddingHorizontal: '5%',
          justifyContent: 'space-between',
          height: 'auto',
          borderWidth: 1,
          borderRadius: 12,
          borderColor: active ? colors.buttonBackground : colors.border,
        }}>
        <ThemedView style={{ flexDirection: 'row', gap: 15 }}>
          {icon}
          <ThemedText style={{}}>{title}</ThemedText>
        </ThemedView>
      </ThemedView>
    </Pressable>
  );
};
