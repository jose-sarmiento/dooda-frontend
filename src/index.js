import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/sass/main.scss";
import "./assets/arrows.css";
import "./assets/basic.css";
import "./assets/ecommerce.css";
import App from "./App";

import AppProvider from "./context"

ReactDOM.render(
        <AppProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppProvider>,
    document.getElementById("root")
);
