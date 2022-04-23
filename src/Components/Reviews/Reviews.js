import React, { useEffect, useState } from 'react';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='reviews'>
            <h2>What Our Customers Say</h2>
            <div className='review-container'>

                {
                    reviews.map(review => <ReviewDetail key={review.id} review={review}></ReviewDetail>)
                }
            </div>
        </div>
    );
};

export default Reviews;