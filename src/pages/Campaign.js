import { Button } from 'components/button';
import HeaderCampaign from 'components/common/HeaderCampaign';
import { IconPlus } from 'icons';
import LayoutDashboard from 'layout/LayOutDashBoard';
import CampaignFeature from 'modules/campaign/CampaignFeature';
import React from 'react';

const Campaign = () => {
    return (
        <LayoutDashboard>
            <div className='flex flex-col mr-10'>
                <div className='px-10 py-8 bg-white rounded-[20px] flex justify-between items-center'>
                    <div className=' flex justify-between gap-[25px]'>
                        <div className='w-[54px] h-[54px] flex items-center justify-center rounded-full bg-secondary cursor-pointer'>
                            <IconPlus></IconPlus>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-text1 text-[18px] font-semibold'>Create Your Campaign</h2>
                            <p className='text-sm font-normal text-text3'>Jump right into our editor and create your first Virtue campaign!</p>
                            <p className='text-sm font-normal text-primary'>Need any help? Learn More...</p>
                        </div>
                    </div>
                    <Button className='max-w-[174px] max-h-[52px] bg-bgButton' to="/add-camp"><span className='text-secondary'>Create campaign</span></Button>
                </div>
                <HeaderCampaign number={'(4)'}>Your Campaign</HeaderCampaign>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <Button className='max-w-[174px] max-h-[52px] bg-bgButton mx-auto'><span className='text-secondary'>See more+</span></Button>
                <HeaderCampaign number={'(4)'}>Your Campaign</HeaderCampaign>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <CampaignFeature></CampaignFeature>
                <Button className='max-w-[174px] max-h-[52px] bg-bgButton mx-auto'><span className='text-secondary'>See more+</span></Button>
            </div>
        </LayoutDashboard>
    );
};

export default Campaign;