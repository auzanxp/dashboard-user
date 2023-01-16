import React from 'react'
import { Link } from 'react-router-dom';

export default function Buttons(props) {

    const { className = 'bg-yellow-500', children, text } = props;

    if (props.type === 'link') {
        return (
            <Link {...props} className={`${className} 'flex items-center gap-x-2 text-white px-4 py-2 rounded [&>svg]:w-5 [&>svg]:h-5'`}>
                {text || children}
            </Link>
        );
    } else {
        return (
            <button {...props} className={`${className} 'flex items-center gap-x-2 text-white px-4 py-2 rounded [&>svg]:w-5 [&>svg]:h-5'`}>
                {text || children}
            </button>
        )
    }
}


