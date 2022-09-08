import { white } from "@styles/color";
import React from "react";
import styled, { css } from "styled-components";
import { Letter2DText } from "./Items2D";
import { Back, Front, Letter, Lid } from "./Items3D";
import { Letter2DStyleProps, MailStyleProps } from "./types";

export function Mail3D() {
  const [rotate] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [letterView, setLetterView] = React.useState<boolean>(false);

  // open 액션용
  const changeLetterView = React.useCallback((state: boolean) => {
    setLetterView(state);
  }, []);

  // close action 용
  const changeLid = React.useCallback((state: boolean) => {
    setOpen(state);
  }, []);

  return (
    <Mail>
      <MailWrap
        isRotate={rotate}
        onClick={letterView ? () => setLetterView(false) : () => setOpen(true)}
      >
        <Back />
        <Letter isView={letterView} animationEnd={changeLid} />
        <Front />
        <Lid isOpen={open} animationEnd={changeLetterView} />
      </MailWrap>
    </Mail>
  );
}

const Mail = styled.div`
  // 단순히 3D 효과용
  perspective: 2000px;
`;

const MailWrap = styled.div<MailStyleProps>`
  transform-style: preserve-3d;
  position: relative;
  width: 600px;
  height: 400px;

  & > * {
    position: absolute;
    top: 0;
    left: 0;
  }

  transition: 0.5s ease-out;
  transform-origin: 50% 50%;

  ${({ isRotate }) =>
    isRotate &&
    css`
      transform: rotateY(-40deg) rotateX(25deg);
    `}
`;

export function Mail2D() {
  return (
    <svg
      className="mail 2d"
      xmlns="https://www.w3.org/2000/svg"
      width={150}
      height={100}
      viewBox="0 0 150 100"
    >
      <path
        d="
        M 0 0
        L 0 100
        L 150 100
        L 150 0
        L 75 50
        L 0 0
        L 150 0
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

export function Mail2DOpen() {
  return (
    <svg
      className="mail 2d open"
      xmlns="https://www.w3.org/2000/svg"
      width={150}
      height={150}
      viewBox="0 0 150 150"
    >
      <path
        d="
        M 0 50
        L 0 150
        L 150 150
        L 150 50
        L 75 100
        L 0 50
        L 75 0
        L 150 50
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
    </svg>
  );
}

export function Mail2DLetter({ text }: Letter2DStyleProps) {
  return (
    <svg
      className="mail 2d letter"
      xmlns="https://www.w3.org/2000/svg"
      width={150}
      height={160}
      viewBox="0 0 150 160"
    >
      <path
        d="
        M 0 60
        L 0 160
        L 150 160
        L 150 60
        L 75 110
        L 0 60
        L 10 50
        M 150 60
        L 140 50
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
      <path
        d="
        M 10 66
        L 10 0
        L 140 0
        L 140 66
        "
        stroke={white[500]}
        strokeWidth={2}
        fill="none"
      />
      {text && (
        <Letter2DText
          alignmentBaseline="central"
          x={75}
          y={40}
          textAnchor="middle"
        >
          {text}
        </Letter2DText>
      )}
    </svg>
  );
}
