import { MailBox3D } from "@asset/symbols";
import { OpacityAnimationCont } from "@styles/block";
import React from "react";
import SearchBar from "./SearchBar";
import SearchList from "./SearchList";
import { RegisterCont } from "./styles";

function RegisterComponent() {
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
          <SearchBar />
          <SearchList />
        </MailBox3D>
      </RegisterCont>
    </OpacityAnimationCont>
  );
}

export default RegisterComponent;
