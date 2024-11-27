import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import store from "./app/store";
import { ConfigProvider } from "antd";
import theme from "./config/theme.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </Provider>
  </StrictMode>
);
