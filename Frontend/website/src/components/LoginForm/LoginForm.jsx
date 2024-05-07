import React, { useState } from 'react';
import './LoginForm.css';
import axios from 'axios'
import HomePage from '../../pages/HomePage';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const navigate = useNavigate();
    const handleSignUpClick = () => {
        const container = document.getElementById('login-container');
        container.classList.add("login-right-panel-active");
    };

    const handleSignInClick = () => {
        const container = document.getElementById('login-container');
        container.classList.remove("login-right-panel-active");
    };

    const [firstName, setFirstName] = useState()
    const [lastName, setlastName] = useState()
    const [phoneNumber, setPhoneNumber] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if all required fields are filled
        if (!firstName || !lastName || !phoneNumber || !email || !password) {
            return toast.error("All fields are required");
        }
        axios.post('http://localhost:3000/api/clients', { firstName, lastName, phoneNumber, email, password })
            .then(result => {
                console.log(result);
                // Check if the response contains an error message
                if (result.data.message) {
                    // Display error message if there's an error
                    toast.error(result.data.message);
                } else {
                    // Display success message if signup is successful
                    toast.success('Signup Successfully');
                    handleSignInClick();
                }
            })
            .catch(err => {
                console.log(err);
                // Display error message if there's an error with the request
                toast.error('Email Already exist');
            });
    };
    

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3000/api/login', {email, password})
        .then(result => {console.log(result) 
            if (result.data === "the password is incorrect"){
                toast.error('the password is incorrect')
            }else if (result.data === "the email is incorrect"){
                toast.error('User does not exist')
            }
            else{
                sessionStorage.setItem('uniqueId', result.data)
                toast.success('Welcome Back')
                navigate('/')

            }
        
        })
        
        .catch(err => console.log(err))
    }



    return (
        <div className="login-container" id="login-container">
            <div className="login-form-container login-sign-up-container">
                <form action="POST" onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" placeholder="lastName" value={lastName} onChange={(e) => setlastName(e.target.value)}/>
                    <input type="tel" placeholder="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleSignUpClick}>Sign Up</button>
                </form>
            </div>

            
            <div className="login-form-container login-sign-in-container">
                <form action="POST" onSubmit={handleSubmitLogin}>
                    <h1>Sign in</h1>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <button onClick={handleSignInClick}>Sign In</button>
                </form>
            </div>
            
            <div className="login-overlay-container">
                <div className="login-overlay">
                    <div className="login-overlay-panel login-overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="login-ghost" id="login-signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="login-overlay-panel login-overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="login-ghost" id="login-signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
