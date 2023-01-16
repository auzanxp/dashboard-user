import React from 'react';
import Brand from '../../elements/Brand';
import SideNavLink from '../../elements/SideNavLink';
import {
    TableCellsIcon,
    BookOpenIcon
} from '@heroicons/react/24/solid';
import { useLocation } from 'react-router-dom';

export default function Sidebar() {
    const locationPath = useLocation().pathname;

    return (
        <>
            <div className="mb-4 pb-2 border-b-2 border-b-gray-300 py-6 px-5">
                <Brand isSmall />
            </div>
            <div className="border-b">
                <SideNavLink
                    href="/dashboard"
                    name="dashboard"
                    active={locationPath === '/dashboard' && true}
                    icon={<BookOpenIcon />}
                />
                <SideNavLink
                    href="/list"
                    name="list"
                    active={locationPath === '/list' && true}
                    icon={<TableCellsIcon />}
                />
            </div>
        </>
    );
}
