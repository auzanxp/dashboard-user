import React from 'react';
import Brand from '../elements/Brand';
import NavItem from '../elements/NavItem';

function Navbar(props) {


    return (
        <>
            <div className="container-fluid border-b dark:border-b-gray-600 fixed top-0 w-full backdrop-blur-sm flex justify-between items-center z-40 p-4">
                <Brand />
                <div className="flex justify-end items-center gap-5">
                    <NavItem href="/dashboard">Dashboard</NavItem>
                </div>
            </div>
            {props.children}
        </>
    );
}

export default Navbar;
