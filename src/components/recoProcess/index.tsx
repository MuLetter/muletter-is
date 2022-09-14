import { OpacityAnimationCont } from "@styles/block";
import { AlertWrap, FeaturesWrap, Wrap } from "./styles";
import { ComponentProps } from "./types";
import MinMaxScaler from "@minmaxscaler";
import { white } from "@styles/color";
import { LetterAlert } from "@component/common/alert";
import { Button } from "@component/common/button";
import { useNavigate } from "react-router-dom";
import { LogoLoading } from "@component/common";

const WIDTH = 800;
const HEIGHT = 400;

export function RecoProcessComponent({ processDatas, isDone }: ComponentProps) {
  const scaler = new MinMaxScaler(processDatas).fit();
  const navigate = useNavigate();

  return isDone ? (
    <OpacityAnimationCont>
      <AlertWrap>
        <LetterAlert />
        <Button colorTheme="outline" onClick={() => navigate("/step4")}>
          확인하기
        </Button>
      </AlertWrap>
    </OpacityAnimationCont>
  ) : (
    <OpacityAnimationCont>
      <LogoLoading />
      <Wrap>
        <FeaturesWrap
          xmlns="https://www.w3.org/2000/svg"
          viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        >
          {scaler.transfrom().map((data, idx) => (
            <path
              key={`process-data-${idx}`}
              d={[
                "M",
                0,
                HEIGHT * data[0],
                "L",
                WIDTH * (1 / 7),
                HEIGHT * data[1],
                "L",
                WIDTH * (2 / 7),
                HEIGHT * data[2],
                "L",
                WIDTH * (3 / 7),
                HEIGHT * data[3],
                "L",
                WIDTH * (4 / 7),
                HEIGHT * data[4],
                "L",
                WIDTH * (5 / 7),
                HEIGHT * data[5],
                "L",
                WIDTH * (6 / 7),
                HEIGHT * data[6],
                "L",
                WIDTH * (7 / 7),
                HEIGHT * data[7],
              ].join(" ")}
              fill="none"
              stroke={white[900]}
              strokeWidth={1}
            />
          ))}
        </FeaturesWrap>
      </Wrap>
    </OpacityAnimationCont>
  );
}
