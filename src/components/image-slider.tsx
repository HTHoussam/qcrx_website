import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useMemo } from 'react';

const ImageSlider = () => {
  const imagesList = useMemo(
    () => ['person_1', 'person_2', 'person_3', 'person_2', 'person_3', 'person_2', 'person_1'],
    [],
  );

  return (
    <CarouselContainer>
      <CarouselContent
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-100%'] }}
        transition={{ duration: 10, ease: 'linear', repeat: Infinity, repeatType: 'loop' }}
      >
        {imagesList.map((image, idx) => (
          <div
            key={`${image}-${idx}`}
            style={{
              width: '100%',
              height: '100%',
              flex: '0 0 33%',
              padding: '0 8px',
              display: 'flex',
              alignItems: 'flex-end',
              flexShrink: 1,
            }}
          >
            {idx % 2 === 0 ? (
              <motion.img
                exit={{ transform: 'scale3d(1, 1, 1)' }}
                initial={{ transform: 'scale3d(1, 1, 1)' }}
                whileInView={{
                  transform: ['scale3d(1, 1, 1)', 'scale3d(1.1, 1.13, 1)', 'scale3d(1.1, 1.13, 1)', 'scale3d(1, 1, 1)'],
                  zIndex: 500,
                }}
                transition={{
                  ease: 'backInOut',
                  duration: 2,
                }}
                src={`/assets/imgs/${image}.jpg`}
                alt={image}
                height={'490px'}
                width="430px"
                style={{ alignSelf: 'end', borderRadius: 26, transformOrigin: 'bottom right' }}
              />
            ) : (
              <img
                src={`/assets/imgs/${image}.jpg`}
                alt={image}
                height={'490px'}
                width="430px"
                style={{ alignSelf: 'end', borderRadius: 26, transformOrigin: 'bottom right' }}
              />
            )}
          </div>
        ))}
      </CarouselContent>
    </CarouselContainer>
  );
};

export default ImageSlider;

const CarouselContainer = styled(Box)({
  overflow: 'hidden',
  display: 'flex',
  width: '100%',
  position: 'relative',
  height: '530px',
});

const CarouselContent = styled(motion.div)({
  display: 'flex',
  gap: '47px',
  width: 'max-content',
  willChange: 'transform',
});
