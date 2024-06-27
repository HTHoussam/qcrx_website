import { Box, Grid, styled, Typography } from '@mui/material';

const Feature = ({ title, description }: { title: string; description: string }) => (
  <BorderedBox mt={2}>
    <Typography variant="h6" fontSize={'24px'}>
      {title}
    </Typography>
    <Typography variant="body2" fontSize={'16px'}>
      {description}
    </Typography>
  </BorderedBox>
);

const FeaturesSection = () => {
  const features = [
    {
      title: 'Highest Quality',
      description:
        'Top 1% of 503A pharmacies nationally and the only pharmacy in Nevada to meet NEW USP 797 + 800 standards.',
    },
    {
      title: 'Fastest Delivery',
      description: "We ship most products same day, so your patients aren't waiting for their medications.",
    },
    {
      title: 'Best Customer Service',
      description:
        "Can't get through to your pharmacy? We hear it all the time. At QCRx, we have friendly staff that answer your calls and treat you with the respect you deserve.",
    },
    {
      title: 'Price Match Guarantee',
      description:
        'Change can be hard, but with our price match guarantee we make it easy. Get the same great price - just better quality, service, and delivery times.',
    },
  ];

  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid key={index} item xs={12} md={6}>
            <Feature title={feature.title} description={feature.description} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturesSection;

const BorderedBox = styled(Box)(({ theme }) => ({
  borderBottom: `0.5px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(2),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));
