import { MailBox3D } from "@asset/symbols";
import { OpacityAnimationCont } from "@styles/block";
import React from "react";
import { RegisterCont } from "./styles";

function RegisterComponent({ children }: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);

  const opacityAnimationEnd = React.useCallback(() => {
    setRotate(true);

    setTimeout(() => {
      setTopAnchor(true);
      setOpen(true);
    }, 750);
  }, []);

  return (
    <OpacityAnimationCont animationEnd={opacityAnimationEnd}>
      <RegisterCont>
        <MailBox3D rotate={rotate} topAnchor={topAnchor} open={open}>
          {children}
        </MailBox3D>
      </RegisterCont>
    </OpacityAnimationCont>
  );
}

export default RegisterComponent;
