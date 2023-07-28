import { Button } from 'components/button';
import { v4 } from 'uuid';
import CampaignFeature from './CampaignFeature';
import CampaignGrid from './CampaignGrid';
import CampaignPerk from './CampaignPerk';
import CampaignSupport from './CampaignSupport';
import React, { Fragment } from 'react';
import { CampaignCard } from './campaignCard';

const CampaignView = () => {
    return (
        <Fragment>
            <div className='flex flex-col ml-10'>
                <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white text-[40px] font-bold mb-10 gradient-banner">
                    <h1>Education</h1>
                </div>
                <CampaignFeature profile className='max-h-[332px] pt-4'>
                    <Button primary>Back this project</Button>
                </CampaignFeature>
                <div className='flex gap-5 ml-[80px]'>
                    {
                        Array(4).fill(0).map(item =>
                        (
                            <img
                                key={v4()}
                                src='https://static.kinhtedothi.vn/w900/images/upload/2022/08/15/c507755adb301e6e4721.jpg'
                                alt=''
                                className='max-w-[90px] max-h-[70px] object-cover rounded-[5px]'
                            />
                        )
                        )
                    }
                </div>
            </div>
            <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
                <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
                    <span className="cursor-pointer text-secondary">Campaign</span>
                </div>
                <Button className="text-white bg-primary max-w-[180px]">Back this project</Button>
            </div>
            <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
                <div>
                    <h2 className="mb-5 text-lg font-semibold uppercase">Story</h2>
                    <div className="w-full bg-white"></div>
                </div>
                <div>
                    <CampaignSupport></CampaignSupport>
                    <div className="mb-[60px]"></div>
                    <div className="flex flex-col gap-y-[30px]">
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                        <CampaignPerk></CampaignPerk>
                    </div>
                </div>
            </div>
            <h2 className="mb-10 text-xl font-semibold">
                You also may be interested in
            </h2>
            <CampaignGrid>
                <CampaignCard></CampaignCard>
                <CampaignCard></CampaignCard>
                <CampaignCard></CampaignCard>
                <CampaignCard></CampaignCard>
            </CampaignGrid>
        </Fragment>
    );
};

export default CampaignView;