import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary"
import ErrorComponent from 'components/common/ErrorComponent';
import PropsTypes from "prop-types"
import React from 'react';
import ClassNames from "utils/ClassNames";
const Input = ({ type, control, name, placeholder, errors = "", children, ...rest }) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    })
    return (
        <div className='relative '>
            <input
                id={name}
                type={type}
                placeholder={errors.length > 0 ? '' : placeholder}
                className = {ClassNames("w-full px-8 py-4 text-sm font-medium border text-text-3  rounded-xl  dark:placeholder:text-text2 dark:text-white bg-transparent dark:border-darkStroke",
                         errors.length > 0 ? ' border-error' : 'border-strock',
                         children ? 'pr-16' : ''
                )}
                {...field}
            />
            <span className='absolute z-50 h-5 cursor-pointer top-2/4 -translate-y-2/4 right-8'>
                {children}
            </span>
            {
                errors.length > 0 &&
                <span className='absolute text-sm font-medium select-none cursor-pointer-none text-error top-2/4 -translate-y-2/4 left-10 '>
                    {errors}
                </span>
            }
        </div>

    );
};

Input.propsTypes = {
    type : PropsTypes.string,
    children : PropsTypes.node
}
export default withErrorBoundary(Input, {
    FallBackComponent : ErrorComponent,
});