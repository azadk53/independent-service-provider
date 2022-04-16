import React from 'react';
import notfound from '../../images/notfound/not-found.jpg'

const NotFound = () => {
    return (
        <div>
            <img
                style={{ height: '90vh' }}
                className='w-100'
                src={notfound} alt="" />
        </div>
    );
};

export default NotFound;