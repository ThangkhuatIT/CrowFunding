// import LayoutDashboard from "layout/LayOutDashBoard";
import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"))
const SignInPage = lazy(() => import("./pages/SignInPage"))
const Campaign = lazy(() => import("./pages/Campaign"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const StartCampaign = lazy(() => import("./pages/StartCampaign"))
function App() {
  return <Routes >
    <Route path="/" element={<Dashboard></Dashboard>}></Route>
    <Route path="/campaign" element={<Campaign></Campaign>}></Route>
    <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
    <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
    <Route path="/add-camp" element={<StartCampaign></StartCampaign>}></Route>
  </Routes>;
}

export default App;
