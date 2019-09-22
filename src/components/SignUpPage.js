import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

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
        errors.name = 'Name is reguired!';
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
                            Location
                            <Field name='location' type='text' placeholder='Enter your Location' />
                            <ErrorMessage name='location' component='div' />
                        </label>
                        <br/>
                        <label>
                            Type of service
                            <Field component="select" name="service">
                                <option value="customer">Customer</option>
                                <option value="stylist">Stylist</option>
                            </Field>
                            <ErrorMessage name='service' component='div' />
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