export interface LidStyleProps {
  isOpen: boolean;
}

export interface ContentStyleProps {
  isView: boolean;
}

export interface ContentControlProps {
  animationEnd: (state: boolean) => void;
}

export interface MailBoxControlProps {
  rotate: boolean;
  topAnchor: boolean;
  open: boolean;
}
