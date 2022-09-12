import { SmallLogo } from "@asset/logo";
import { Mail2D, Mail2DLetter, Mail2DOpen } from "@asset/symbols";
import { Button } from "@component/common/button";
import { OpacityAnimationCont } from "@styles/block";
import { Tag1 } from "@styles/font";
import { useNavigate } from "react-router-dom";
import {
  EtcGroup,
  FullScreenContainer,
  IntroWrap,
  LetterGroup,
} from "./styles";

export function IntroComponent() {
  const navigate = useNavigate();

  return (
    <FullScreenContainer>
      <OpacityAnimationCont>
        <IntroWrap>
          <SmallLogo type="outline" />
          <LetterGroup>
            <Tag1 className="subtitle">오직 당신만을 위한 음악편지</Tag1>
            <Mail2D />
            <div className="center">
              <Mail2DOpen />
            </div>
            <Mail2DLetter text="팀 따스함" />
          </LetterGroup>
          <EtcGroup>
            <Tag1 className="gustoroom title">
              GustoRoom Web Symbol Project pt3
            </Tag1>
            <Tag1 className="gustoroom subject">
              Letter&nbsp;&nbsp;•&nbsp;&nbsp;MailBox
            </Tag1>
            <Button
              className="start-btn"
              colorTheme="outline"
              onClick={() => navigate("/step1", { replace: true })}
            >
              시작하기
            </Button>
          </EtcGroup>
        </IntroWrap>
      </OpacityAnimationCont>
    </FullScreenContainer>
  );
}
