import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { MainButton } from './common/styled-components';

const DoctorCard = () => {
  return (
    <Grid container rowGap={4} spacing={4} mt={4}>
      <Grid item xs={12}>
        <Card sx={{ display: 'flex', borderRadius: '12px', backgroundColor: '#194894' }}>
          <CardMedia
            component="video" // Use 'video' component for displaying videos
            controls
            autoPlay={false}
            loop
            sx={{
              borderRadius: '12px',
              flex: 1,
              boxShadow: '-20px 1px 18px 0px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
            }}
          >
            <source src="/assets/videos/SampleVideo_1280x720_2mb.mp4" type="video/mp4" /> Your browser does not support
            the video tag.
          </CardMedia>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card sx={{ display: 'flex', borderRadius: '12px', backgroundColor: '#194894' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, color: 'white' }}>
            <CardContent
              sx={{
                flex: '1 0 auto',
                paddingInline: '64px',
                paddingBlock: '89px',
                display: 'flex',
                alignItems: 'flex-start',
                flexDirection: 'column',
                justifyContent: 'space-around',
                gap: '24px',
              }}
            >
              <Typography component="div" variant="h3" fontSize={'48px'} maxWidth={'520px'}>
                Innovative technology for compounding excellence.
              </Typography>
              <Typography variant="body2" fontStyle={'italic'} color="white" component="div" fontSize={'16px'} mt={2}>
                Tempor ornare sed nulla justo est. Dolor elit morbi ullamcorper faucibus egestas sed natoque luctus.
                Pulvinar sed in ultrices porttitor eleifend venenatis morbi scelerisque. Facilisi velit sit lectus
                mauris donec. Dui adipiscing etiam sit lectus quis iaculis aliquet.
                <br />
                <br />
                Commodo nunc facilisis vel arcu et eget augue nisl. Venenatis mattis vitae sit sem ut suscipit egestas
                ut aliquam. Libero proin mauris ultrices porttitor quam lacus mi. Condimentum cursus condimentum laoreet
                dignissim amet vestibulum.
              </Typography>
              <MainButton
                variant="contained"
                endIcon={
                  <ArrowOutwardIcon
                    sx={{
                      color: 'black',
                    }}
                  />
                }
                sx={{
                  mt: 2,
                  marginRight: 'auto',
                  color: '#194894',
                  backgroundColor: 'white',
                  '&:hover': { color: 'white' },
                }}
              >
                More About Us
              </MainButton>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{
              borderRadius: '12px',
              flex: 1,
              boxShadow: '-20px 1px 18px 0px rgba(0, 0, 0, 0.2)',
              objectFit: 'cover',
              height: '716px',
            }}
            image="/assets/imgs/person_3.jpg"
            alt="Compounding Excellence"
          />
        </Card>
      </Grid>
    </Grid>
  );
};
export default DoctorCard;
