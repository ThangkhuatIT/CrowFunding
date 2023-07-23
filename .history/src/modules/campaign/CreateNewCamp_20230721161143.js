import Input from 'components/input/Input';
import { Label } from 'components/label';
import React from 'react';

const CreateNewCamp = () => {
    return (
        <div className='flex flex-col w-full px-16 py-10'>
            <div className=' bg-text4 rounded-[10px]  max-h-[70px] max-w-[380px] items-center justify-center mx-auto'>
                <div className='flex gap-3 py-4 px-[60px]'>
                    <span className='font-bold text-text2'>Start a Campaign</span>
                    <img
                        src='./Rectangle312.png'
                        alt=''
                        className=''
                    />
                </div>
            </div>
            <div>
                <Label>Campaign Titel *</Label>
                <Input></Input>
            </div>
        </div>
    );
};

export default CreateNewCamp;