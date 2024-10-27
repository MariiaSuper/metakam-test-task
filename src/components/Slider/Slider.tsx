import { Box, Button, Flex } from '@radix-ui/themes';
import classNames from 'classnames';
import { useCallback, useEffect, useRef, useState } from 'react';
import useSize from '@react-hook/size';
import './Slider.scss';
import { CaretUpIcon, CaretDownIcon } from '@radix-ui/react-icons';

export const Slider = (params: { images: string[] }) => {
  const { images } = params;
  const previewRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [shift, setShift] = useState(0);
  const [width] = useSize(previewRef);

  const imagesForSlider = [...images, ...images];
  const mainImage = imagesForSlider[selectedImage] || '';

  const previewWidth = (width || 0) - 8;

  const clickUp = useCallback(() => {
    let newSelectedImage = selectedImage - 1;
    setSelectedImage(newSelectedImage);

    if (newSelectedImage - shift === -1) {
      setShift(shift - 1);
    }
  }, [selectedImage, shift]);

  const clickDown = useCallback(() => {
    let newSelectedImage = selectedImage + 1;

    if (newSelectedImage === imagesForSlider.length) {
      setSelectedImage(0);
      setShift(0);
    } else {
      setSelectedImage(newSelectedImage);
      if (newSelectedImage - shift > 3) {
        setShift(shift + 1);
      }
    }
  }, [selectedImage, shift, setSelectedImage, setShift]);

  useEffect(() => {
    const intervalHandler = setInterval(() => {
      clickDown();
    }, 2000);

    return () => {
      clearInterval(intervalHandler);
    };
  }, [clickDown, selectedImage, shift]);

  return (
    <Box className="slider">
      <Flex>
        <Flex style={{ width: '20%' }} direction="column" align="center">
          <Button
            style={{ width: '50%', height: 16 }}
            color="gray"
            disabled={selectedImage === 0}
            onClick={clickUp}>
            <CaretUpIcon />
          </Button>
          <Box
            ref={previewRef}
            className="slider__preview-container"
            style={{ height: 'calc(100% - 32px)', width: '100%' }}>
            <Flex
              direction="column"
              className="slider__preview-images"
              style={{ top: `${-shift * previewWidth}px` }}>
              {imagesForSlider.map((item, index) => (
                <img
                  key={index}
                  style={{
                    width: `${previewWidth}px`,
                    maxWidth: `${previewWidth}px`,
                    height: `${previewWidth}px`
                  }}
                  className={classNames('slider__preview-images-image', {
                    'slider__preview-images-image--active': selectedImage === index
                  })}
                  src={`${process.env.PUBLIC_URL}/${item}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </Flex>
          </Box>
          <Button
            style={{ width: '50%', height: 16 }}
            onClick={clickDown}
            color="gray"
            disabled={selectedImage === imagesForSlider.length - 1}>
            <CaretDownIcon />
          </Button>
        </Flex>
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
