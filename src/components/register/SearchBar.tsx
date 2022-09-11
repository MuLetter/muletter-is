import { IconButton } from "@component/common/button";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { fontStyles } from "@styles/font";
import { white } from "@styles/color";
import { SearchBarMode } from "./types";
import React from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getSearch } from "@api";
import { useRecoilValue } from "recoil";
import { tokenState } from "@store/atom";
import _ from "lodash";

function SearchBar() {
  const [q, setQ] = React.useState<string>("");
  const token = useRecoilValue(tokenState);
  const { refetch } = useInfiniteQuery(
    ["searchTracks"],
    async ({ pageParam = 0 }) => {
      const data = await getSearch(token!, q, pageParam);

      return data;
    },
    { enabled: q !== "" }
  );
  const [mode, setMode] = React.useState<SearchBarMode>("waiting");

  const modeChange = React.useCallback(() => {
    setMode((prev) => (prev === "waiting" ? "searching" : "waiting"));
  }, []);

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

  return (
    <Wrap>
      <Input
        type="text"
        placeholder={`${
          mode === "waiting" ? "우체통에 음악을 등록해주세요." : "음악 검색"
        } `}
        disabled={mode === "waiting"}
        value={q}
        onChange={onChange}
      />
      <IconButton onClick={modeChange} className={`mode-change-btn ${mode}`}>
        <MdAdd />
      </IconButton>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 36px;

  column-gap: 12px;

  & > .mode-change-btn {
    transition: 0.3s;
    &.searching {
      transform: rotateZ(135deg);
    }
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;

  ${fontStyles["p2"]}
  color: ${white[500]};

  &::placeholder {
    ${fontStyles["p2"]}
    color: ${white[900]}
  }
`;

export default SearchBar;
