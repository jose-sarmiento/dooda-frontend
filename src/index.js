import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./assets/sass/main.scss";
import App from "./App";

export const AppContext = React.createContext({});

const value = {};

ReactDOM.render(
    <React.StrictMode>
        <AppContext.Provider value={value}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AppContext.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
