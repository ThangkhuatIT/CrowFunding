
import { Button } from 'components/button';
import { CheckBox } from 'components/checkBox';
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

const schema = yup.object({
    name: yup.string().required("This field is required"),
    email: yup
        .string()
        .email("Invalid email address")
        .required("This field is required"),
    password: yup
        .string()
        .required("This field is required")
        .min(8, "Password must be 8 character "),
});
const SignUpPage = () => {
    const {
        handleSubmit,
        control,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema),
        mode: "onSubmit",
    })
    const { value: checked, handleToggleValue: handleChecked } =
        useToggleValue();
    const { value: showPassword, handleToggleValue: handleTogglePassword } =
        useToggleValue();
    return (
        <LayoutAuthentication heading='Sign Up'>
            <p className='mb-6 text-xs font-normal text-center text-text3 lg:font-medium lg:text-sm lg:mb-8'>
                Already have an account?{" "}
                <Link to="/sign-in" className='font-medium underline text-primary'>Sign in</Link>
            </p>
            <Button className='flex items-center gap-2 dark:border-darkStroke dark:text-white border-strock'>
                <img src='Google.png' alt='icon-gg' />
                <span className='text-text2'>Sign up with google</span>
            </Button>
            <p className="my-5 text-xs font-normal text-center lg:text-sm text-text2">Or sign up with email</p>
            <form onSubmit={handleSubmit((d) => console.log(d))}>
                <InputGroup>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                        control={control}
                        name="name"
                        placeholder="Jhon Doe"
                        errors={errors.name?.message}
                    >
                    </Input>
                </InputGroup>
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
                        type={`${ showPassword ? 'text' : 'password'}`}
                    >
                        <IconEyetoggle onClick={handleTogglePassword} open={showPassword}></IconEyetoggle>
                    </Input>
                </InputGroup>
                <CheckBox onClick={handleChecked} isChecked={checked} className='py-6'>
                    <p className='py-2 mr-10 text-xs font-normal text-start lg:text-sm text-text2 lg:mr-20'>
                        I agree to the <span className='underline text-secondary'>Tearms of Use</span>
                        and have read and understand the <span className='underline text-secondary'>Privacy policy</span>.
                    </p>
                </CheckBox>
                <Button primary >Create my account</Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;