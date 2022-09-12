import { white } from "@styles/color";
import React from "react";
import { LetterLoadingWrap, MailBoxLoadingWrap } from "./styles";

export function LetterLoading() {
  return (
    <LetterLoadingWrap>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="loading letter"
        viewBox="0 0 150 100"
      >
        <path
          d="
          M 0 0
          L 0 100
          L 150 100
          L 150 0
          L 75 50
          L 5 0
          L 150 0
          "
          stroke={white[500]}
          strokeWidth={2}
          fill="none"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </LetterLoadingWrap>
  );
}

export function MailBoxLoading() {
  return (
    <MailBoxLoadingWrap
      xmlns="https://www.w3.org/2000/svg"
      width={296}
      height={178}
      viewBox="0 0 296 178"
    >
      <path
        d="M 0 45
          L 0 144.75
          L 76.29 178
          L 296 144.75
          L 296 45
          L 76.29 78.25
          L 0 45
          L 219.71 12.5
          L 296 45
          L 278 70
          L 76.29 100.25
          L 76.29 150
          L 278 118.75
          L 278 70
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
    </MailBoxLoadingWrap>
  );
}
