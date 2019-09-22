import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const userForm = {
    username: '',
    password: '',
}

export default function LoginPage () {
    const loginInUser = (formValues, actions) => {
        const userToLogin = {
            username: formValues.username,
            password: formValues.password
        };

        console.log(userToLogin);
        actions.resetForm();
    }

    return (
        <div>
            <NewUserForm onLoginButton={loginInUser}/>
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

function NewUserForm({onLoginButton}) {
    return(
        <Formik
            validationSchema={userValidation}
            validate={validateUser}
            initialValues={userForm}
            onSubmit={onLoginButton}
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