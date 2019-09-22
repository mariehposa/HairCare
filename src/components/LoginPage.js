import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const userForm = {
    username: '',
    password: '',
}

export default function LoginPage () {
    return (
        <div>
            <h1>Login</h1>
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

function NewUserForm({onSubmitButton}) {
    return(
        <Formik
            render={props => {
                return (
                    <Form>
                        <label>
                            Username
                            <Field name='username' type='text' placeholder='Enter your name' />
                            <ErrorMessage name='username' component='div' />
                        </label>
                        <br/>
                        <label>
                            Password
                            <Field name='password' type='text' placeholder='Enter your Name' />
                            <ErrorMessage name='password' component='div' />
                        </label>
                        <br/>
                        <button type='submit'>Login</button>
                    </Form>
                )
            }}
        />
    );
}