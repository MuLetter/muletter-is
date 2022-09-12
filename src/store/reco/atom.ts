import Recommender from "@recommender";
import { atom } from "recoil";

export const RecommenderState = atom<Recommender | null>({
  key: "RecommenderState",
  default: null,
});
