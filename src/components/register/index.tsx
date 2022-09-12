import { MailBox3D } from "@asset/symbols";
import { OpacityAnimationCont } from "@styles/block";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RegisterCont } from "./styles";

export function RegisterComponent({ children }: React.PropsWithChildren<any>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);
  const [content, setContentView] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const registerAction = React.useCallback(() => {
    setContentView(false);

    setTimeout(() => {
      setTopAnchor(false);
      setOpen(false);
      setRotate(false);

      setTimeout(() => {
        navigate("/step2");
      }, 1000);
    }, 750);
  }, [navigate]);

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
        <MailBox3D
          rotate={rotate}
          topAnchor={topAnchor}
          open={open}
          button={{
            buttons: [{ title: "등록하기", clickAction: registerAction }],
          }}
          content={content}
          setContentView={setContentView}
        >
          {children}
        </MailBox3D>
      </RegisterCont>
    </OpacityAnimationCont>
  );
}
