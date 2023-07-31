
import { Routes, Route } from "react-router-dom";
import LayoutDashboard from "layout/LayOutDashBoard";
import React, { Suspense, lazy } from "react";

import Modal from 'react-modal';
const Campaign = lazy(() => import("./pages/Campaign"))
const CampaignView = lazy(() => import("./modules/campaign/CampaignView"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const SignInPage = lazy(() => import("./pages/SignInPage"))
const SignUpPage = lazy(() => import("./pages/SignUpPage"))
const StartCampaign = lazy(() => import("./pages/StartCampaign"))

const customStyles = {
  content: {
  },
};
Modal.setAppElement('#root');
Modal.defaultStyles = {};
function App() {
  return (
    <Suspense>
      <Routes >
        <Route element={<LayoutDashboard></LayoutDashboard>}>
          <Route path="/" element={<Dashboard></Dashboard>}></Route>
          <Route path="/campaign" element={<Campaign></Campaign>}></Route>
          <Route path="/add-camp" element={<StartCampaign></StartCampaign>}></Route>
          <Route path="/campaign/:slug" element={<CampaignView></CampaignView>}></Route>
        </Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </Suspense>
  )
}

export default App;
