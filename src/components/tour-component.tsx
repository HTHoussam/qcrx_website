import { Box, Button, Card, CardMedia, Grid, Stack, Typography } from '@mui/material';

const images = [
  // URLs or imports of your images
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
      <Typography variant="h4" align="center" maxWidth={'450px'} gutterBottom>
        A Picture's Worth a Thousand Words
      </Typography>

      <Grid
        container
        spacing={1}
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
                maxWidth: '325px',
                height: '325px',
                borderRadius: '20px',
              }}
            >
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                sx={{
                  borderRadius: '20px',
                  aspectRatio: 1 / 1,
                  height: '325px',
                  width: '325px',
                  objectFit: 'fill',
                }}
                image={image}
              />
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={4}>
        <Button variant="contained" color="primary">
          View Tour Now
        </Button>
      </Box>

      <Box display="flex" justifyContent="center" mt={4}>
        <Typography variant="h5" align="center">
          White label services
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Typography align="center" variant="body1" paragraph>
          Our expert team can help you develop your own line of Beauty & Health Cosmetics or any other product that you
          can imagine. Contact us today to discuss a custom and fully tailored branding package to help realize your
          vision and goals.
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" mt={2}>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box>
    </Stack>
  );
};

export default TourComponent;
