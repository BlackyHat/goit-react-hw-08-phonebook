import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import { Formik } from 'formik';

import * as Yup from 'yup';

import { Box, Button } from '@chakra-ui/react';
import { FormTextField } from 'components/FormTextField/FormTextField';

const schemaAddContact = Yup.object().shape({
  name: Yup.string()
    .required('User name required')
    .min(4, 'Contact name is too short')
    .max(32, 'Contact name is too long'),
  number: Yup.string()
    .required('Phone number required')
    .min(7, 'Phone number is too short, must be 7-10 digits')
    .max(10, 'Phone number is too long, must be 7-10 digits'),
});

const initialValues = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const items = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    addNewContact(values);
    resetForm();
  };

  const addNewContact = newContact => {
    checkDouble(newContact)
      ? alert(`${newContact.name} is already exist in contacts`)
      : dispatch(addContact(newContact));
  };
  const checkDouble = newContact => {
    return items.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schemaAddContact}
      onSubmit={handleSubmit}
    >
      {formik => (
        <Box as="form" onSubmit={formik.handleSubmit}>
          <FormTextField
            label="Name"
            type="text"
            name="name"
            required
            autoComplete="false"
            placeholder="input your name"
          />
          <FormTextField
            label="Number"
            name="number"
            type="tel"
            required
            placeholder="input your number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          />
          <Button type="submit" colorScheme="teal" variant="outline" mt="8">
            Add contact
          </Button>
        </Box>
      )}
    </Formik>
  );
}
