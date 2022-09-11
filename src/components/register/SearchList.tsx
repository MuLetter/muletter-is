import { useInfiniteQuery } from "@tanstack/react-query";
import { ResSearch, Track } from "@api/types";
import styled from "styled-components";
import SearchItem from "./SearchItem";
import React from "react";
import { useRecoilState } from "recoil";
import { selectTracksState } from "@store/mailbox/atom";
import _ from "lodash";

function SearchList() {
  const [selectTracks, setSelectTracks] = useRecoilState(selectTracksState);
  const { data } = useInfiniteQuery<ResSearch>(["searchTracks"], {
    enabled: false,
  });

  const selectItem = React.useCallback(
    (track: Track) => {
      setSelectTracks(_.concat(selectTracks, track));
    },
    [selectTracks, setSelectTracks]
  );

  const removeItem = React.useCallback(
    (track: Track) => {
      setSelectTracks(_.dropWhile(selectTracks, (st) => st.id === track.id));
    },
    [selectTracks, setSelectTracks]
  );

  return data ? (
    <Wrap>
      {data.pages.map((page) =>
        page.tracks.items.map((track) => (
          <SearchItem
            track={track}
            key={track.id}
            selectAction={selectItem}
            removeAction={removeItem}
            isSelect={
              _.find(selectTracks, (st) => st.id === track.id) !== undefined
            }
          />
        ))
      )}
    </Wrap>
  ) : (
    <></>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;

  row-gap: 16px;
  flex: 1;
  overflow-y: scroll;
`;

export default SearchList;
