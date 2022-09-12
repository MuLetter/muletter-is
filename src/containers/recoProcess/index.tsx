import { RecoProcessComponent } from "@component";
import { RecommenderState } from "@store/reco/atom";
import React from "react";
import { useRecoilState } from "recoil";

export function RecoProcessContainer() {
  const [isDone, setIsDone] = React.useState<boolean>(false);
  const [recommender, setRecommender] = useRecoilState(RecommenderState);

  React.useEffect(() => {
    if (recommender) {
      setTimeout(() => {
        const clone = recommender.clone();
        const { done } = clone.next();
        if (!done) setRecommender(clone);
        else setIsDone(true);
      }, 2000);
    }
  }, [recommender, setRecommender]);

  return (
    <RecoProcessComponent
      isDone={isDone}
      processDatas={recommender!.processDatas as number[][]}
    />
  );
}
