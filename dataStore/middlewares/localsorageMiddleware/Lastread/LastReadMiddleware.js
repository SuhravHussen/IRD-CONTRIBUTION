import { addLastRead } from "../../../feature/LastReadSlicer";
import { localStorageMiddleware } from "../listner";

localStorageMiddleware.startListening({
  actionCreator: addLastRead,
  effect: (action, api) => {
    localStorage.setItem(
      "lastRead",
      JSON.stringify({
        lastRead: action.payload,
      })
    );
  },
});

// get last read state from local storage
export const getLastReadState = () => {
  const lastRead = JSON.parse(localStorage.getItem("lastRead"));
  if (lastRead) {
    return lastRead;
  } else {
    return null;
  }
};
