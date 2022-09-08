import { black, white } from "@styles/color";
import styled from "styled-components";

export const FullScreenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background: ${black[700]};
`;

export const IntroWrap = styled.div`
  width: 800px;
  color: ${white[500]};

  & .subtitle {
    width: 18px;
    white-space: nowrap;
    transform-origin: 0 100%;
    transform: rotateZ(-90deg) translateY(18px);

    margin: 0 46.37px 0 0;
  }
`;

export const LetterGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  & > .center {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const EtcGroup = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;

  margin: 12px 0 0;

  & > .title {
    width: 214.37px;
  }

  & > .subject {
    flex: 1;
    text-align: center;
  }

  & > .start-btn {
    width: 150px;
  }
`;
