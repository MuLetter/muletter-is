import { RecoProcessComponent } from "@component";
import { RecommenderState, RecoTracksState } from "@store/reco/atom";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";

export function RecoProcessContainer() {
  const [isDone, setIsDone] = React.useState<boolean>(false);
  const setRecoTracks = useSetRecoilState(RecoTracksState);
  const [recommender, setRecommender] = useRecoilState(RecommenderState);

  React.useEffect(() => {
    if (recommender) {
      setTimeout(() => {
        const clone = recommender.clone();
        const { done } = clone.next();
        if (!done) setRecommender(clone);
        else {
          setRecoTracks(clone.recoTracks);
          setIsDone(true);
        }
      }, 3000);
    }
  }, [recommender, setRecommender, setRecoTracks]);

  return (
    <RecoProcessComponent
      isDone={isDone}
      processDatas={recommender!.processDatas as number[][]}
    />
  );
}
