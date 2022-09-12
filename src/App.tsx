import {
  IntroPage,
  MuLetterPage,
  ReadyPage,
  RecoProcessPage,
  RegisterPage,
  RootPage,
} from "@page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootPage />}>
        <Route index element={<IntroPage />} />
        <Route path="/step1" element={<RegisterPage />} />
        <Route path="/step2" element={<ReadyPage />} />
        <Route path="/step3" element={<RecoProcessPage />} />
        <Route path="/step4" element={<MuLetterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
