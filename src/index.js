import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { HashRouter } from "react-router-dom";
import { FavouritesContextProvider } from "./store/favourites-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FavouritesContextProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </FavouritesContextProvider>
  </React.StrictMode>
);
