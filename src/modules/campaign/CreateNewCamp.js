// import { yupResolver } from '@hookform/resolvers/yup';
import { Dropdown } from 'components/dropdown';
import { Label } from 'components/label';
import { Textarea } from 'components/input';
import "react-quill/dist/quill.snow.css";
import { useForm } from 'react-hook-form';
import axios from "axios";
import FormGroup from 'components/common/FormGroup';
import Input from 'components/input/Input';
import React, { useMemo, useState } from 'react';
import ReactQuill, { Quill } from "react-quill";
import ImageUploader from 'quill-image-uploader';
import { IconOffer } from 'icons';
import { Button } from 'components/button';
Quill.register("modules/imageUploader", ImageUploader);

// import { useForm } from "react-hook-form"
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// const schema = yup.object({
//     email: yup
//         .string()
//         .email("Invalid email address")
//         .required("This field is required"),
//     password: yup
//         .string()
//         .required("This field is required")
//         .min(8, "Password must be 8 character "),
// });
const CreateNewCamp = () => {
    const [content, setContent] = useState('')
    const modules = useMemo(
        () => ({
            toolbar: [
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ header: 1 }, { header: 2 }], // custom button values
                [{ list: "ordered" }, { list: "bullet" }],
                [{ header: [1, 2, 3, 4, 5, 6, false] }],
                ["link", "image"],
            ],
            imageUploader: {
                upload: async (file) => {
                    //   const bodyFormData = new FormData();
                    //   bodyFormData.append("image", file);
                    //   const response = await axios({
                    //     method: "post",
                    //     url: imgbbAPI,
                    //     data: bodyFormData,
                    //     headers: {
                    //       "Content-Type": "multipart/form-data",
                    //     },
                    //   });
                    //   return response.data.data.url;
                },
            },
        }),
        []
    );

    const {
        handleSubmit,
        control,
    } = useForm()
    return (
        <div className='flex flex-col px-16 py-10 bg-white roumded-[10px] gap-10'>
            <div className='bg-text4 rounded-[10px]  max-h-[70px] max-w-[380px] items-center justify-center mx-auto'>
                <div className='flex gap-3 py-4 px-[60px]'>
                    <span className='font-bold text-text2'>Start a Campaign</span>
                    <img
                        src='./Rectangle312.png'
                        alt=''
                        className=''
                    />
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col gap-y-[25px]'>
                    <div className='flex justify-between w-full h-full gap-x-10'>
                        <div className='flex-1 '>
                            <Label>Campaign Titel *</Label>
                            <Input control={control} name="title" placeholder="Write a titel"></Input>
                        </div>
                        <div className='flex-1 '>
                            <Label>Select a category*</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select the category"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Architecture</Dropdown.Option>
                                    <Dropdown.Option>Crypto</Dropdown.Option>
                                    <Dropdown.Option>Crypto</Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </div>
                    </div>
                    <FormGroup>
                        <Label>Short Description *</Label>
                        <Textarea
                            name="short_description"
                            placeholder="Write a short description...."
                            control={control}
                        ></Textarea>
                    </FormGroup>
                    <FormGroup>
                        <Label>Story *</Label>
                        <ReactQuill
                            placeholder="Write your story......"
                            modules={modules}
                            theme="snow"
                            value={content}
                            onChange={() => { }}
                        />
                    </FormGroup>
                    <div className='flex w-full gap-3 text-white  bg-secondary rounded-[10px] items-center justify-center text-base font-medium h-[58px] lg-[120px]'>
                        <IconOffer></IconOffer>
                        <span> You will get 90% of total raised</span>
                    </div>

                    <div className='flex justify-between w-full h-full gap-x-10'>
                        <div className='flex-1 '>
                            <Label>Goal *</Label>
                            <Input control={control} name="goal" placeholder="$0.00 USD"></Input>
                        </div>
                        <div className='flex-1 '>
                            <Label>Raised Amount *</Label>
                            <Input control={control} name="raised" placeholder="$0.00 USD"></Input>
                        </div>
                    </div>
                    <div className='flex justify-between w-full h-full gap-x-10'>
                        <div className='flex-1 '>
                            <Label>Amount Prefilled</Label>
                            <Input control={control} name="amount" placeholder="Amount Prefilled"></Input>
                            <p className='text-text3 font-medium text-sm mt-[15px]'>It will help fill amount box by click, place each amount by
                            comma, ex: 10,20,30,40</p>
                        </div>
                        <div className='flex-1'>
                            <Label>Video</Label>
                            <Input control={control} name="video" placeholder="Video"></Input>
                            <p className='text-text3 font-medium text-sm mt-[15px]'>Place Youtube or Vimeo Video URL</p>
                        </div>
                    </div>
                    <div className='flex justify-between w-full h-full gap-x-10'>
                        <div className='flex-1 '>
                            <Label>Campaign End Method</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select one"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Architecture</Dropdown.Option>
                                    <Dropdown.Option>Crypto</Dropdown.Option>
                                    <Dropdown.Option>Crypto</Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </div>
                        <div className='flex-1 '>
                            <Label>Country</Label>
                            <Dropdown>
                                <Dropdown.Select placeholder="Select a country"></Dropdown.Select>
                                <Dropdown.List>
                                    <Dropdown.Option>Architecture</Dropdown.Option>
                                    <Dropdown.Option>Crypto</Dropdown.Option>
                                    <Dropdown.Option>Crypto</Dropdown.Option>
                                </Dropdown.List>
                            </Dropdown>
                        </div>
                    </div>
                    <div className='flex justify-between w-full h-full gap-x-10'>
                        <div className='flex-1 '>
                            <Label>Start Date</Label>
                            <Input control={control} name="startDate" placeholder="Start Date"></Input>
                        </div>
                        <div className='flex-1 '>
                            <Label>End Date</Label>
                            <Input control={control} name="endDate" placeholder="End Date"></Input>
                        </div>
                    </div>
                    <Button primary className='mx-auto mt-auto w-fit'>Submit new campaign</Button>
                </div>
            </form>
        </div>
    );
};

export default CreateNewCamp;