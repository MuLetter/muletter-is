import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from "@styles/global";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Audio from "@component/common/audio";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      retryDelay: 3000,
    },
  },
});
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={client}>
    <ReactQueryDevtools />
    <RecoilRoot>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
      <Audio />
    </RecoilRoot>
  </QueryClientProvider>
);

reportWebVitals();
