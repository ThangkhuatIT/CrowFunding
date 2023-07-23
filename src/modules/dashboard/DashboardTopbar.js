import React from 'react';
import DashboardSearch from './DashboardSearch';
import { Link } from 'react-router-dom';
import DashboardFund from './DashboardFund';
import { Button } from 'components/button';

const DashboardTopbar = () => {
    return (
        <div className='flex items-center justify-between px-[14px]'>
            <div className='flex items-center flex-1 gap-x-10'>
                <Link to="/" className='inline-block'><img src='/Logo.png' alt='Logo' /></Link>
                <div className=" max-w-[458px] w-full">
                    <DashboardSearch></DashboardSearch>
                </div>
            </div>
            <div className="flex items-center justify-end gap-x-10">
                <DashboardFund></DashboardFund>
                <Button
                    className="px-7"
                    type="button"
                    // href="/start-campaign"
                    to='/sign-up'
                    secondary
                >
                    Start a campaign
                </Button>
                <img
                    src="/logo.png"
                    alt="crowfunding-app"
                    className="object-cover rounded-full"
                />
            </div>
        </div>
    );
};

export default DashboardTopbar;