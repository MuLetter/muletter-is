import { atom } from "recoil";
import { GeneralAlert } from "./types";

export const generalAlertState = atom<GeneralAlert | null>({
  key: "generalAlert",
  default: null,
});
