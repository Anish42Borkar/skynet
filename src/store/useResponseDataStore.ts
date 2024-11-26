import { create } from "zustand";
import { ResponseData } from "../types";
import { persist } from "zustand/middleware";

interface UseResponseDataStoreT {
  data: ResponseData | null;
  setData: (data: ResponseData) => void;
}

const useResponseDataStore = create<UseResponseDataStoreT>()(
  persist(
    (set) => ({
      data: null,
      setData: (data) => set(() => ({ data: data })),
    }),
    { name: "persistRespState" }
  )
);

export default useResponseDataStore;
