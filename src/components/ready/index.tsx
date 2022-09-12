import { MailBoxLoading } from "@component/common";
import { OpacityAnimationCont } from "@styles/block";
import { ReadyWrap } from "./styles";

export function ReadyComponent() {
  return (
    <OpacityAnimationCont>
      <ReadyWrap>
        <MailBoxLoading />
      </ReadyWrap>
    </OpacityAnimationCont>
  );
}
