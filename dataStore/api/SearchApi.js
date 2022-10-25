import axios from "axios";
import PUrls from "./urls";

import { store } from "../store";
import { setLoading, setData, setError } from "../feature/SearchSlicer";

export default class SearchApi {
  static duaSearch = async (query, lang) => {
    try {
      store.dispatch(setError(false));
      store.dispatch(setLoading());
      const res = await axios.post(PUrls.duaSearch + lang, {
        text: query,
      });
      if (res.data.error) store.dispatch(setError(true));
      if (!res.data.error && res.data?.result) store.dispatch(setData(res.data.result));
      store.dispatch(setLoading());
    } catch (_) {
      store.dispatch(setError(true));
      store.dispatch(setLoading());
    }
  };
}
