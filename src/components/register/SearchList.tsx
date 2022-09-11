import styled from "styled-components";
import SearchItem from "./SearchItem";
import React from "react";
import { useRecoilState } from "recoil";
import { selectTracksState } from "@store/mailbox/atom";
import _ from "lodash";
import { SearchListProps } from "./types";
import { Track } from "@api/types";

function SearchList({ data, nextPage }: SearchListProps) {
  const refWrap = React.useRef<HTMLDivElement>(null);
  const [selectTracks, setSelectTracks] = useRecoilState(selectTracksState);

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

  const throttleScroll = React.useRef<() => void>(
    _.throttle(() => {
      nextPage();
    }, 1000)
  );

  const nextFetch = React.useCallback(() => {
    const top = refWrap.current!.scrollTop;
    const height = refWrap.current!.clientHeight;
    const sHeight = refWrap.current!.scrollHeight;

    if (top >= sHeight - height - 40) {
      throttleScroll.current();
    }
  }, []);

  React.useEffect(() => {
    if (refWrap.current) refWrap.current!.addEventListener("scroll", nextFetch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrap ref={refWrap}>
      {data &&
        data.pages.map((page) =>
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
