import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Container } from '@chakra-ui/react';
import { Header } from 'components/Header/Header';

export default function Layout() {
  return (
    <>
      <Header />
      <Container maxW="2xl" centerContent>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}
