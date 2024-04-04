import React from 'react';
import {Outlet, Link } from 'react-router-dom';
import Chart from './Chart';

const NavBar = () => {

    return (
        <nav>
            <h1>The Lord of the Rings</h1>
            <Link style={{color: "white"}}className="home-link" to="/">
                Home to the Shire
            </Link>
        </nav>
    )
}

export default NavBar;