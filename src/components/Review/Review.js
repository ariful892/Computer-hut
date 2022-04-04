import React from 'react';

const Review = ({ review }) => {
    const { name, rating } = review;
    return (
        <div>
            <h4>{name}</h4>
        </div>
    );
};

export default Review;