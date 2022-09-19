import { Track } from "@api/types";
import { atom } from "recoil";

export const audioTrackState = atom<Track | null>({
  key: "audioTrack",
  default: null,
});
