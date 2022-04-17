import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/realtor1.jpg'
import banner2 from '../../../images/banner/realtor2.jpg'
import banner3 from '../../../images/banner/realtor3.jpg'

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: '90vh' }}
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h2 className='text-dark'>Welcome to Home Advisor</h2>
                        <p className='text-dark'>Take a seat and relax I'VE GOT YOUR BACK.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '90vh' }}
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-dark'>Welcome to Home Advisor</h2>
                        <p className='text-dark'>Take a seat and relax I'VE GOT YOUR BACK.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: '90vh' }}
                        className="d-block w-100 "
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h2 className='text-dark'>Welcome to Home Advisor</h2>
                        <p className='text-dark'>Take a seat and relax I'VE GOT YOUR BACK.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;