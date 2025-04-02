import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required')
});

function FormikForm() {
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // Here you would typically call your API
    console.log('Form submitted:', values);
    alert('Registration successful!');
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{color: 'red'}} />
          </div>
          
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{color: 'red'}} />
          </div>
          
          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{color: 'red'}} />
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;