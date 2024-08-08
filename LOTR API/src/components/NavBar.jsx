import React from 'react';
import {Outlet, Link, useLocation} from 'react-router-dom';

const NavBar = () => {

    const location = useLocation();

    const navStyle = location.pathname !== "/"
        ? {backgroundColor: "transparent", position: "fixed", width: "100%", boxShadow: "none"}
        : {position: "fixed"};

    const linkStyle = {color: "white", position: "absolute", right: "50px", top: "10px"};

    return (
        <nav style={navStyle}>
            {location.pathname === "/" && <h1>The Lord of the Rings</h1>}
            <Link style={linkStyle}className="home-link" to="/">
                Home to the Shire
            </Link>
        </nav>
    )
}

export default NavBar