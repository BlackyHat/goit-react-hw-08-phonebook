import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { refreshUser } from 'redux/auth/auth-operations';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Layout from 'components/Layout';

const HomePage = lazy(() => import('../pages/HomePage'));
const Contacts = lazy(() => import('../pages/Contacts'));
const LogInPage = lazy(() => import('../pages/LogInPage'));
const Register = lazy(() => import('../pages/Register'));

export const App = () => {
  const dispatch = useDispatch();

  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>'Fetching...'</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Contacts />}></Route>
        <Route
          path="/contacts"
          element={<PrivateRoute component={Contacts} redirectTo="/login" />}
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LogInPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={Register} redirectTo="/contacts" />
          }
        />

        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
