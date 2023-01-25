import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { Field, useField } from 'formik';

export const FormTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      <FormLabel>{label}</FormLabel>
      <Field as={Input} {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};
