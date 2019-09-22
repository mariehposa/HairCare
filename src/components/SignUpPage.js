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