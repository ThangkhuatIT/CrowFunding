import { Button } from 'components/button';
import HeaderCampaign from 'components/common/HeaderCampaign';
import { IconPlus } from 'icons';
import CampaignFeature from 'modules/campaign/CampaignFeature';
import React, { Fragment } from 'react';

const Campaign = () => {
    return (
        <Fragment>
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
                {
                    Array(4).fill(0).map(item =>
                    (
                        <CampaignFeature className='max-h-[266px]'></CampaignFeature>
                    )
                    )
                }
                <CampaignFeature className='max-h-[266px]'></CampaignFeature>
                {
                    Array(4).fill(0).map(item =>
                    (
                        <CampaignFeature className='max-h-[266px]'></CampaignFeature>
                    )
                    )
                }
                <Button className='max-w-[174px] max-h-[52px] bg-bgButton mx-auto'><span className='text-secondary'>See more+</span></Button>
                <HeaderCampaign number={'(4)'}>Your Campaign</HeaderCampaign>
                {
                    Array(4).fill(0).map(item =>
                    (
                        <CampaignFeature className='max-h-[266px]'></CampaignFeature>
                    )
                    )
                }
                <Button className='max-w-[174px] max-h-[52px] bg-bgButton mx-auto'><span className='text-secondary'>See more+</span></Button>
            </div>
        </Fragment>
    );
};

export default Campaign;