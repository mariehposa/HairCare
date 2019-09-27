import React from "react";
import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from "yup";
import {SearchStyle, SearchButton} from './Styles';

const initialUserForm = {
  name: '',
}

const validate = (formValues) => {
  const errors = {};

  //checking if searchName is correct
  if (!formValues.name) {
      errors.name = 'Please enter a valid name!';
  } else if (formValues.name.length < 2) {
      errors.name = 'Oops! That is short!';
  }
}

//to check for letters and numbers
const validation = yup.object().shape({
  name: yup.string().required('Please enter correct name!'),
})

export default function SearchPage({onSubmit}) {
  return (
    <section>

     <Formik
            validationSchema= {validation}
            initialValues={initialUserForm}
            validate= {validate}
            onSubmit={onSubmit}
            render={props => {
                return (
                    <Form>
                        <label>
                            <SearchStyle name='name' type='text' placeholder='Search for stylist...' />
                            <ErrorMessage name='name' component='div' />
                        </label>
                        <SearchButton type='submit'>Search</SearchButton>
                    </Form>
                )
            }}
        />
    </section>
  );
}
