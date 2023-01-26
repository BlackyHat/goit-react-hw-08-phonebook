import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { useContacts } from 'hooks';

import * as Yup from 'yup';
import { Formik } from 'formik';
import CustomToast from 'components/Toast';
import FormTextField from 'components/FormTextField';

import { Box } from '@chakra-ui/react';

const schemaAddContact = Yup.object().shape({
  name: Yup.string()
    .required('User name required')
    .min(4, 'Contact name is too short')
    .max(16, 'Contact name is too long'),
  number: Yup.string('Phone number required')
    .required('Phone number required')
    .min(5, 'Phone number is too short, must be 7-10 digits')
    .max(12, 'Phone number is too long, must be 7-10 digits'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ id }) => {
  const dispatch = useDispatch();
  const { items } = useContacts();
  const { addToast } = CustomToast();

  const handleSubmit = (values, { resetForm }) => {
    addNewContact(values);
    resetForm();
  };

  const addNewContact = newContact => {
    if (checkDouble(newContact)) {
      addToast({
        info: `${newContact.name} is already exist in contacts`,
        status: 'error',
      });
      return;
    }
    dispatch(addContact(newContact));
    addToast({
      info: `${newContact.name} added.`,
      status: 'success',
    });
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
        <Box as="form" onSubmit={formik.handleSubmit} id={id}>
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
        </Box>
      )}
    </Formik>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  id: PropTypes.string.isRequired,
};
