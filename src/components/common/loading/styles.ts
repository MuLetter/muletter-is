import { black, white } from "@styles/color";
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

export const LogoLoadingWrap = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;
  background: ${black[700]};

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 255;
`;

export const AniLogoLoading = keyframes`
  0% {
    stroke-dashoffset: 835.4067993164062;
    /* opacity: 0; */
  } 20% {
    stroke-dashoffset: 835.4067993164062;
  } 100% {
    stroke-dashoffset: 620;
    /* opacity: 1; */
  }
`;

export const LogoLoadingSVG = styled.svg`
  width: calc(147px * 2);
  height: calc(27px * 2);

  & > path {
    stroke: ${white[500]};

    stroke-dasharray: 835.4067993164062;
    animation: ${AniLogoLoading} 2s linear infinite alternate;
  }
`;
