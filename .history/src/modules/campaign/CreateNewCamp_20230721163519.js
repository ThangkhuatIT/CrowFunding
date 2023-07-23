import Input from 'components/input/Input';
import { Label } from 'components/label';
import React from 'react';

import { Button } from 'components/button';
import { IconEyetoggle } from 'icons';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputGroup from 'components/common/inputGroup';
import LayoutAuthentication from 'layout/LayoutAuthentication';
import useToggleValue from 'hooks/Toggle';

const CreateNewCamp = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    })
    return (
        <div className='flex flex-col px-16 py-10 bg-white roumded-[10px]'>
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
            <form>
                <div className='w-10 h-10'>
                    <Label>Campaign Titel *</Label>
                    <Input placeholder="Write a titel"></Input>
                </div>
            </form>
        </div>
    );
};

export default CreateNewCamp;