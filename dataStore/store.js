import { configureStore } from "@reduxjs/toolkit";
import DuaCatSlicer from "./feature/DuaCatSlicer";
import SubCatSlicer from "./feature/SubCatSlicer";
import RuqyahSlicer from "./feature/RuqyahCatSlicer";
import RuqyahSubCatSlicer from "./feature/RuqyahSubCatSlicer";
import RuqyahDetailsSlicer from "./feature/RuqyahDetailsSlicer";
import DuaInfoSlicer from "./feature/DuaInfoSlicer";
import BookSlicer from "./feature/BookSlicer";
import DrawerSlicer from "./feature/DrawerSlicer";
import DuaDailySlicer from "./feature/DuaDailySlicer";
import DuaSlicer from "./feature/DuaSlicer";
import BookDetailsSlicer from "./feature/BookDetailsSlicer";
import SearchSlicer from "./feature/SearchSlicer";
import GlobalDataSlicer from "./feature/GlobalDataSlicer";
import SettingsSlicer from "./feature/SettingsSlicer";
import { localStorageMiddleware } from "./middlewares/localStorageMiddlware";
import AllDuaSlicer from "./feature/AllDuaSlicer";
import MemorizeSlicer from "./feature/MemorizeSlicer";

export const store = configureStore({
  reducer: {
    dua: DuaSlicer,
    duaCat: DuaCatSlicer,
    subCat: SubCatSlicer,
    ruqyahCat: RuqyahSlicer,
    ruqyahSubCat: RuqyahSubCatSlicer,
    ruqyahDetails: RuqyahDetailsSlicer,
    duaInfo: DuaInfoSlicer,
    books: BookSlicer,
    bookDetails: BookDetailsSlicer,
    drawer: DrawerSlicer,
    duaDaily: DuaDailySlicer,
    duaSearch: SearchSlicer,
    globalData: GlobalDataSlicer,
    settings: SettingsSlicer,
    allDuas: AllDuaSlicer,
    memorize: MemorizeSlicer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageMiddleware.middleware),
});
