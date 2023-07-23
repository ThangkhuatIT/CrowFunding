import LayoutDashboard from 'layout/LayOutDashBoard';
import CreateNewCamp from 'modules/campaign/CreateNewCamp';
import React from 'react';

const StartCampaign = () => {
    return (
        <LayoutDashboard>
            <CreateNewCamp></CreateNewCamp>
        </LayoutDashboard>
    );
};

export default StartCampaign;