import React from "react";

export interface LidStyleProps {
  isOpen: boolean;
}

export interface LidControlProps {
  animationEnd: (isOpen: boolean) => void;
}

export interface LetterStyleProps {
  isView: boolean;
}

export interface LetterControlProps {
  animationEnd: (isView: boolean) => void;
  refLetter: React.RefObject<HTMLDivElement>;
}

export interface MailStyleProps {
  isRotate: boolean;
}

export interface Letter2DStyleProps {
  text?: string;
}

export interface MailControlProps {
  isOpen: boolean;
  refScreen: React.RefObject<HTMLDivElement>;
}
