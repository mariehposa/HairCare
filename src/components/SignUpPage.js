import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const userForm = {
    name: '',
    username: '',
    email: '',
    password: '',
    location: '',
}

export default function SignUpPage () {
    return (
        <div>
            <h1>Signup</h1>
        </div>
    );
}