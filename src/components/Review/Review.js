import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, userReview, rating, picture } = review;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{userReview}</p>
            <h4><small>Rating: {rating}/5</small></h4>
        </div>
    );
};

export default Review;