import { IconStar } from 'icons';
import React from 'react';

const CampaignFeature = ({ children, profile, className }) => {
    return (
        <div className='flex gap-8 mb-8 max-w-[1048px]'>
            <div className={`w-[583px] ${className} `}>
                <img
                    src='https://4.bp.blogspot.com/-1McoVG93b8A/XuJcKgQjgnI/AAAAAAAAIck/yWsMxJOJrAAIoqwZPdwcEONDBp790YFjQCLcBGAsYHQ/s1600/travel-on-own.jpg'
                    alt=''
                    className='object-cover w-full h-full rounded-3xl '
                />
            </div>
            <div className='flex-1 pt-4'>
                <div className='flex items-center justify-start gap-3 mb-4 text-text3'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <g clipPath="url(#clip0_2278_5424)">
                                <path d="M6.8775 4.5L8.3775 6H15V13.5H3V4.5H6.8775ZM7.5 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V6C16.5 5.175 15.825 4.5 15 4.5H9L7.5 3Z" fill="#808191" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2278_5424">
                                    <rect width="18" height="18" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                    <span className='text-xs font-medium'>Education</span>
                </div>
                <p className='text-base font-semibold text-text1'>Remake - We Make architecture exhibition</p>
                <span className='inline-block pr-5 mb-4 text-xs font-normal text-text3'>
                    Remake - We Make: an exhibition about architecture's social
                    agency in the face of urbanisation
                </span>
                {
                    profile &&
                    <div className='flex gap-5'>
                        <div className='flex items-center w-[60] h-[60px]'>
                            <img
                                src="/logo.png"
                                alt="crowfunding-app"
                                className="object-cover w-full h-full rounded-full "
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex gap-2'>
                                <span>Saiful Islam</span>
                                <span className='flex gap-[2px]'>
                                    <IconStar></IconStar>
                                    <IconStar></IconStar>
                                    <IconStar></IconStar>
                                    <IconStar></IconStar>
                                    <IconStar></IconStar>
                                    <IconStar></IconStar>
                                </span>
                            </div>
                            <div className='flex gap-3'>
                                <span className='text-sm font-semibold text-primary'>02 Campaign</span>
                                <span className='text-sm font-normal text-text3 '>Dhaka, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                }
                <div className='relative h-[4px] w-[433px] rounded bg-rectagle my-5 overflow-hidden'>
                    <div className=' absolute h-[4px] w-[275px] bg-primary top-0 left-0 rounded'></div>
                </div>
                <div className='flex justify-between mb-5'>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-normal text-text2'>$2,000</p>
                        <span className='text-xs font-normal text-text4'>Raised of $1,900</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-normal text-text2'>173</p>
                        <span className='text-xs font-normal text-text4'>Total backers</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-normal text-text2'>30</p>
                        <span className='text-xs font-normal text-text4'>Days left</span>
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
};

export default CampaignFeature;
