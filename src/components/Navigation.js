import React from "react";
import {NavigationStyle, StyledLink} from './Styles';

export default function Navigation () {
    return (
        <NavigationStyle>
            <div>
                <StyledLink to="/">Home</StyledLink>
            </div>
            <div>
                <StyledLink to="/login">Login</StyledLink>
            </div>
            <div>
                <StyledLink to="/signup">SignUp</StyledLink>
            </div>
            <div>
                <StyledLink to="/search">Search</StyledLink>
            </div>
        </NavigationStyle>
    );
}