import PUrls from "./urls";
import axios from "axios";

import { store } from "../store";
import { setLoading, setData } from "../feature/AllDuaSlicer";
export default class AllDuaApi {
  static getAllDua = async (language) => {
    try {
      store.dispatch(setLoading());
      const res = await axios.get(PUrls.allDua);
      store.dispatch(setData({ language, result: res.data.result }));
    } catch (_) {
      store.dispatch(setData({ error: true }));
    }
  };
}
