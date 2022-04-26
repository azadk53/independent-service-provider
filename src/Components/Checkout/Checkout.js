import React from 'react';
import Services from '../Services/Services';
import './Checkout.css';

const Checkout = () => {
    return (
        <div className='checkout-container'>
            <h1 className='mt-4 text-center'>Welcome to Our Home Realtor Services </h1>
            <p className=' text-center'>You can book an appointment for any of our services.</p>
            <Services></Services>
        </div>
    );
};

export default Checkout;