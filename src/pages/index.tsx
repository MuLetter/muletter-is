import { getToken } from "@api";
import { LetterLoading } from "@component/common";
import { tokenState } from "@store/atom";
import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import { useRecoilState } from "recoil";

export * from "./intro";
export * from "./register";
export * from "./ready";
export * from "./recoProcess";
export * from "./muletter";

export function RootPage() {
  const [token, setToken] = useRecoilState(tokenState);

  useQuery(["getToken"], getToken, {
    onSuccess: (data) => {
      setTimeout(() => {
        setToken(data.access_token);
      }, 2000);
    },
  });

  return token ? <Outlet /> : <LetterLoading />;
}
