import PropTypes from 'prop-types';

import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Field, useField } from 'formik';

const FormTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormTextField;

FormTextField.propTypes = {
  label: PropTypes.string.isRequired,
};
