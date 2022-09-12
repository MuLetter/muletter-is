import { Track } from "@api/types";
import Recommender from "@recommender";

export interface ComponentProps {
  recommender: Recommender | null;
}

export interface ReadyOKProps {
  recoTracks: Track[];
}
