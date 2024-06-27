import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Card, CardMedia, Grid, Stack, Typography } from '@mui/material';
import { MainButton } from './common/styled-components';
const images = [
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
];

const TourComponent = () => {
  return (
    <Stack sx={{ padding: 4, alignItems: 'center', gap: '12px' }}>
      <Typography variant="h4" fontSize={'42px'} fontWeight={'800'} align="center" maxWidth={'450px'} gutterBottom>
        A Picture's Worth a Thousand Words
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{ width: '80%', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {images.map((image, index) => (
          <Grid
            item
            xs={6}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                borderRadius: '20px',
                width: '100%',
              }}
            >
              {index === 4 ? (
                <Box
                  display="flex"
                  sx={{
                    borderRadius: '20px',
                    aspectRatio: 1 / 1,
                    flexDirection: 'column',

                    alignItems: 'center',
                  }}
                  justifyContent="center"
                  mt={4}
                >
                  <Typography
                    variant="h3"
                    align="center"
                    sx={{
                      fontFamily: 'Great Vibes, cursive',
                      fontSize: '36px',
                    }}
                    gutterBottom
                  >
                    Tour QCRx
                  </Typography>
                  <MainButton
                    sx={{
                      width: 'fit-content',
                      height: 'max-content',
                      fontSize: '12px',
                      alignItems: 'center',
                    }}
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowOutwardIcon />}
                  >
                    View Tour Now
                  </MainButton>
                </Box>
              ) : (
                <CardMedia
                  component="img"
                  alt={`Image ${index + 1}`}
                  sx={{
                    borderRadius: '20px',
                    aspectRatio: 1 / 1,
                    height: '100%',
                    width: '100%',
                    objectFit: 'fill',
                  }}
                  image={image}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h5" align="center" fontSize={'48px'}>
          White label services
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mt={2} maxWidth={'1340px'}>
        <Typography align="center" variant="body1" paragraph fontSize={'22px'}>
          Our expert team can help you develop your own line of Beauty & Health Cosmetics or any other product that you
          can imagine. Contact us today to discuss a custom and fully tailored branding package to help realize your
          vision and goals.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <MainButton variant="contained" endIcon={<ArrowOutwardIcon />} color="primary">
          Contact Us
        </MainButton>
      </Box>
    </Stack>
  );
};

export default TourComponent;
