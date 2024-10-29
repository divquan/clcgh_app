import { BookmarksStorage } from './storage';
import { ListPostType } from './wpApi';

export const bookmarkService = {
  removeBookmark(postId: string) {
    // Remove bookmark from database

    const bookmarks = BookmarksStorage.get();
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== postId
    );
    BookmarksStorage.set(updatedBookmarks);
  },
  getBookmarks() {
    const bookmarks = BookmarksStorage.get();
    return bookmarks;
    // Get bookmarks from database
  },
  addBookmark(post: ListPostType) {
    // Add bookmark to database
    BookmarksStorage.add(post);
  },
  isBookmarked(postId: string) {
    const bookmarks = BookmarksStorage.get();
    return bookmarks.some((bookmark) => bookmark.id === postId);
    // Check if post is bookmarked
  },
};
