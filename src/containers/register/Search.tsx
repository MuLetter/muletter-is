import { getSearch } from "@api";
import SearchBar from "@component/register/SearchBar";
import SearchList from "@component/register/SearchList";
import SelectList from "@component/register/SelectList";
import { SearchBarMode } from "@component/types";
import { tokenState } from "@store/atom";
import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { useRecoilValue } from "recoil";
import _ from "lodash";

function Search() {
  const [mode, setMode] = React.useState<SearchBarMode>("waiting");
  const modeChange = React.useCallback(() => {
    setMode((prev) => (prev === "waiting" ? "searching" : "waiting"));
  }, []);
  const refInput = React.useRef<HTMLInputElement>(null);
  const [q, setQ] = React.useState<string>("");
  const token = useRecoilValue(tokenState);
  const {
    data: searchDatas,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ["searchTracks"],
    async ({ pageParam = 0 }) => {
      console.log(pageParam);
      const data = await getSearch(token!, q, pageParam);

      return data;
    },
    {
      enabled: q !== "",
      getNextPageParam: (lastPage) =>
        lastPage.tracks.next === null
          ? undefined
          : Math.round((lastPage.tracks.offset + 10) / 10),
    }
  );

  // input 정보가 변화할 때의 API 요청 이벤트를 제한
  const debounceSearch = React.useRef<() => void>(
    _.debounce(() => {
      refetch();
    }, 1000)
  );

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setQ(e.target.value);
      if (debounceSearch) debounceSearch.current();
    },
    []
  );

  React.useEffect(() => {
    if (mode) setQ("");
    if (mode === "searching") refInput.current!.focus();
  }, [mode]);

  return (
    <>
      <SearchBar
        refInput={refInput}
        q={q}
        setQ={onChange}
        mode={mode}
        modeChange={modeChange}
      />
      {mode === "waiting" ? (
        <SelectList />
      ) : (
        <SearchList data={searchDatas} nextPage={fetchNextPage} />
      )}
    </>
  );
}

export default Search;
