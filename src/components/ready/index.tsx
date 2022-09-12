import { MailBoxLoading } from "@component/common";
import { OpacityAnimationCont } from "@styles/block";
import ReadyOK from "./ReadyOK";
import { ReadyWrap } from "./styles";
import { ComponentProps } from "./types";

export function ReadyComponent({ recommender }: ComponentProps) {
  return (
    <OpacityAnimationCont>
      <ReadyWrap>
        {recommender ? (
          <ReadyOK recoTracks={recommender.recommendations!} />
        ) : (
          <MailBoxLoading />
        )}
      </ReadyWrap>
    </OpacityAnimationCont>
  );
}
