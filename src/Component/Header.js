import { Link } from "react-router-dom";

// import React, { Component } from 'react'
function Header() {
    return (  
        <header>
            <h1><Link to="/">Logo</Link></h1>
            <nav>
                <ol>
                    <li>About</li>
                    <li>Policy</li>
                    <li>Sign In</li>
                    <li>Sign Up</li>
                </ol>
            </nav>
        </header>
    );
}

export default Header;