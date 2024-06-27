import { Box, Button, Card, CardMedia, Stack, Typography } from '@mui/material';

const images = [
  '/assets/imgs/person_3.jpg',
  // Add your image URLs here
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
  '/assets/imgs/person_3.jpg',
];

const TourComponent = () => {
  const angle = 120 / (images.length - 1); // Spread images in half circle

  return (
    <Stack sx={{ padding: 4, alignItems: 'center', gap: '12px' }}>
      <Typography variant="h4" align="center" maxWidth={'450px'} gutterBottom>
        A Picture's Worth a Thousand Words
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '400px',
          height: '200px', // Adjust height to fit half circle
          overflow: 'visible', // Allow overflow for images
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'absolute',
              top: '0',
              left: '0',
              width: '200px',
              height: '200px',
              transform:
                index <= 4
                  ? `rotate(${index * angle - 120}deg) translate(250px) `
                  : `rotate(${index * angle - 120}deg) translate(250px) `,
              transformOrigin: index <= 4 ? 'bottom right' : 'bottom left',
            }}
          >
            <Card
              sx={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
              }}
            >
              <CardMedia
                component="img"
                alt={`Image ${index + 1}`}
                image={image}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px',
                }}
              />
            </Card>
          </Box>
        ))}
      </Box>

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
