// import LayoutDashboard from "layout/LayOutDashBoard";
import Campaign from "pages/Campaign";
import Dashboard from "pages/Dashboard";
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"))
const SignInPage = lazy(() => import("./pages/SignInPage"))
function App() {
  return <Routes >
    <Route path="/" element={<Dashboard></Dashboard>}></Route>
    <Route path="/campaign" element={<Campaign></Campaign>}></Route>
    <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
    <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
  </Routes>;
}

export default App;
