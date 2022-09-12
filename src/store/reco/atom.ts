import { Track } from "@api/types";
import Recommender from "@recommender";
import { atom } from "recoil";

export const RecommenderState = atom<Recommender | null>({
  key: "RecommenderState",
  default: null,
});

export const RecoTracksState = atom<Track[] | null>({
  key: "RecoTracksState",
  default: null,
});
