import { MMKV } from 'react-native-mmkv';
import { ListPostType } from './wpApi';

const RECENTPOSTS_KEY = 'clcgh-recent-post';
export const storage = new MMKV();

const storeToken = (token: string) => {
  storage.set('auth-token', token);
};
const getToken = () => {
  return storage.getString('auth-token');
};

const getRecentlyOpenedPosts = () => {
  const serializedArray = storage.getString(RECENTPOSTS_KEY);
  return (serializedArray ? JSON.parse(serializedArray) : []) as ListPostType[];
};
const storeRecentlyOpenedPost = (postData: ListPostType) => {
  const items = getRecentlyOpenedPosts();
  if (items.find((it) => it.id === postData.id)) {
    return;
  }
  storage.set(RECENTPOSTS_KEY, JSON.stringify([postData, ...items]));
};

const retrieveBookmarks = () => {
  const serializedArray = storage.getString(RECENTPOSTS_KEY);
  return (serializedArray ? JSON.parse(serializedArray) : []) as ListPostType[];
};
const addBookmark = (postData: ListPostType) => {
  const items = getRecentlyOpenedPosts();
  if (items.find((it) => it.id === postData.id)) {
    return;
  }
  storage.set(RECENTPOSTS_KEY, JSON.stringify([postData, ...items]));
};

const setBookmarks = (bookmarks: ListPostType[]) => {
  storage.set(RECENTPOSTS_KEY, JSON.stringify(bookmarks));
  return;
};
export const tokenStorage = {
  storeToken,
  getToken,
  storeRecentlyOpenedPost,
  getRecentlyOpenedPosts,
};

export const RecentlyOpenedPost = {
  get: getRecentlyOpenedPosts,
  set: storeRecentlyOpenedPost,
};

export const BookmarksStorage = {
  get: retrieveBookmarks,
  set: setBookmarks,
  add: addBookmark,
};
