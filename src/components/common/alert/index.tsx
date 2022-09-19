import { generalAlertState } from "@store/atom";
import { white } from "@styles/color";
import React from "react";
import { useRecoilValue } from "recoil";
import { GeneralAlertWrap, LetterAlertWrap } from "./styles";

export function LetterAlert() {
  return (
    <LetterAlertWrap xmlns="https://www.w3.org/2000/svg" viewBox="0 0 150 150">
      <path
        d="
        M 0 50
        L 0 150
        L 150 150
        L 150 50
        L 75 100
        L 0 50
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
      <path
        d="
        M 0 50
        L 150 50
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
        className="lid-bottom"
      />
      <path
        d="
        M 150 50
        L 75 100
        L 0 50
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
        className="lid"
      />
      <text
        x="75"
        y="75"
        textAnchor="middle"
        alignmentBaseline="central"
        fill={white[500]}
      >
        편지가 도착했습니다.
      </text>
    </LetterAlertWrap>
  );
}

export function GeneralAlert() {
  const alert = useRecoilValue(generalAlertState);
  const [view, setView] = React.useState<boolean>(false);

  React.useEffect(() => {
    let timeId: NodeJS.Timeout;
    if (alert) {
      setView(true);
      timeId = setTimeout(() => {
        setView(false);
      }, 1500);
    }

    return () => {
      clearTimeout(timeId);
    };
  }, [alert]);

  return view ? <GeneralAlertWrap>{alert!.message}</GeneralAlertWrap> : <></>;
}
