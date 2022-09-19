import { white } from "@styles/color";
import { P2, P4 } from "@styles/font";
import styled, { css } from "styled-components";
import { SearchItemProps, SearchItemStyleProps } from "./types";
import _ from "lodash";
import { IconButton } from "@component/common/button";
import { MdAdd } from "react-icons/md";
import React from "react";

function SearchItem({
  track,
  selectAction,
  removeAction,
  isSelect,
}: SearchItemProps) {
  const [isLoad, setIsLoad] = React.useState<boolean>(false);
  const refAlbumArt = React.useRef<HTMLImageElement>(null);

  React.useEffect(() => {
    if (refAlbumArt.current) {
      setIsLoad(refAlbumArt.current.complete);
      refAlbumArt.current.addEventListener("load", (e) => {
        setIsLoad(refAlbumArt.current!.complete);
      });
    }
  }, []);

  // const _selectAction = React.useCallback(() => {
  //   selectAction!(track);
  //   setSelect(true);
  // }, [selectAction, track]);

  // const _removeAction = React.useCallback(() => {
  //   if (removeAction) {
  //     removeAction(track);
  //     setSelect(false);
  //   }
  // }, [removeAction, track]);

  return (
    <Wrap
      loadDuration={Math.random() * (0.4 - 0.2) + 0.2}
      isLoad={isLoad}
      onClick={
        isSelect ? () => removeAction(track) : () => selectAction!(track)
      }
    >
      <AlbumArt
        ref={refAlbumArt}
        src={track.album.images.length !== 0 ? track.album.images[0].url : ""}
      />
      <MusicInfo>
        <P4 className="artist-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </P4>
        <P2 className="track-name">{track.name}</P2>
      </MusicInfo>
      <IconButton className={`${isSelect ? "select" : ""}`} type="button">
        <MdAdd />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div<SearchItemStyleProps>`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 64px;

  color: ${white[500]};
  border-radius: 12px;

  column-gap: 12px;
  cursor: pointer;
  transition: ${({ loadDuration }) => loadDuration}s;

  & button {
    transition: 0.3s;
  }
  & > .select {
    transform: rotateZ(135deg);
  }

  ${({ isLoad }) =>
    !isLoad
      ? css`
          opacity: 0;
        `
      : css`
          opacity: 1;
        `}
`;

const AlbumArt = styled.img`
  width: 64px;
  height: 64px;

  object-fit: cover;

  border-radius: 8px;
`;

const MusicInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  flex: 1;

  & > .artist-names {
    font-weight: 500;
  }

  & > .track-name {
  }
`;

export default SearchItem;
