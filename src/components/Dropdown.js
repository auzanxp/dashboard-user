import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import Button from '../elements/Button';
import {
    ChevronDownIcon,
    ChevronUpIcon
} from '@heroicons/react/24/solid';

export default function DropDown({ value }) {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    const handleShow = () => setShow(!show);

    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('user')
        navigate('/login');
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-lg bg-amber-200 dark:bg-gray-500 dark:text-gray-50 hover:bg-amber-300 dark:hover:bg-amber-300 dark:hover: focus:outline-none "
                    id="options-menu"
                    onClick={() => handleShow()}
                >
                    {value}
                    {show ? <ChevronUpIcon className="w-5 h-5" /> : <ChevronDownIcon className="w-5 h-5" />}
                </button>
            </div>
            <div
                className={`${show ? 'block' : 'hidden'
                    } origin-top-right absolute right-0 mt-2 w-fit rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5`}
            >
                <Button onClick={() => handleLogout()} isBlock color="red">
                    <span className="flex flex-col">
                        <span>Logout</span>
                    </span>
                </Button>
            </div>
        </div>
    );
}
