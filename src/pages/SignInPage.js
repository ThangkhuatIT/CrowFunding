
import { Button } from 'components/button';
import { IconEyetoggle } from 'icons';
import { Input } from 'components/input';
import { Label } from 'components/label';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputGroup from 'components/common/FormGroup';
import LayoutAuthentication from 'layout/LayoutAuthentication';
import useToggleValue from 'hooks/Toggle';

const schema = yup.object({
    email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
    password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be 8 character "),
});
const SignInPage = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    })

    const { value: showPassword, handleToggleValue: handleTogglePassword } = useToggleValue();
    return (
        <LayoutAuthentication heading='Welcome Back!'>
            <p className='mb-6 text-xs font-normal text-center text-text3 lg:font-medium lg:text-sm lg:mb-8'>
                Dont have an account?{" "}
                <Link to="/sign-up" className='font-medium underline text-primary'>Sign up</Link>
            </p>
            <button className="flex items-center justify-center w-full py-3 mb-5 text-base font-semibold border gap-x-3 border-strock rounded-xl text-text2 dark:border-darkStroke dark:text-white">
                <img src='Google.png' alt='icon-gg' />
                <span>Sign up with google</span>
            </button>
            <form onSubmit={handleSubmit}>
                <InputGroup>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        control={control}
                        name="email"
                        placeholder="example@gmail.com"
                        errors={errors.email?.message}
                    >
                    </Input>
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="password">Password *</Label>
                    <Input
                        control={control}
                        name="password"
                        placeholder="Create a password"
                        icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M7 10L12 15L17 10" stroke="#A2A2A8" strokeWidth="2" />
                        </svg>}
                        errors={errors.password?.message}
                        type={`${showPassword ? 'text' : 'password'}`}
                    >
                        <IconEyetoggle onClick={handleTogglePassword} open={showPassword}></IconEyetoggle>
                    </Input>
                </InputGroup>
                <div className='flex justify-end py-3 my-3 cursor-pointer'><p className='text-sm font-medium text-primary '>Forgot password</p></div>
                <Button primary >Sign In</Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;