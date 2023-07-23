import React from 'react';
import PropsTypes from "prop-types"
const Label = ({children, htmlFor, className, ...rest}) => {
    return (
        <label htmlFor={htmlFor} className={`inline-block text-sm font-medium cursor-pointer text-text2 py-3 self-start dark:text-text3 ${className}`}>
            {children}
        </label>
    );
};
Label.propsTypes = {
    children : PropsTypes.node,
    htmlFor : PropsTypes.string,
}
export default Label;