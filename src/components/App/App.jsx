import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

import { getIsLoading, getError } from 'redux/selectors';

import Layout from 'components/Layout';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import Filter from 'components/FilterContacts';
import ContactList from 'components/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        {isLoading && !error && <p>Loading...</p>}
        <ContactList />
      </Section>
    </Layout>
  );
};
