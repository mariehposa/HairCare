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

function NewUserForm({onSubmitButton}) {
    return(
        <Formik
            render={props => {
                return (
                    <Form>
                        <label>
                            Name
                            <Field name='name' type='text' placeholder='Enter your name' />
                            <ErrorMessage name='name' component='div' />
                        </label>
                        <br/>
                        <label>
                            username
                            <Field name='username' type='text' placeholder='Enter your Name' />
                            <ErrorMessage name='username' component='div' />
                        </label>
                        <br/>
                        <button type='submit'>Login</button>
                    </Form>
                )
            }}
        />
    );
}