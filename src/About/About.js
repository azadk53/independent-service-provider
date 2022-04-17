import React from 'react';
import mypic from '../images/about/my.jpg'

const About = () => {
    return (
        <div>
            <div className='d-flex m-4 row align-items-center'>
                <div className='col col-lg-6'>
                    <img className='w-50 rounded-circle d-block mx-auto mt-4' src={mypic} alt="" />
                </div>
                <div className='col col-lg-6'>
                    <h3 className='text-center mt-4'>Abul Kalam Azad</h3>
                    <p>I am a frontend web developer. I want to build a good user experience responsive website. I have already known HTML,CSS, Javascript. Rightnow I am learning React library to update myself. Everyday I am learning a little bit more. I have also a plan to learn backend. I hope I will able to develop myself as a fullstack developer at the end of this year. </p>
                </div>
            </div>
        </div>
    );
};

export default About;