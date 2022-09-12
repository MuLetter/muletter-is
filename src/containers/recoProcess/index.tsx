import { RecoProcessComponent } from "@component";
import { RecommenderState } from "@store/reco/atom";
import React from "react";
import { useRecoilState } from "recoil";

export function RecoProcessContainer() {
  const [recommender, setRecommender] = useRecoilState(RecommenderState);

  React.useEffect(() => {
    if (recommender) {
      setTimeout(() => {
        const clone = recommender.clone();
        const { done } = clone.next();
        if (!done) setRecommender(clone);
      }, 2000);
    }
  }, [recommender, setRecommender]);

  return (
    <RecoProcessComponent
      processDatas={recommender!.processDatas as number[][]}
    />
  );
}
