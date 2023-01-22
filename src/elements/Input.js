import React from 'react';

function Input({ type = 'text', className, ...props }) {
    const classes = [className];
    if (type !== 'range') classes.push('py-1 px-2 ');

    return (
        <input
            type={type}
            {...props}
            className={`border text-gray-900 border-indigo-900/30 rounded-md focus:outline-none antialiased transition duration-200 shadow-sm w-full font-normal placeholder:text-xs placeholder:font-light ${classes.join(
                '',
            )}`}
        />
    );
}

export default Input;
