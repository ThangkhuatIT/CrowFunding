import React from 'react';

const CampaignCard = () => {
    return (
        <div>
            <div className=' overflow-hidden rounded-2xl h-[158px]'>
                <img
                    src='https://img.delicious.com.au/mGtUggeV/w759-h506-q80-cfill/del/2023/04/lake-como-source-istock-187557-2.jpg'
                    alt='IMG'
                    className='object-cover w-full h-full'
                />
            </div>
            <div className='px-5 py-4'>
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
                <p className='text-base font-semibold text-text1'>Powered Kits Learning Boxes</p>
                <span className='inline-block mb-4 text-xs font-normal text-text3'>
                    Fun, durable and reusable boxes with
                    eco-friendly options.
                </span>
                <div className='flex justify-between mb-5'>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-normal text-text2'>$2,000</p>
                        <span className='text-xs font-normal text-text4'>Raised of $1,900</span>
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-normal text-text2'>173</p>
                        <span className='text-xs font-normal text-text4'>Total backers</span>
                    </div>
                </div>
                <div className='flex items-center justify-start gap-3 mt-auto'>
                    <div>
                        <img
                            src='https://img.delicious.com.au/mGtUggeV/w759-h506-q80-cfill/del/2023/04/lake-como-source-istock-187557-2.jpg'
                            alt='Avatar'
                            className='w-[30px] h-[30px] object-cover rounded-full'
                        />
                    </div>
                    <p className='text-sm font-semibold text-text3'>{`by ${' '}`}<span className='text-text2'>Mahfuzul Nabil</span></p>
                </div>
            </div>
        </div>
    );
};

export default CampaignCard;