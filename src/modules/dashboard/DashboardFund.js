import React from 'react';

const DashboardFund = () => {
    return (
        <div className='flex items-center gap-1'>
            <span className='flex-shrink-0 text-icon-color'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 8.293L13.707 12.586L9.707 8.586L2 16.293L3.414 17.707L9.707 11.414L13.707 15.414L19.414 9.707L21.707 12V6H15.707L18 8.293Z" fill="#A2A2A8" />
                </svg>
            </span>
            <span className='inline-block w-auto h-6 text-base font-semibold text-text2 whitespace-nowrap'>Fundrising for</span>
            <span className='flex-shrink-0 text-icon-color'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M7 10L12 15L17 10" stroke="#A2A2A8" strokeWidth="2" />
                </svg>
            </span>
        </div>
    );
};

export default DashboardFund;