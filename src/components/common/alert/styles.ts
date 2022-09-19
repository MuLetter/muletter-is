import { black, white } from "@styles/color";
import { fontStyles } from "@styles/font";
import styled, { keyframes } from "styled-components";

export const GeneralAlertWrap = styled.div`
  position: fixed;

  top: calc(50% - 21.5px);
  left: calc(50% - 150px);

  z-index: 20000;

  background: ${black[500]};

  color: ${white[500]};
  width: 300px;

  ${fontStyles["p2"]};

  padding: 8px 24px;
  border-radius: 12px;

  text-align: center;
`;

export const AlertLidAni = keyframes`
    from {
        transform: rotateX(0deg);
        opacity: 1;
    } to {
        transform: rotateX(180deg);
        opacity: .3;
    }
`;

export const AlertLidBottomAni = keyframes`
    from {
        opacity: 1;
    } to {
        opacity: .3;
    }
`;

export const AlertTextAni = keyframes`
    from {
        transform: rotateZ(-90deg) translateX(0);
        opacity: 0;
    } to {
        transform: rotateZ(-90deg) translateX(48px);
        opacity: 1;
    }
`;

export const LetterAlertWrap = styled.svg`
  width: 150px;
  height: 150px;
  overflow: visible;

  & text {
    transform-origin: 50% 50%;
    animation: ${AlertTextAni} 0.5s linear forwards;
    ${fontStyles["tag1"]};
  }

  & > .lid {
    transform-origin: 75px 50px;
    animation: ${AlertLidAni} 0.4s linear forwards;
  }

  & > .lid-bottom {
    animation: ${AlertLidBottomAni} 0.4s linear forwards;
  }
`;
