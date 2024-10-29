import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { ListPostType } from '@/utils/wpApi';
import { bookmarkService } from '@/utils/bookmark';
import { ThemedColors } from '@/constants/Colors';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SharedValue } from 'react-native-reanimated/lib/typescript/Animated';

const { height } = Dimensions.get('window');
const _spacing = 4;
const _itemHeight = height * 0.73;
const _fullItemHeight = _itemHeight + _spacing * 2;
const Boookmarks = () => {
  const colors = ThemedColors();
  const initBookmarks = bookmarkService.getBookmarks();
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <VerticalList data={initBookmarks} />
    </View>
  );
};

export default Boookmarks;

const styles = StyleSheet.create({});

const VerticalList = ({ data }: { data: ListPostType[] }) => {
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y / _fullItemHeight;
  });
  return (
    <Animated.FlatList
      onScroll={onScroll}
      data={data}
      renderItem={({ item, index }) => (
        <AnimatedCard item={item} index={index} scrollY={scrollY} />
      )}
      contentContainerStyle={{
        paddingHorizontal: _spacing * 3,
        gap: _spacing * 4,
        paddingVertical: (height - _fullItemHeight) / 12,
      }}
      snapToInterval={_fullItemHeight}
      decelerationRate='fast'
      scrollEventThrottle={16} // 16ms is 60fps
    />
  );
};

const AnimatedCard = ({
  item,
  index,
  scrollY,
}: {
  item: ListPostType;
  index: number;
  scrollY: SharedValue<number>;
}) => {
  const colors = ThemedColors();
  const styles = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [index - 1, index, index + 1],
        [0.1, 1, 0.1]
      ),
      transform: [
        {
          scale: interpolate(
            scrollY.value,
            [index - 1, index, index + 1],
            [0.8, 1, 0.8]
          ),
        },
      ],
    };
  });
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          height: _fullItemHeight,
          borderRadius: 16,
          backgroundColor: colors.border,
          overflow: 'hidden',
          padding: _spacing * 4,
          gap: _spacing * 2,
          position: 'relative',
          // paddingBottom: _spacing * 3,
        },
        styles,
      ]}>
      <Image
        source={{ uri: item.imageUrl }}
        style={{
          position: 'absolute',
          borderRadius: 16,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
        blurRadius={30}
      />
      <Image
        source={{ uri: item.imageUrl }}
        style={{ height: 0.4 * _itemHeight, flex: 1, borderRadius: 16 }}
      />
      <View>
        <Text
          style={{ fontSize: 24, fontWeight: '700', color: 'white' }}
          numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 16, color: 'white' }} numberOfLines={3}>
          {item.excerpt}
        </Text>
      </View>
      <Text>{}</Text>
    </Animated.View>
  );
};
