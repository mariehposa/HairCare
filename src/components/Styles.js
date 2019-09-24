import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

export const NavigationStyle = styled.div`
    display: flex;
    justify-content: flex-end;
`
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: navy blue;
    font-family: helvetica;
    margin-right: 2rem;
`

export const LoginStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    border: .2rem solid ;
    padding: 2rem 0;
    border-radius: 2rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
`

export const SignUpStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border: .2rem solid ;
    padding: 2rem 0;
    border-radius: 2rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
`

export const StyledField = styled(Field)`
    width: 45%;
    padding: .7rem;
    margin: 1rem ;
`

export const StyledButton = styled.button`
   width: 20%;
   padding: 1.2rem;
   border-radius: 2rem;
   background:  #9da3a4;
   color: #604d53;
   margin: 0 auto;
   align-content: center;
`

export const StyledHeader = styled.h1`
    font-family: 'Amatic SC', cursive;
`