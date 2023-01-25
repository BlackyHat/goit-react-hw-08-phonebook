import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Button } from '@chakra-ui/react';
import { FormTextField } from 'components/FormTextField/FormTextField';

const schemaAddContact = Yup.object().shape({
  name: Yup.string()
    .required('Login name required')
    .min(4, 'Login name is too short')
    .max(32, 'Login name is too long'),
  password: Yup.string()
    .required('Password required')
    .min(4, 'Password is too short, min 4 digits')
    .max(32, 'Password is too long, max 32 digits'),
  email: Yup.string()
    .required('Email required')
    .min(4, 'Email is too short')
    .max(32, 'Email is too long'),
});

const initialValues = {
  name: '',
  password: '',
  email: '',
};

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { name, email, password } = values;
    dispatch(register({ name, email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaAddContact}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Box as="form" onSubmit={formik.handleSubmit} w="100%" py="28">
          <FormTextField
            label="Login"
            type="text"
            name="name"
            required
            placeholder="input your login"
            mb="4"
          />
          <FormTextField
            label="Password"
            name="password"
            type="password"
            required
            mb="4"
            placeholder="input your password"
          />
          <FormTextField
            label="E-mail"
            name="email"
            type="email"
            required
            placeholder="input your e-mail"
          />
          <Button
            type="submit"
            colorScheme="teal"
            variant="outline"
            mt="8"
            w="100%"
          >
            Sign up
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default SignUp;
