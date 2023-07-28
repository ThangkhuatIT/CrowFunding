import { CampaignCard } from 'modules/campaign/campaignCard';
import { v4 } from 'uuid';
import CampaignGrid from 'modules/campaign/campaignCard/CampaignGrid';
import HeaderCampaign from 'components/common/HeaderCampaign';
import React, { Fragment } from 'react';
import CampaignFeature from 'modules/campaign/CampaignFeature';

const Dashboard = () => {
    return (
        <Fragment>
            <div className='m-5'>
                <HeaderCampaign number={` (4)`}>
                    Your Campaign
                </HeaderCampaign>
                <CampaignFeature></CampaignFeature>
                <HeaderCampaign>
                    Popular Campaign
                </HeaderCampaign>
                <CampaignGrid>
                    {
                        Array(4).fill(0).map(item =>
                        (
                            <CampaignCard key={v4()}>
    
                            </CampaignCard>
                        )
                        )
                    }
                </CampaignGrid>
                <HeaderCampaign>
                    Popular Campaign
                </HeaderCampaign>
                <CampaignGrid>
                    {
                        Array(4).fill(0).map(item =>
                        (
                            <CampaignCard key={v4()}>
    
                            </CampaignCard>
                        )
                        )
                    }
                </CampaignGrid>
            </div>
        </Fragment>
    );
};

export default Dashboard;