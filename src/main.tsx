import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme, theme } from "@chakra-ui/react";
import App from "./App";
import { Global } from "@emotion/react";

const customTheme: Record<string, any> = extendTheme(theme, {
  fonts: {
    body: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    heading: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Global
        styles={`
        @font-face {
          font-family: 'Montserrat';
          font-style: cursive;
          font-display: swap;
          font-weight: 400;
          src: url('/montserrat-all-400-normal.woff') format('woff');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
      `}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
