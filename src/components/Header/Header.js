import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (

        <nav className="routes">
            <CustomLink className="route" to="/home">HOME</CustomLink>
            <CustomLink className="route" to="/reviews">REVIEWS</CustomLink>
            <CustomLink className="route" to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink className="route" to="/blogs">BLOGS</CustomLink>
            <CustomLink className="route" to="/about">ABOUT</CustomLink>
        </nav>

    );
};

export default Header;