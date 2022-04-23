import React from 'react';
import './ReviewDetail.css'

const ReviewDetail = ({ review }) => {
    return (
        <div className='review-row'>
            <div className='review-col'>
                <h3>{review.name}</h3>
                <p>{review.comment}</p>

            </div>
        </div>
    );
};

export default ReviewDetail;