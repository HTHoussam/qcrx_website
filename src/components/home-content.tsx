import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { MainButton } from './common/styled-components';
import DoctorCard from './doctor-card';
import FeaturesSection from './features-section';
import ImageSlider from './image-slider';
import SpecialList from './special-list';
import TourComponent from './tour-component';
const HomeContent = () => {
  return (
    <ContentBox>
      <Box sx={{ maxWidth: '740px', mx: 'auto' }}>
        <Typography variant="h2" align="center" gutterBottom>
          Customized health solutions, always.
        </Typography>
      </Box>
      <Box textAlign="center" mb={4}>
        <MainButton variant="contained" endIcon={<ArrowOutwardIcon />} color="primary">
          View Our Catalog
        </MainButton>
      </Box>
      <ImageSlider />
      <Box mt={4}>
        <Box
          sx={{
            width: 'fit-content',
            position: 'relative',
            '::after': {
              content: '""',
              position: 'absolute',
              left: 5,
              bottom: 0,
              height: '3px',
              width: '50%',
              borderBottom: '1px solid #00BAD1',
            },
          }}
        >
          <Typography fontSize={'20px'} fontStyle={'italic'} gutterBottom>
            Why Choose QCRx?
          </Typography>
        </Box>
        <Typography fontSize={'30px'} lineHeight={1} gutterBottom>
          Quality and Customer Service are the most important elements of a pharmacy.
        </Typography>
        <FeaturesSection />
      </Box>
      <DoctorCard />
      <SpecialList />
      <TourComponent />
    </ContentBox>
  );
};

export default HomeContent;

const ContentBox = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: '#fff',
  color: 'black',
  gap: 32,
  flexDirection: 'column',
}));
