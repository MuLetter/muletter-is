import { IntroPage, RegisterPage } from "@page";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { tokenState } from "@store/atom";
import { LetterLoading } from "@component/common";
import React from "react";

function App() {
  const [token, setToken] = useRecoilState(tokenState);

  React.useEffect(() => {
    setTimeout(() => setToken("a"), 3000);
  }, [setToken]);

  return token ? (
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route path="/step1" element={<RegisterPage />} />
    </Routes>
  ) : (
    <LetterLoading />
  );
}

export default App;
