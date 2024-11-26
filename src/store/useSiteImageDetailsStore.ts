import { create } from "zustand";
import { ImageRespData } from "../types";
import { persist } from "zustand/middleware";

interface UseSiteImageDetailsStoreT {
  imgData: ImageRespData | null;
  setImgData: (data: ImageRespData) => void;
}

const useSiteImageDetailsStore = create<UseSiteImageDetailsStoreT>()(
  persist(
    (set) => ({
      imgData: null,
      setImgData: (data) => set((state) => ({ imgData: data })),
    }),
    { name: "persistImgRespState" }
  )
);

export default useSiteImageDetailsStore;
