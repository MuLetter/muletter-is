import { useInfiniteQuery } from "@tanstack/react-query";
import { ResSearch } from "api/spotify/types";
import styled from "styled-components";
import SearchItem from "./SearchItem";

function SearchList() {
  const { data } = useInfiniteQuery<ResSearch>(["searchTracks"], {
    enabled: false,
  });

  return data ? (
    <Wrap>
      {data.pages.map((page) =>
        page.tracks.items.map((track) => (
          <SearchItem track={track} key={track.id} />
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
