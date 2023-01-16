import React from 'react';
import NavLink from '../../elements/NavItem';
import { useLocation } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/20/solid';

function Topbar({ handleClick }) {
    const location = useLocation();
    let pageName = location.pathname.split('/');
    pageName = pageName[1];

    return (
        <div className="rounded-lg text-gray-800 dark:text-gray-100 bg-gray-50 dark:bg-gray-800 py-3 px-5 mr-5 flex justify-between items-center">
            <div className="flex items-center gap-x-3">
                <Bars3Icon
                    className="w-5 h-5 cursor-pointer hover:text-amber-500 transition duration-200"
                    onClick={() => handleClick()}
                />
                <h2 className="text-lg font-medium capitalize">{pageName} Page</h2>
            </div>
            <div className="flex space-x-2">
                <NavLink href={'/'}>Beranda</NavLink>
            </div>
        </div>
    );
}

export default Topbar;
