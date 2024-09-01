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

const Search = () => {
  const SearchInput = () => {
    const inputRef = useRef<TextInput | null>(null);
    const [searchValue, setSearchValue] = useState('');
    const [results, setResults] = useState<SearchPostResponseType[]>([]);
    const [loading, setLoading] = useState(false);

    const toast = useToast();

    const handleInputChange = useCallback(
      async (value: string) => {
        setSearchValue(value);
        setLoading(true);
        try {
          const response = await searchPosts(value);

          setResults(response);
        } catch (error: any) {
          toast.show('Error searching for post: ' + error.message, {
            type: 'danger',
          });
        } finally {
          setLoading(false);
        }
      },
      [searchValue]
    );

    useEffect(() => {
      inputRef.current?.focus();
      // console.log('done');
    }, []);
    return (
      <ThemedView style={{ padding: 2, flex: 1 }}>
        <ThemedView>
          <TextInput
            ref={inputRef}
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
  const Results = ({ results }: { results: SearchPostResponseType[] }) => {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{}}>
          {results.map((item) => {
            return (
              <Pressable
                onPress={() => {}}
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
                  color={ThemedColors().icon}
                />
                <ThemedText type='link' style={{}}>
                  {item.title}
                </ThemedText>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
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

const styles = StyleSheet.create({});
