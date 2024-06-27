import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import TopNavBar from './top-nav-bar';

const MainLayout = () => {
  return (
    <>
      <TopNavBar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default MainLayout;
