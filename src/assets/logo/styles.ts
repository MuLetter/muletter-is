import { white } from "@styles/color";
import { fontStyles } from "@styles/font";
import styled, { css } from "styled-components";
import { SmallLogoStyleProps } from "./types";

export const SmallSVG = styled.svg<SmallLogoStyleProps>`
  & > text {
    ${fontStyles["h1"]}

    ${({ type }) =>
      type === "outline"
        ? css`
            fill: none;
            stroke: ${white[500]};
            stroke-width: 1;
          `
        : css`
            fill: ${white[500]};
          `}
  }
`;
