import { black } from "@styles/color";
import styled from "styled-components";

export const Wrap = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RecoListWrap = styled.div`
  margin: 48px 32px;
  width: calc(100% - 64px);
  padding: 0 0 336px;

  display: flex;
  flex-direction: column;

  row-gap: 8px;
`;

export const RecoItem = styled.div`
  width: 100%;

  height: 72px;

  padding: 0 12px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;

  column-gap: 12px;
`;

export const AlbumArt = styled.img`
  width: 48px;
  height: 48px;

  object-fit: cover;

  border-radius: 8px;
`;

export const TitleWrap = styled.div`
  color: ${black[700]};

  width: 360px;

  & > * {
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
  }
`;

export const IconGroup = styled.div`
  width: 48px;

  & button {
    color: ${black[500]};
  }
`;
