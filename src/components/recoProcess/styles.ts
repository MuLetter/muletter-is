import { black } from "@styles/color";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  min-width: 1280px;

  padding: 0 128px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AlertWrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: ${black[700]};
  row-gap: 16px;
`;

export const FeaturesWrap = styled.svg`
  width: 800px;
  height: 400px;
`;
