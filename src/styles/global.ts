import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}

    html {
        background: linear-gradient(90deg, #2880D8 0%, #AC73CF 50%, #EE68A4 100%);
        width: 100vw;
        min-width: 1280px;
        min-height: 100vh;

        overflow-y: scroll;
    }

    * { 
        line-height: 1.5em !important;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important; 
        font-style: normal;
    }

    a {
        text-decoration: none;
    }

    * {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
    *::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
    }
`;

export default GlobalStyle;
