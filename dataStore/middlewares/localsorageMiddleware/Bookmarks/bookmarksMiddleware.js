import { addBookmark, deleteBookmark, editBookmark } from "../../../feature/BookmarkSlicer";
import { localStorageMiddleware } from "../listner";

localStorageMiddleware.startListening({
  actionCreator: addBookmark,
  effect: (action, api) => {
    localStorage.setItem("bookmarks", JSON.stringify([...api.getState().bookmarks]));
  },
});

localStorageMiddleware.startListening({
  actionCreator: editBookmark,
  effect: (action, api) => {
    localStorage.setItem("bookmarks", JSON.stringify([...api.getState().bookmarks]));
  },
});

localStorageMiddleware.startListening({
  actionCreator: deleteBookmark,
  effect: (action, api) => {
    localStorage.setItem("bookmarks", JSON.stringify([...api.getState().bookmarks]));
  },
});

// get bookmarks state from local storage
export const bookmarksState = () => {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  if (bookmarks && bookmarks.length > 0) {
    return bookmarks;
  } else {
    return [];
  }
};
