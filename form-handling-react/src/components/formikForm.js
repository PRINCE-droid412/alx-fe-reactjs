import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
});

const FormikForm = () => {
  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('Form Submitted:', values);
    alert('User registered successfully!');
    // Simulate API call
    setTimeout(() => {
      resetForm();
    }, 1000);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
          <h2>Register</h2>

          {/* Username Field */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              id="username"
              name="username"
              style={{ display: 'block', width: '100%', margin: '5px 0' }}
            />
            <ErrorMessage name="username" component="div" style={{ color: 'red', fontSize: '12px' }} />
          </div>

          {/* Email Field */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              style={{ display: 'block', width: '100%', margin: '5px 0' }}
            />
            <ErrorMessage name="email" component="div" style={{ color: 'red', fontSize: '12px' }} />
          </div>

          {/* Password Field */}
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              style={{ display: 'block', width: '100%', margin: '5px 0' }}
            />
            <ErrorMessage name="password" component="div" style={{ color: 'red', fontSize: '12px' }} />
          </div>

          {/* Submit Button */}
          <button type="submit" style={{ marginTop: '10px', padding: '10px 20px' }}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
