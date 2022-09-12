import { ReadyComponent } from "@component";
import RecommenderBuilder from "@recommender/builder";
import { tokenState } from "@store/atom";
import { selectTracksState } from "@store/mailbox/atom";
import { RecommenderState } from "@store/reco/atom";
import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

export function ReadyContainer() {
  const [recommender, setRecommender] = useRecoilState(RecommenderState);

  const token = useRecoilValue(tokenState);
  const selectedTracks = useRecoilValue(selectTracksState);

  const setting = React.useCallback(async () => {
    const builder = new RecommenderBuilder(token!, selectedTracks);
    const recommender = builder.recommender;

    await builder.step1();

    console.log(recommender.availableGenres);
    console.log(recommender.artistAndGenres);
    console.log(recommender.audioFeatures);
    console.log(recommender.seeds);

    await builder.step2();
    console.log(recommender.recommendations);
    console.log(recommender.recoAudioFeatures);

    setRecommender(recommender);
  }, [token, selectedTracks, setRecommender]);

  React.useEffect(() => {
    if (token && selectedTracks.length !== 0 && !recommender) setting();
  }, [setting, token, selectedTracks, recommender]);

  return <ReadyComponent recommender={recommender} />;
}
