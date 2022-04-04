import React from 'react';

const Review = ({ review }) => {
    const { name, userReview, rating } = review;
    return (
        <div>
            <h4>{name}</h4>
            <p>{userReview}</p>
            <p><small>Rating: {rating}/5</small></p>
        </div>
    );
};

export default Review;