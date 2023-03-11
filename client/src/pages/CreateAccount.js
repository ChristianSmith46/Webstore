import React from "react";
import Navigation from "../components/Navigation";

function CreateAccount() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main style={{ marginTop: '110px' }}>
                <h1>Create Account</h1>
                <form>
                    <label>Email Address</label>
                    <input type={'email'} placeholder='example@email.com'></input>
                    <label>Confirm Email Address</label>
                    <input type={'email'} placeholder='example@email.com'></input>
                    <label>Password</label>
                    <input type={'password'} placeholder='password'></input>
                    <label>Confirm Password</label>
                    <input type={'password'} placeholder='password'></input>
                    <label>First Name</label>
                    <input type={'text'} placeholder='John'></input>
                    <label>Last Name</label>
                    <input type={'text'} placeholder='Smith'></input>
                    <button type={'submit'}>Create Account</button>
                </form>
            </main>
            <footer>

            </footer>
        </>
    )
}

export default CreateAccount;