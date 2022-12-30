import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme} sx={{ backgroundColor: "black" }}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,

  document.getElementById("root")
);
