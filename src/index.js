import "./index.scss";
import { BrowserRouter } from "react-router-dom"
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/configureStore";
import App from "./App";
import React, { Suspense } from "react";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = createRoot(container);
// window.onload = function () {
//   const main1 = document.getElementById("main1");
//   main1.addEventListener("mousemove", (e) => {
//     e.target.classList.remove("overflow-y-hidden");
//     e.target.classList.add("overflow-y-auto");
//   });

//   main1.addEventListener("mouseout", (e) => {
//     e.target.classList.remove("overflow-y-auto");
//     e.target.classList.add("overflow-y-hidden");
//   });
// }

root.render(
  <Suspense >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
