import React from "react";
import Navigation from "../components/Navigation";
import SignIn from "./SignIn";

function Account() {
    return (
        <>
            <header>
                <Navigation />
            </header>
            <main style={{ marginTop: '110px' }}>
                <SignIn />
            </main>
            <footer>

            </footer>
        </>

    )
}

export default Account;