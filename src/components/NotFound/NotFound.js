import React from 'react';
import img from '../../images/page-not-found.jpg';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='page-not-found'>
            <h1>Page 404 not found!</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;