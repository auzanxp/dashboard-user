import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, color, ...props }) {
    const classes = [
        'flex items-center tracking-wider justify-center text-sm sm:text-md text-white rounded-md transition duration-200',
    ];

    if (!color) classes.push(' bg-indigo-400 hover:bg-indigo-500');

    if (color === 'yellow') classes.push(' bg-amber-400 hover:bg-amber-500');

    if (color === 'red') classes.push(' bg-red-600  hover:bg-red-700');

    props.isLarge ? classes.push(' py-2 px-4') : classes.push(' py-1 px-3');

    if (props.type === 'link') {
        return (
            <Link to={props.href} className={`${classes.join('')} w-fit gap-x-2 [&>svg]:w-5 [&>svg]:h-5`}>
                {children}
            </Link>
        );
    } else {
        return (
            <button
                onClick={props.onClick}
                type={props.type}
                className={`${classes.join('')} gap-x-2 [&>svg]:w-5 [&>svg]:h-5`}
            >
                {children}
            </button>
        );
    }
}
