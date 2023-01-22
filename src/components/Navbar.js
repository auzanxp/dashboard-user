import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { KeyIcon } from '@heroicons/react/24/solid';
import Brand from '../elements/Brand';
import Button from '../elements/Button';
import NavItem from '../elements/NavItem';
import DropDown from './Dropdown';

function Navbar(props) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (user === null) {
            setUser(Cookies.get('user'))
        }
    }, [user])

    return (
        <>
            <div className="fixed top-0 z-40 flex items-center justify-between w-full p-4 border-b container-fluid dark:border-b-gray-600 backdrop-blur-sm">
                <Brand />
                <div className="flex items-center justify-end gap-5">
                    {
                        !Cookies.get('token') ?
                            <NavItem href='/'>Beranda</NavItem> : <NavItem href="/dashboard">Dashboard</NavItem>
                    }
                    {!Cookies.get('token') ? (
                        <Button type="link" href="/login" color="yellow">
                            <KeyIcon className="w-2 h-2 sm:h-4 sm:w-4" />
                            Login
                        </Button>
                    ) : (
                        <DropDown value={user} />
                    )}
                </div>
            </div>
            {props.children}
        </>
    );
}

export default Navbar;
