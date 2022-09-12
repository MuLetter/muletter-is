import { BounceAnimationCont } from "@styles/block";
import { white } from "@styles/color";
import { H1, H3 } from "@styles/font";
import styled from "styled-components";
import { ReadyOKProps } from "./types";
import _ from "lodash";
import SelectItem from "@component/register/SelectItem";
import { Button } from "@component/common/button";
import { useNavigate } from "react-router-dom";

function ReadyOK({ recoTracks }: ReadyOKProps) {
  const navigate = useNavigate();

  return (
    <BounceAnimationCont>
      <Wrap>
        <H1 className="title">Spotify로 부터,</H1>
        <Row className="tracks">
          {_.map(_.take(recoTracks, 5), (track) => (
            <SelectItem key={track.id} track={track} />
          ))}
        </Row>
        <H3 className="description">
          당신을 위한 {recoTracks.length}개의 음악들이 준비 되었어요.
        </H3>
        <Button
          colorTheme="outline"
          onClick={() => navigate("/step3", { replace: true })}
        >
          편지를 작성해볼까요?
        </Button>
      </Wrap>
    </BounceAnimationCont>
  );
}

const Wrap = styled.div`
  color: ${white[500]};

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  & > .title,
  .description {
    margin: 0 0 32px;
  }

  & > .description {
    color: ${white[700]};
  }

  & > button {
    width: 280px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  column-gap: 20px;

  margin: 0 0 24px;
`;

export default ReadyOK;
