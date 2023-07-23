import React from 'react';

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

const inputGroup = ({children}) => {
    return (
        <div className='flex flex-col'>
            {children}
        </div>
    );
};

export default inputGroup;