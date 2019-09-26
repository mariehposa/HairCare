import React from "react";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { LoginStyle, StyledField, StyledButton } from './Styles';
import axios from 'axios';

const userForm = {
    username: '',
    password: '',
}

export default function LoginPage() {
    const loginInUser = (formValues, actions) => {
        const userToLogin = {
            username: formValues.username,
            password: formValues.password
        };

        console.log(userToLogin);
        
        axios.post(`https://haircarebackend.herokuapp.com/api/stylists/login`, { username: userToLogin.username, password: userToLogin.password })
        .then(res => {
            console.log(res.data);
            localStorage.setItem("token", res.data)

            console.log(localStorage.getItem("token"));
            
        })
        .catch(err => {
            console.log(err);
        })
        actions.resetForm();
    }

    return (
        <div>
            <NewUserForm onLoginButton={loginInUser} />
        </div>
    );
}

const validateUser = (formValue) => {
    const errors = {};

    if (!formValue.username) {
        errors.username = 'Name is reguired!';
    }

    if (!formValue.password) {
        errors.password = 'Username is required!'
    }
}

const userValidation = yup.object().shape({
    username: yup.string().required('Use correct username!'),
    password: yup.string().required('Input correct password!')
})

function NewUserForm({ onLoginButton }) {
    return (
        <Formik
            validationSchema={userValidation}
            validate={validateUser}
            initialValues={userForm}
            onSubmit={onLoginButton}
            render={props => {
                return (
                    <LoginStyle>
                        <label>
                            <div>Username</div>
                            <StyledField name='username' type='text' placeholder='Enter your name' />
                            <ErrorMessage name='username' component='div' />
                        </label>
                        <label>
                            <div>Password</div>
                            <StyledField name='password' type='text' placeholder='Enter your Name' />
                            <ErrorMessage name='password' component='div' />
                        </label>
                        <StyledButton type='submit'>Login</StyledButton>
                    </LoginStyle>
                )
            }}
        />
    );
}