import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import AppBar from 'components/AppBar';

export default function Layout() {
  return (
    <>
      <AppBar />
      <Container maxW="2xl" centerContent>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
