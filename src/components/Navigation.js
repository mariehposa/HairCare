import React from "react";
import { Link } from 'react-router-dom';

export default function Navigation () {
    return (
        <div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">SignUp</Link>
            </div>
        </div>
    );
}