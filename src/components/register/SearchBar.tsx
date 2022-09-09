import { IconButton } from "@component/common/button";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";
import { fontStyles } from "@styles/font";
import { white } from "@styles/color";
import { SearchBarMode } from "./types";
import React from "react";

function SearchBar() {
  const [mode, setMode] = React.useState<SearchBarMode>("waiting");

  const modeChange = React.useCallback(() => {
    setMode((prev) => (prev === "waiting" ? "searching" : "waiting"));
  }, []);

  return (
    <Wrap>
      <Input
        type="text"
        placeholder={`${
          mode === "waiting" ? "우체통에 음악을 등록해주세요." : "음악 검색"
        } `}
        disabled={mode === "waiting"}
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
