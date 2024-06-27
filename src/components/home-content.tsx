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
        <MainButton variant="contained" color="primary">
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
      {/* <Stack flexDirection={'row'} minHeight={'450px'}>
        <Stack
          sx={{
            backgroundColor: 'transparent',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '40%',
            gap: '30px',
          }}
          flex={0.35}
        >
          <Typography fontSize={'40px'} lineHeight={1} fontWeight={600} gutterBottom>
            We specialize in medications for
          </Typography>
          <Typography lineHeight={1.2} fontSize={'16px'}>
            Nec purus adipiscing pellentesque ultrices in viverra amet. Sit egestas mi platea nisl est.
          </Typography>
          <Stack direction={'row'} gap={'12px'}>
            <MainButton
              sx={{
                color: 'white',
              }}
            >
              Register as Provider
            </MainButton>

            <MainButton
              sx={{
                color: 'white',
                backgroundColor: '#00BAD1',
              }}
            >
              Register as Patient
            </MainButton>
          </Stack>
        </Stack>
        <Stack flex={1} direction="row" gap={'24px'} overflow={'hidden'}>
          {Array.from({ length: 3 }).map((_, idx) => (
            <Box flex={1} key={idx} sx={{ position: 'relative', display: 'flex', alignItems: 'end' }}>
              <img
                src="/assets/imgs/person_3.jpg"
                height={'545px'}
                width={'395px'}
                style={{ objectFit: 'fill', borderRadius: 26 }}
                alt="image-01"
              />
              <Stack
                sx={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  backgroundColor: '#FFFFFF',
                  width: '349px',
                  borderRadius: '20px',
                  position: 'absolute',
                  bottom: 50,
                  left: 0,
                  transform: 'translate(8%, 50%)',
                  height: '64px',
                  alignItems: 'center',
                  padding: '4px 12px',
                  color: '#194894',
                }}
              >
                <Typography fontSize={'22px'}>Men's Health</Typography>
                <Box
                  sx={{
                    width: '48px',
                    aspectRatio: '1',
                    borderRadius: '50%',
                    backgroundColor: '#194894',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <ImportContacts sx={{ width: '25px', height: '25px', color: 'white' }} />
                </Box>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Stack> */}
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
