import { Box } from '@mui/material';
import HomeContent from './components/home-content';
import TopNavBar from './components/top-nav-bar';

function App() {
  return (
    <>
      <TopNavBar />
      <Box
        sx={{
          backgroundColor: 'transparent',
          paddingX: {
            xs: 2, // 0-600px
            sm: 4, // 600-960px
            md: 6, // 960-1280px
            lg: 8, // 1280-1920px
            xl: 10, // 1920px and up
          },
          paddingY: {
            xs: 4,
            sm: 6,
            md: 8,
            lg: 10,
            xl: 12,
          },
        }}
      >
        <HomeContent />
      </Box>
    </>
  );
}

export default App;
