import { MailBox3D } from "@asset/symbols";
import Search from "@container/register/Search";
import { generalAlertState } from "@store/atom";
import { selectTracksState } from "@store/mailbox/atom";
import { OpacityAnimationCont } from "@styles/block";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { MailBoxWrap, RegisterCont } from "./styles";
import { SearchBarMode } from "./types";

export function RegisterComponent({ children }: React.PropsWithChildren<any>) {
  const setAlert = useSetRecoilState(generalAlertState);
  const selectedItems = useRecoilValue(selectTracksState);
  const [open, setOpen] = React.useState<boolean>(false);
  const [rotate, setRotate] = React.useState<boolean>(false);
  const [topAnchor, setTopAnchor] = React.useState<boolean>(false);
  const [content, setContentView] = React.useState<boolean>(false);
  const [mode, setMode] = React.useState<SearchBarMode>("waiting");
  const [searchBarUnmount, setSearchBarUnmount] = React.useState<boolean>(true);
  const [regist, setRegist] = React.useState<boolean>(false);
  const navigate = useNavigate();

  const register = React.useCallback(() => {
    if (selectedItems.length === 0) {
      setRegist(false);
      setAlert({
        message: "음악을 등록하신 후에 진행해주세요.",
      });
      return;
    }

    setContentView(false);
    setTimeout(() => {
      setTopAnchor(false);
      setOpen(false);
      setRotate(false);

      setTimeout(() => {
        navigate("/step2", {
          replace: true,
        });
      }, 1000);
    }, 750);
  }, [navigate, selectedItems, setAlert]);

  React.useEffect(() => {
    if (searchBarUnmount && regist) {
      register();
    }
  }, [searchBarUnmount, regist, register]);

  const registerAction = React.useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (mode === "searching") {
        setMode("waiting");
        setTimeout(() => {
          setRegist(true);
        }, 300);
      } else {
        setRegist(true);
      }
    },
    [mode]
  );

  const opacityAnimationEnd = React.useCallback(() => {
    setRotate(true);

    setTimeout(() => {
      setTopAnchor(true);
      setOpen(true);
    }, 750);
  }, []);

  return (
    <OpacityAnimationCont animationEnd={opacityAnimationEnd}>
      <RegisterCont onSubmit={registerAction}>
        <MailBoxWrap>
          <MailBox3D
            rotate={rotate}
            topAnchor={topAnchor}
            open={open}
            button={{
              buttons: [
                {
                  title: "등록하기",
                  type: "submit",
                },
              ],
            }}
            content={content}
            setContentView={setContentView}
          >
            <Search
              mode={mode}
              setMode={setMode}
              setSearchBarUnmount={setSearchBarUnmount}
            />
          </MailBox3D>
        </MailBoxWrap>
      </RegisterCont>
    </OpacityAnimationCont>
  );
}
