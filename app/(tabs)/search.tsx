import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import Constants from 'expo-constants';
import {
  ListPostType,
  SearchPostResponseType,
  searchPosts,
} from '@/utils/wpApi';
import { useToast } from 'react-native-toast-notifications';
import { Post, Posts } from '@/components/PostsList';
import { colorss, ThemedColors } from '@/constants/Colors';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Search = () => {
  const SearchInput = () => {
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState<SearchPostResponseType[]>([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const handleInputChange = useCallback(async (value: string) => {
      setSearchValue(value);
      setLoading(true);
      try {
        const response = await searchPosts(value);
        setResults(response);
      } catch (error: unknown) {
        if (error instanceof Error) {
          toast.show('Error searching for post: ' + error.message, {
            type: 'danger',
          });
        } else {
          toast.show('An unknown error occurred', { type: 'danger' });
        }
      } finally {
        setLoading(false);
      }
    }, []);

    return (
      <ThemedView style={{ padding: 2, flex: 1 }}>
        <ThemedView style={{ position: 'relative' }}>
          <TextInput
            placeholder='Search for articles'
            style={{
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 12,
              borderWidth: 1,
              fontSize: 18,
            }}
            value={searchValue}
            onChangeText={(text) => handleInputChange(text)}
          />
          {loading && (
            <ActivityIndicator
              color={colorss.businessName}
              style={{ position: 'absolute', right: 4, top: 10 }}
            />
          )}
        </ThemedView>
        <Results results={results} />
      </ThemedView>
    );
  };

  return (
    <ThemedView
      style={{
        flex: 1,
        paddingHorizontal: 16,
      }}>
      <SearchInput />
    </ThemedView>
  );
};

export default Search;

const Results = ({ results }: { results: SearchPostResponseType[] }) => {
  const router = useRouter();
  const themedColors = ThemedColors();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{}}>
        {results.map((item) => (
          <Pressable
            onPress={() => {
              router.push({
                pathname: '/(app)/postDetailsScreenById',
                params: {
                  id: item.id,
                  title: item.title,
                },
              });
            }}
            key={item.id}
            style={({ pressed }) => ({
              paddingVertical: 14,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 8,
              borderBottomWidth: 1,
              borderColor: 'gray',
              opacity: pressed ? 0.5 : 1,
            })}>
            <Ionicons
              name='search-outline'
              size={24}
              color={themedColors.icon}
            />
            <ThemedText type='link'>{item.title}</ThemedText>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});
