import ImportContacts from '@mui/icons-material/ImportContacts';
import { Box, Button, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

// Styled components
const MainStack = styled(Stack)({
  flexDirection: 'row',
  minHeight: '450px',
});

const TextContainer = styled(Stack)({
  backgroundColor: 'white',
  zIndex: 2,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '40%',
  gap: '30px',
});

const StyledButton = styled(Button)({
  color: 'white',
});

const PatientButton = styled(StyledButton)({
  backgroundColor: '#00BAD1',
});

const ImageContainer = styled(Box)({
  position: 'relative',
  display: 'flex',
  alignItems: 'end',
  flex: '0 0 auto', // Prevent the flexbox from resizing the container
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  margin: '0 12px', // Add margin to space out the images
  transition: 'transform 0.3s, box-shadow 0.3s',
  '&:hover': {
    transform: 'translateY(-10px)',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
  },
  width: 'calc(33.333% - 24px)', // Ensure the containers fit within the viewport width
});

const Image = styled(motion.img)({
  objectFit: 'cover',
  height: '100%',
  width: '100%',
});

const InfoBox = styled(Stack)({
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: '#FFFFFF',
  width: '80%',
  borderRadius: '12px',
  position: 'absolute',
  bottom: 16,
  left: '50%',
  transform: 'translateX(-50%)',
  height: '48px',
  alignItems: 'center',
  padding: '4px 12px',
  color: '#194894',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
});

const IconContainer = styled(Box)({
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  backgroundColor: '#194894',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const ImageList = styled(motion.div)({
  display: 'flex',
  overflow: 'hidden', // Hide the overflow to prevent scrollbars
  cursor: 'grab', // Change the cursor to indicate draggable area
  '&:active': {
    cursor: 'grabbing', // Change the cursor when dragging
  },
  flex: 1,
});

const MainComponent = () => {
  const healthCategories = [
    { label: "Men's Health", imgSrc: '/assets/imgs/person_3.jpg' },
    { label: "Women's Health", imgSrc: '/assets/imgs/person_4.jpg' },
    { label: "Children's Health", imgSrc: '/assets/imgs/person_5.jpg' },
    { label: "Children's Health", imgSrc: '/assets/imgs/person_5.jpg' },
    { label: "Children's Health", imgSrc: '/assets/imgs/person_5.jpg' },
    { label: "Children's Health", imgSrc: '/assets/imgs/person_5.jpg' },
  ];

  return (
    <MainStack>
      <TextContainer flex={0.35}>
        <Typography fontSize={'40px'} lineHeight={1} fontWeight={600} gutterBottom>
          We specialize in medications for
        </Typography>
        <Typography lineHeight={1.2} fontSize={'16px'}>
          Nec purus adipiscing pellentesque ultrices in viverra amet. Sit egestas mi platea nisl est.
        </Typography>
        <Stack direction={'row'} gap={'12px'}>
          <StyledButton>Register as Provider</StyledButton>
          <PatientButton>Register as Patient</PatientButton>
        </Stack>
      </TextContainer>
      <ImageList drag="x" dragConstraints={{ left: -300, right: 0 }} initial={{ x: 0 }}>
        {healthCategories.map((category, idx) => (
          <ImageContainer key={idx}>
            <Image
              src={category.imgSrc}
              alt={`image-${idx}`}
              whileDrag={{ scale: 1.1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
            <InfoBox>
              <Typography fontSize={'16px'}>{category.label}</Typography>
              <IconContainer>
                <ImportContacts sx={{ width: '20px', height: '20px', color: 'white' }} />
              </IconContainer>
            </InfoBox>
          </ImageContainer>
        ))}
      </ImageList>
    </MainStack>
  );
};

export default MainComponent;
