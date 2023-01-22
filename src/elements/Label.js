import React from 'react';

export default function Label(props) {
    return (
        <label {...props} className="block mb-2 text-gray-600 dark:text-gray-100">
            {props.children}
        </label>
    );
}
