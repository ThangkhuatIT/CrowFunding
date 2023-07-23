import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ to, href, onClick = ()=>{}, className = '', disabled = false, children, primary, secondary, ...rest }) => {
    let Comp = 'button'
    const props = {
        to,
        href,
        ...rest
    }
    if (to) {
        Comp = Link
        props.to = to
    } else if (href) {
        Comp = 'a'
        props.href = href
    }
    return (
        <Comp className={`w-full rounded-lg p-3 flex items-center justify-center text-white text-base font-semibold cursor-pointer ${className}
        ${primary ? 'bg-primary' : ''}
        ${secondary ? ' bg-secondary' : ''}
        ${disabled ? 'opacity-50 pointer-events-none' : ''}
        `}
        {...props}
        >
            {children}
        </Comp>
    );
};

export default Button;