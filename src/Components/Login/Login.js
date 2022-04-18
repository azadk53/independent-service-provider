import React, { useState } from 'react';
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)

    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }
    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {

        if (email) {
            await sendPasswordResetEmail(email);
            Toast('Sent email');
        }
        else {
            Toast('please enter your email address');
        }
    }

    return (
        <div>
            <h2 className=' text-center mt-2'>Please Login</h2>
            <Form className='mt-4 w-50 mx-auto' onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handlePasswordChange} />
                </Form.Group>

                <Button className='w-50 d-block mx-auto' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p className='w-50 d-block mx-auto mt-2'>New to Genius Car? <Link to="/register" className='text-primary  mx-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>
            <p className='w-50 d-block mx-auto mt-2'>Forget Password? <button className='btn btn-link text-primary ps-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>

            <ToastContainer />
        </div>
    );
};

export default Login;