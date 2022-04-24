import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        navigate('/home');
    }

    return (
        <div className='register-form'>
            <h2 className='text-center mt-2'>Please Register</h2>
            <form className='mt-4 w-50 mx-auto d-flex flex-column' onSubmit={handleRegister}>
                <input className='border border-1 px-1 py-1 mt-4 w-50 mx-auto' type="text" name="name" id="" placeholder='Your Name' />

                <input className='border border-1 px-1 py-1 mt-4 w-50 mx-auto' type="email" name="email" id="" placeholder='Email Address' required />

                <input className='border border-1 px-1 py-1 mt-4 w-50 mx-auto' type="password" name="password" id="" placeholder='Password' required />

                <input

                    className='w-50 mx-auto btn btn-primary mt-4'
                    type="submit"
                    value="Register" />
            </form>
            <p className='mt-2 text-center'>Already have an account? <Link to="/login" className='text-primary mx-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;