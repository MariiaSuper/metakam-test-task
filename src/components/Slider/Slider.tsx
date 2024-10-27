import { Box, Flex } from '@radix-ui/themes';
import classNames from 'classnames';
import { useState } from 'react';
import './Slider.scss';

export const Slider = (params: { images: string[] }) => {
  const { images } = params;
  const [selectedImage, setSelectedImage] = useState(0);

  const mainImage = images[selectedImage] || '';
  const imagesForSlider = images.slice(0, 4);

  return (
    <Box className="slider">
      <Flex>
        <Box style={{ width: '20%' }}>
          <Flex direction="column">
            {imagesForSlider.map((item, index) => (
              <img
                key={item}
                style={{ maxWidth: '100%' }}
                className={classNames('slider__slider-image', {
                  'slider__slider-image--active': selectedImage === index
                })}
                src={`${process.env.PUBLIC_URL}/${item}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </Flex>
        </Box>
        <Box style={{ width: '80%' }}>
          <img
            style={{ maxWidth: '100%' }}
            className="slider__image"
            src={`${process.env.PUBLIC_URL}/${mainImage}`}
          />
        </Box>
      </Flex>
    </Box>
  );
};
