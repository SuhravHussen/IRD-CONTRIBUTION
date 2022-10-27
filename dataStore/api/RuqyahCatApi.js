import PUrls from "./urls";
import axios from "axios";

import { store } from "../store";
import { setLoading, setData, setError } from "../feature/RuqyahCatSlicer";

export default class RuqCatApi {
  static getRuqyahCategory = async (lang) => {
    try {
      store.dispatch(setError(false));
      store.dispatch(setLoading(true));
      const res = await axios.get(PUrls.ruqyahCategory + lang);
      if (res.data.error) {
        store.dispatch(setError(true));
      } else {
        store.dispatch(setData(res.data.result));
      }
      store.dispatch(setLoading(false));
    } catch (_) {
      store.dispatch(setLoading(false));
      store.dispatch(setError(true));
    }
  };
}
