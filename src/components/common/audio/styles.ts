import { white } from "@styles/color";
import styled from "styled-components";

export const AudioWrap = styled.div`
  position: fixed;

  bottom: 32px;
  right: 32px;

  width: 200px;
  height: 200px;
  border-radius: 16px;

  z-index: 5000;
  background: black;

  overflow: hidden;
`;

export const AlbumArt = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
`;

export const TitleWrap = styled.div`
  position: absolute;

  left: 0;
  bottom: 0;

  width: 100%;
  height: 40%;

  background: rgba(51, 51, 51, 0.2);
  backdrop-filter: blur(10px);

  color: ${white[500]};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 12px;
  box-sizing: border-box;

  & > .artists-names,
  .track-title {
    width: 100%;
    white-space: nowrap;
    overflow-x: hidden;
    text-overflow: ellipsis;
    text-align: center;
  }
`;
