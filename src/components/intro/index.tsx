import { SmallLogo } from "@asset/logo";
import { Mail2D, Mail2DLetter, Mail2DOpen } from "@asset/symbols";
import { Tag1 } from "@styles/font";
import { FullScreenContainer, IntroWrap, LetterGroup } from "./styles";

function IntroComponent() {
  return (
    <FullScreenContainer>
      <IntroWrap>
        <SmallLogo type="outline" />
        <LetterGroup>
          <Tag1 className="subtitle">오직 당신만을 위한 음악편지</Tag1>
          <Mail2D />
          <div className="center">
            <Mail2DOpen />
          </div>
          <Mail2DLetter />
        </LetterGroup>
      </IntroWrap>
    </FullScreenContainer>
  );
}

export default IntroComponent;
