import { black } from "@styles/color";
import styled, { keyframes } from "styled-components";

export const AniLetterLine = keyframes`
    0% {
        stroke-dashoffset: 671.1620483398438;
    } 40% {
        stroke-dashoffset: 0;
    } 80% {
        stroke-dashoffset: -671.1620483398438;
    } 100% {
        stroke-dashoffset: -671.1620483398438;
    }
`;

export const AniMailBoxLine = keyframes`
    0% {
      stroke-dashoffset: 1652.7779541015625;
    } 40% {
      stroke-dashoffset: 0;
    } 80% {
      stroke-dashoffset: -1652.7779541015625;
    } 100% {
      stroke-dashoffset: -1652.7779541015625;
    }
`;

export const LetterLoadingWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  z-index: 255;

  background: ${black[700]};

  & > .letter {
    width: 150px;
    height: 100px;
  }

  & path {
    stroke-dasharray: 671.1620483398438;
    animation: ${AniLetterLine} 2s linear infinite;
  }
`;

export const MailBoxLoadingWrap = styled.svg`
  & path {
    stroke-dasharray: 1652.7779541015625;
    animation: ${AniMailBoxLine} 3.5s linear infinite;
  }
`;
