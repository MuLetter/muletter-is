import { MuLetterComponent } from "@component";
import { RecoTracksState } from "@store/reco/atom";
import { useRecoilValue } from "recoil";

export function MuLetterContainer() {
  const recoTracks = useRecoilValue(RecoTracksState);

  return <MuLetterComponent recoTracks={recoTracks} />;
}
