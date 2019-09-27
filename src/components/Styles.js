import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';
import header from './img/header.jpg'
import ReactCardFlip from 'react-card-flip';

export const NavigationStyle = styled.div`
    display: flex;
    flex-direction:column;
    width: 20%;
    background-color:white;
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0; 
    left: 0;
    overflow-x: hidden; 
    overflow-y: hidden;
    padding: 1rem 0;
`

export const SvgStyle = styled.svg`
    width: 1.5rem;
    color: linear-gradient(to right, rgb(156, 48, 165), rgb(168, 0, 13)) ;
    transition: all 0.3s;
    margin: 0 1rem;
    margin-top: 1.3rem;

    &:hover{
        transition: all 0.3s;
        color: black;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: linear-gradient(to right, rgb(156, 48, 165), rgb(168, 0, 13)) ;
    font-family: helvetica;
    font-size: 1.3rem;
    transition: all 0.3s;

    &:hover{
        transition: all 0.3s;
        color: black;
    }
`

export const StyledAnchor = styled.a`
    text-decoration: none;
    color: linear-gradient(to right, rgb(156, 48, 165), rgb(168, 0, 13)) ;
    font-family: helvetica;
    font-size: 1.3rem;
    transition: all 0.3s;

    &:hover{
        transition: all 0.3s;
        color: black;
    }
`

export const StyledDiv = styled.div`
    margin:2rem 0;
`

export const LoginStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    border: .1rem solid whitesmoke ;
    padding: 2rem 0;
    border-radius: 2rem;
    box-shadow: 10rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
    margin-top: 5rem;
`

export const SignUpStyle = styled(Form)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    border: .1rem solid whitesmoke ;
    box-shadow: .5rem;
    padding: 2rem 0;
    border-radius: 2rem;
    margin: 0 auto;
    font-family: 'Oswald', sans-serif;
    margin-top: 5rem;
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
    width: 80%;
    background:url(${header}); 
    background-size: cover;
    height: 40.08rem;
    margin-top: -.4rem;
    overflow-y: hidden;
`

export const ParentStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
	width: 100%;
	overflow: auto;
`
export const StyledFlip = styled(ReactCardFlip)`
    padding: .3rem 2rem;
    width:35%;
`
export const StylistStyle = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    /* margin: 2rem 3rem; */
    margin-top: 2rem;
    margin-left: 3rem;
    margin-right: 3rem;
    border: .2rem solid;
    border-radius: 2rem;
    padding: 0 2rem;
    color: whitesmoke;
    font-family: 'Oswald', sans-serif;
    height: 20rem;

    &:hover{
        border: .2rem solid green;
        border-radius: 2rem;
        color: black;
    }

   img{
       border-radius: 5rem;
       width: 100%;
       height: 15rem;
       margin-top: 2.5rem;
   }

    h2{
        color: black;
        font-family: 'Italianno', cursive;
        font-size: 3rem;

        &:hover{
            color: whitesmoke;

        }
    }
`
export const SearchStyle = styled(Field)`
    padding: 1rem;
    font-family: 'Oswald', sans-serif;
    margin-top: .5rem;
`

export const SearchButton = styled.button`
   padding: .7rem;
   border-radius: 2rem;
   background:  #9da3a4;
   color: #604d53;
   margin-left: 1rem;
   align-content: center;
`

export const StyledPage = styled.div`
    width:80%;
`

export const NavPlace = styled.div`
  width: 20%;
`