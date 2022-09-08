import { IntroPage } from "@page";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IntroPage />} />
    </Routes>
  );
}

export default App;
