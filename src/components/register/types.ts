import { Track } from "@api/types";

export type SearchBarMode = "waiting" | "searching";

export interface SearchItemProps {
  track: Track;
}
