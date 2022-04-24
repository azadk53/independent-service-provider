import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>
            <h2 className='text-center mt-4'> Difference between authorization and authentication</h2>
            <p className='mx-4'>Authentication is the process which is verify the user. On the other hand Authorization determines what resources(Route) a user can access. Authentication works through user emil and password. Authorization works through by the organization set up. The first step of an identity and access are called Authentication. Authorization is next step of authentication.</p>
            <h2 className='text-center mt-4'>Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className='mx-4'> Firebase is third party authentication system. It has build in libraries to authenticate to our website/app. It's security and authentication system is very strong and easy to handle. We dont have to buld our own backend system for this purpose. There are many options for authentication such as Back4app, AWS amplify, Backendless etc.</p>
        </div>
    );
};

export default Blog;