import { Box } from '@mui/material';
import HomeContent from './components/home-content';
import TopNavBar from './components/top-nav-bar';

function App() {
  return (
    <>
      <TopNavBar />
      <Box sx={{ backgroundColor: 'transparent', paddingX: 8, paddingY: 12 }}>
        <HomeContent />
      </Box>
    </>
  );
}

export default App;
