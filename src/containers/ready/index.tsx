import { ReadyComponent } from "@component";
import RecommenderBuilder from "@recommender/builder";
import { tokenState } from "@store/atom";
import React from "react";
import { useRecoilValue } from "recoil";

export function ReadyContainer() {
  const token = useRecoilValue(tokenState);

  const setting = React.useCallback(async () => {
    const builder = new RecommenderBuilder(token!);
    const recommender = builder.recommender;

    await builder.step1();
  }, [token]);

  React.useEffect(() => {
    if (token) {
      setting();
    }
  }, [setting, token]);

  return <ReadyComponent />;
}
