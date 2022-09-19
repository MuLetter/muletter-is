import { IconButton } from "@component/common/button";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";
import { fontStyles } from "@styles/font";
import { white } from "@styles/color";
import { SearchBarProps } from "./types";

function SearchBar({ mode, modeChange, refInput, q, setQ }: SearchBarProps) {
  return (
    <Wrap
      onClick={mode === "waiting" ? () => modeChange("searching") : undefined}
    >
      <Input
        ref={refInput}
        type="text"
        placeholder={`${
          mode === "waiting" ? "우체통에 음악을 등록해주세요." : "음악 검색"
        } `}
        disabled={mode === "waiting"}
        mode={mode}
        // value={q}
        onChange={setQ}
      />
      <IconButton
        type="button"
        onClick={() => {
          modeChange(mode === "waiting" ? "searching" : "waiting");
        }}
        className={`mode-change-btn ${mode}`}
      >
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

const Input = styled.input<{ mode: "waiting" | "searching" }>`
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

  ${({ mode }) =>
    mode === "waiting" &&
    css`
      cursor: pointer;
    `}
`;

export default SearchBar;
