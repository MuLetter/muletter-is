import { getSearch } from "@api";
import SearchBar from "@component/register/SearchBar";
import SearchList from "@component/register/SearchList";
import SelectList from "@component/register/SelectList";
import { SearchBarMode } from "@component/types";
import { tokenState } from "@store/atom";
import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useRecoilValue } from "recoil";
import _ from "lodash";

type Props = {
  mode: SearchBarMode;
  setMode: (mode: SearchBarMode) => void;
  setSearchBarUnmount: (status: boolean) => void;
};

function Search({ mode, setMode, setSearchBarUnmount }: Props) {
  const modeChange = React.useCallback(
    (mode: SearchBarMode) => {
      setMode(mode);
      if (mode === "searching") {
        setSearchBarUnmount(false);
      }
    },
    [setMode, setSearchBarUnmount]
  );
  const queryClient = useQueryClient();

  const refInput = React.useRef<HTMLInputElement>(null);
  const [q, setQ] = React.useState<string>("");
  const token = useRecoilValue(tokenState);
  const {
    isRefetching,
    data: searchDatas,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["searchTracks", q],
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
  const debounceSearch = React.useRef<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  >(
    _.debounce((e) => {
      setQ(e.target.value);
    }, 1000)
  );

  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      debounceSearch.current(e);

      return () => {
        queryClient.resetQueries(["searchTracks"], { exact: true });
      };
    },
    [queryClient]
  );

  React.useEffect(() => {
    if (mode) setQ("");

    refInput.current!.value = "";
    if (mode === "searching") refInput.current!.focus();

    return () => {
      if (refInput.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        queryClient.resetQueries(["searchTracks", refInput.current.value], {
          exact: true,
        });
      }
    };
  }, [mode, queryClient]);

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
        <SearchList
          data={searchDatas}
          nextPage={fetchNextPage}
          isRefetching={isRefetching}
          isFechingNextPage={isFetchingNextPage}
          setSearchBarUnmount={setSearchBarUnmount}
        />
      )}
    </>
  );
}

export default Search;
