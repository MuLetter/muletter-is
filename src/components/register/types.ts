import { Track } from "@api/types";

export type SearchBarMode = "waiting" | "searching";

export interface SelectItemProps {
  track: Track;
  selectAction: (...args: any) => void;
}

export interface SearchItemProps extends SelectItemProps {
  removeAction: (...args: any) => void;
  isSelect: boolean;
}

export interface SearchBarProps {
  mode: "waiting" | "searching";
  modeChange: () => void;
}
