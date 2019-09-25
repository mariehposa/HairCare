import React from "react";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import {SignUpStyle, StyledField , StyledButton} from './Styles';

const userForm = {
    name: '',
    username: '',
    email: '',
    password: '',
    location: '',
    service: 'customer',
    terms: false,
}

export default function SignUpPage () {
    const addUser = (formValues, actions) => {
        const userToSubmit = {
            name: formValues.name,
            username: formValues.username,
            email: formValues.email,
            password: formValues.password,
            location: formValues.location,
            service: formValues.service,
        };

        console.log(userToSubmit);
        actions.resetForm();
    }

    return (
        <div>
            <NewUserForm onSubmitButton={addUser}/>
        </div>
    );
}

const validateUser = (formValue) => {
    const errors = {};

    if (!formValue.name) {
        errors.name = 'Name is required!';
    }

    if (!formValue.username) {
        errors.username = 'Username is required!'
    }

    if(!formValue.email) {
        errors.email = 'Email is required!';  
    }

    if (!formValue.password) {
        errors.password = 'Password is required!';
    }

    if (!formValue.location) {
        errors.location = 'Location is required!';
    } else if (formValue.location.length < 2) {
        errors.location = 'Oops! That is short!';
    }

    if (!formValue.terms){
        errors.terms = "Read and accept terms"
    }

    return errors;
}

const userValidation = yup.object().shape({
    name: yup.string().required('Use correct name!'),
    username: yup.string().required('Use correct username!'),
    email: yup.string().required('Enter valid email!').email("Enter a valid email containing @"),
    password: yup.string().required('Input correct password!'),
    location: yup.string().required('Location is required!'),
    terms: yup.boolean().required("box is required")
})

function NewUserForm({onSubmitButton}) {
    return(
        <Formik
            validationSchema={userValidation}
            validate={validateUser}
            initialValues={userForm}
            onSubmit={onSubmitButton}
            render={props => {
                return (
                    <SignUpStyle>
                        <h3>Create an account</h3>
                        <label>
                            Name
                            <StyledField name='name' type='text' placeholder='Enter your name' />
                            <ErrorMessage name='name' component='div' />
                        </label>
                        <label>
                            Username
                            <StyledField name='username' type='text' placeholder='Enter your Name' />
                            <ErrorMessage name='username' component='div' />
                        </label>
                        <label>
                            Email
                            <StyledField name='email' type='text' placeholder='Enter your Email' />
                            <ErrorMessage name='email' component='div' />
                        </label>
                        <label>
                            Password
                            <StyledField name='password' type='text' placeholder='Enter your Password' />
                            <ErrorMessage name='password' component='div' />
                        </label>
                        <label>
                            Location
                            <StyledField name='location' type='text' placeholder='Enter your Location' />
                            <ErrorMessage name='location' component='div' />
                        </label>
                        <label>
                            Type of service
                            <StyledField component="select" name="service">
                                <option value="customer">Customer</option>
                                <option value="stylist">Stylist</option>
                            </StyledField>
                            <ErrorMessage name='service' component='div' />
                        </label>
                        <label>
                            Terms and Agreement
                            <StyledField name='terms' type='checkbox' />
                            <ErrorMessage name='terms' component='div' />
                        </label>
                        <StyledButton type='submit'>Sign Up</StyledButton>
                    </SignUpStyle>
                )
            }}
        />
    );
}