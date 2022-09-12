export interface LidStyleProps {
  isOpen: boolean;
}

export interface ContentStyleProps {
  isView: boolean;
}

export interface ContentControlProps {}

export interface ButtonProps {
  title: string;
  clickAction: () => void;
}

export interface ButtonContentProps {
  buttons: ButtonProps[];
}

export interface MailBoxControlProps {
  rotate: boolean;
  topAnchor: boolean;
  open: boolean;
  button?: ButtonContentProps;
  content: boolean;
  setContentView: (state: boolean) => void;
}
