import PUrls from "./urls";
import axios from "axios";

import { store } from "../store";
import { setLoading, setData } from "../feature/RuqyahSubCatSlicer";
import { setError } from "../feature/RuqyahCatSlicer";

export default class RuqyahSubCatApi {
  static getRuqyahSubCat = async (lang) => {
    try {
      store.dispatch(setError(false));
      store.dispatch(setLoading(true));
      const res = await axios.get(PUrls.ruqyahSubCat + lang);

      if (res.data.error) {
        store.dispatch(setError(true));
      } else {
        store.dispatch(setData(res.data.result));
      }
      store.dispatch(setLoading(false));
    } catch (_) {
      store.dispatch(setError(true));
    }
  };
}
