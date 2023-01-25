// import { lazy } from 'react';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout';
// import LogIn from './LogIn/LogIn';
// import SignUp from 'pages/SignUp';
// import LogInComponent from './LogIn/LogIn';
import Contacts from 'pages/Contacts';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/auth-operations';
// import Login from 'pages/Login';

const HomePage = lazy(() => import('../pages/HomePage'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const SignUp = lazy(() => import('../pages/SignUp'));
// const AddContacts = lazy(() => import('components/AddContacts'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Contacts />}></Route>
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    )
  );
};
