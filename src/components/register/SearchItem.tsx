import { white } from "@styles/color";
import { P2, P4 } from "@styles/font";
import styled from "styled-components";
import { SearchItemProps } from "./types";
import _ from "lodash";
import { IconButton } from "@component/common/button";
import { MdAdd } from "react-icons/md";

function SearchItem({
  track,
  selectAction,
  removeAction,
  isSelect,
}: SearchItemProps) {
  return (
    <Wrap
      onClick={
        isSelect
          ? () => removeAction(track)
          : selectAction
          ? () => selectAction(track)
          : selectAction
      }
    >
      <AlbumArt
        src={track.album.images.length !== 0 ? track.album.images[0].url : ""}
      />
      <MusicInfo>
        <P4 className="artist-names">
          {_.join(_.flatten(_.map(track.artists, ({ name }) => name)), ",")}
        </P4>
        <P2 className="track-name">{track.name}</P2>
      </MusicInfo>
      <IconButton className={`${isSelect ? "select" : ""}`}>
        <MdAdd />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: 0 64px;

  color: ${white[500]};

  column-gap: 12px;
  cursor: pointer;

  & button {
    transition: 0.3s;
  }
  & > .select {
    transform: rotateZ(135deg);
  }
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
