import React from 'react';
import './Review.css'

const Review = ({ review }) => {
    const { name, userReview, rating, picture } = review;
    return (
        <div className='review'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>{userReview}</p>
            <h5><small>Rating: {rating}/5</small></h5>
        </div>
    );
};

export default Review;