import React from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();

    return (
        <>
            <h1>Sign In</h1>
            <form>
                <label>Email Address</label>
                <input type={'email'} placeholder='example@email.com'></input>
                <label>Password</label>
                <input type={'password'} placeholder='password'></input>
                <button type={'submit'}>Sign In</button>
            </form>
            <button onClick={() => navigate('/create-account')}>Create Account</button>
        </>

    )
}

export default SignIn;