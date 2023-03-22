import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const navigate = useNavigate();
    const [password, setPassword]= useState('');
    const [email, setEmail] = useState('');

    return (
        <>
            <h1>Sign In</h1>
            <form>
                <label>Email Address</label>
                <input type={'email'} placeholder='example@email.com' value={email} onChange={(event) => setEmail(event.target.value)}></input>
                <label>Password</label>
                <input type={'password'} placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)}></input>
                <button type={'submit'}>Sign In</button>
            </form>
            <button onClick={() => navigate('/create-account')}>Create Account</button>
        </>

    )
}

export default SignIn;