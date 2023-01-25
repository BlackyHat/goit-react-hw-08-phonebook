import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';

import { Formik } from 'formik';
import * as Yup from 'yup';

import { Box, Button } from '@chakra-ui/react';
import { FormTextField } from 'components/FormTextField/FormTextField';

const schemaAddContact = Yup.object().shape({
  email: Yup.string()
    .required('Login name required')
    .min(4, 'Login name is too short')
    .max(32, 'Login name is too long'),
  password: Yup.string()
    .required('Password number required')
    .min(7, 'Password number is too short, must be 7-10 digits')
    .max(32, 'Password number is too long, must be 7-10 digits'),
});

const initialValues = {
  email: '',
  password: '',
};

const LogInPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaAddContact}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Box as="form" onSubmit={formik.handleSubmit} py="32" w="100%">
          <FormTextField
            label="E-mail"
            type="email"
            name="email"
            required
            placeholder="input your e-mail"
            mb="4"
          />
          <FormTextField
            label="Password"
            name="password"
            type="password"
            required
            placeholder="input your password"
          />
          <Button
            type="submit"
            colorScheme="teal"
            variant="outline"
            mt="8"
            w="100%"
          >
            Log in
          </Button>
        </Box>
      )}
    </Formik>
  );
};

export default LogInPage;
