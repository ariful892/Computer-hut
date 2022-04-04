import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <nav className="routes">
                <CustomLink className="route" to="/home">Home</CustomLink>
                <CustomLink className="route" to="/reviews">Reviews</CustomLink>
                <CustomLink className="route" to="/dashboard">Dashboard</CustomLink>
                <CustomLink className="route" to="/blogs">Blogs</CustomLink>
                <CustomLink className="route" to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;