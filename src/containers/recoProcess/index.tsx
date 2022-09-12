import { RecoProcessComponent } from "@component";
import { RecommenderState } from "@store/reco/atom";
import { useRecoilValue } from "recoil";

export function RecoProcessContainer() {
  const recommender = useRecoilValue(RecommenderState);

  return (
    <RecoProcessComponent
      processDatas={recommender!.processDatas as number[][]}
    />
  );
}
