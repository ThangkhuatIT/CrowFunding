import React from 'react';
import { Link } from "react-router-dom"
import PropsTypes from "prop-types"
import { withErrorBoundary } from "react-error-boundary"
import ErrorComponent from '../components/common/ErrorComponent';
const LayoutAuthentication = ({ children, heading, ...props }) => {
    return (
        <div className='relative w-full min-h-screen p-10 bg-lite dark:bg-darkbg isolate'>
            <Link to="/" className='inline-block mb-5 lg:mb-15 mt'>
                <img src="/logo.png" alt='crowfunding-app' />
            </Link>
            <div className='w-full max-w-[556px] bg-slate-50 dark:bg-darkSecondary rounded-xl px-5 py-8 lg:px-15 lg:py-12 mx-auto text-center'>
                <h1 className='mb-1 text-lg font-semibold lg:text-xl lg:mb-3 text-text1 dark:text-white '>{heading}</h1>
                {children}
            </div>
            <img src="/elements.png" alt='elip' className='absolute bottom-0 left-0 right-0 hidden pointer-events-none lg:block'/>
        </div>
    );
};
LayoutAuthentication.propsTypes = {
    heading : PropsTypes.string,
    children : PropsTypes.node
}
export default withErrorBoundary(LayoutAuthentication, {
    FallBackComponent : ErrorComponent,
});