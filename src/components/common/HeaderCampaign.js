import React from 'react';

const HeaderCampaign = ({children, number}) => {
    return (
        <h2 className='mb-5 text-base font-semibold text-text1'>
            {children} 
            <span className=' text-secondary'>{number}</span>
        </h2>
    );
};

export default HeaderCampaign;