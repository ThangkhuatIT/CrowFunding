import React from 'react';

const CheckBox = ({ onClick = () => { }, children, isChecked = true, className = '', ...rest }) => {
    return (
        <div className={`flex items-center justify-start ${className}`}>
            <div
                className={`cursor-pointer inline-flex items-center justify-center p-1 text-white w-5 h-5 border-2 rounded 
                ${isChecked ? 'bg-primary border-primary' : 'border-strock'}`
                }
                onClick={onClick}>
                <input
                    type="checkbox"
                    className="hidden"
                    onChange={() => { }}
                />
                <span className={` ${isChecked ? '' : 'opacity-0 invisible'}`}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
            </div>
            <span className='ml-4 text-base font-medium text-text3'>{children}</span>
        </div>
    );
};

export default CheckBox;