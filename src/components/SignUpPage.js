import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const userForm = {
    name: '',
    username: '',
    email: '',
    password: '',
    location: '',
    terms: false,
}

export default function SignUpPage () {
    return (
        <div>
            <h1>Signup</h1>
        </div>
    );
}

const validateUser = (formValue) => {
    const errors = {};

    if (!formValue.name) {
        errors.name = 'Please enter a valid name!';
    }

    if (!formValue.username) {
        errors.username = 'Please enter a valid username!'
    }

    if(!formValue.email) {
        errors.email = 'Please enter a valid email!';  
    }

    if (!formValue.password) {
        errors.password = 'Please enter a valid password!';
    }

    if (!formValue.terms){
        errors.terms = "Read and accept terms"
    }

    return errors;
}

function NewUserForm() {
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
                        <label>
                            Email
                            <Field name='email' type='text' placeholder='Enter your Email' />
                            <ErrorMessage name='email' component='div' />
                        </label>
                        <br/>
                        <label>
                            Password
                            <Field name='password' type='text' placeholder='Enter your Password' />
                            <ErrorMessage name='password' component='div' />
                        </label>
                        <br/>
                        <label>
                            Type of service
                            <Field component="select" name="service">
                                <option value="stylist">Stylist</option>
                                <option value="customer">Customer</option>
                            </Field>
                            <ErrorMessage name='password' component='div' />
                        </label>
                        <br/>
                        <label>
                            Terms and Agreement
                            <Field name='terms' type='checkbox' />
                            <ErrorMessage name='terms' component='div' />
                        </label>
                        <br/>
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }}
        />
    );
}