import React, { useState } from "react";
import Navigation from "../components/Navigation";

function CreateAccount() {

    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main style={{ marginTop: '110px' }}>
                <h1>Create Account</h1>
                <form>
                    <label>Email Address</label>
                    <input type={'email'} placeholder='example@email.com' value={email} onChange={(event)=>setEmail(event.target.value)}></input>
                    <label>Confirm Email Address</label>
                    <input type={'email'} placeholder='example@email.com' value={emailConfirm} onChange={(event)=>setEmailConfirm(event.target.value)}></input>
                    <label>Password</label>
                    <input type={'password'} placeholder='password' value={password} onChange={(event)=>setPassword(event.target.value)}></input>
                    <label>Confirm Password</label>
                    <input type={'password'} placeholder='password' value={passwordConfirm} onChange={(event)=>setPasswordConfirm(event.target.value)}></input>
                    <label>First Name</label>
                    <input type={'text'} placeholder='John' value={firstName} onChange={(event)=>setFirstName(event.target.value)}></input>
                    <label>Last Name</label>
                    <input type={'text'} placeholder='Smith' value={lastName} onChange={(event)=>setLastName(event.target.value)}></input>
                    <button type={'submit'}>Create Account</button>
                </form>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default CreateAccount;