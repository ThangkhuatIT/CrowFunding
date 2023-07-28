import React from 'react';
const FormGroup = ({children}) => {
    return (
        <div className='flex flex-col'>
            {children}
        </div>
    );
};

export default FormGroup;