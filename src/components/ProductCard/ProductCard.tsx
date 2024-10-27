import * as ToggleGroup from '@radix-ui/react-toggle-group';
import './ProductCard.scss';
import { Product } from '../../types';
import { Box, Button, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import heartSVG from '../../assets/HeartLike_Header_default.svg';
import * as Label from '@radix-ui/react-label';
import { Slider } from '../Slider';

interface ProductSpec {
  label: string;
  value: string;
}

const productSpecs: ProductSpec[] = [
  { label: 'Screen', value: "6.1' OLED (Super Retina XDR)" },
  { label: 'Resolution', value: '2532x1170' },
  { label: 'Processor', value: 'Apple A15 Bionic' },
  { label: 'RAM', value: '6GB' }
];

const techSpecs: ProductSpec[] = [
  { label: 'Screen', value: "6.1' OLED (Super Retina XDR)" },
  { label: 'Resolution', value: '2532x1170' },
  { label: 'Processor', value: 'Apple A15 Bionic' },
  { label: 'RAM', value: '6GB' },
  { label: 'Built in memory', value: '512GB' },
  { label: 'Camera', value: '12 Mp + 12 Mp + 12MP' },
  { label: 'Zoom', value: 'Digital 5x, Optical 2x' },
  { label: 'Cell', value: 'GPRSEDGEWCDMAUMTSHSPALTE5G' }
];

const getColorByName = (name: string): string => {
  const mapColors: Record<string, string> = {
    midnight: '#191970',
    'space-gray': '#707070',
    midnightgreen: '#004953',
    gold: '#FFD700',
    silver: '#C0C0C0',
    rosegold: '#B76E79',
    coral: '#FF7F50',
    spaceblack: '#505150',
    graphite: '#41424C',
    sierrablue: '#BFDAF7',
    spacegray: '#707070'
  };

  if (mapColors[name]) {
    return mapColors[name];
  }

  return name;
};

type ProductCardProps = {
  product: Product;
};

function ProductCard(params: ProductCardProps) {
  const { product } = params;
  const { name, images } = product;

  const navigate = useNavigate();
  const [selectedCapacity, setSelectedCapacity] = useState(0);

  return (
    <Box className="product-card">
      <Box py="5">
        <Heading as="h1">{name}</Heading>
      </Box>
      <Grid className="product-card__detail">
        <Box>
          <Slider images={images} />
        </Box>

        <Box>
          <Box>
            <Flex justify="between">
              <Text as="p">Available colors</Text>
              <Text as="p">ID: 000</Text>
            </Flex>
            <ul className="product-card__colors">
              {product.colorsAvailable.map((element, index) => (
                <li
                  key={index}
                  className={classNames('product-card__colors-item', {
                    'product-card__colors-item--active': element.color === product.color
                  })}
                  onClick={() => {
                    navigate(`/product/${element.slug}`);
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: '50%',
                    backgroundColor: getColorByName(element.color),
                    cursor: 'pointer'
                  }}></li>
              ))}
            </ul>

            <Box className="product-card__capacity" pt="2">
              <Box py="2">
                <Text as="p">Select capacity:</Text>
              </Box>
              <ToggleGroup.Root
                type="single"
                defaultValue="128GB"
                className="capacity-selector"
                aria-label="Capacity selection">
                {product.capacityAvailable.map((item, index) => (
                  <ToggleGroup.Item
                    key={index}
                    value={item}
                    onClick={() => setSelectedCapacity(index)}
                    className={classNames('capacity', {
                      active: index === selectedCapacity
                    })}>
                    {item}
                  </ToggleGroup.Item>
                ))}
              </ToggleGroup.Root>
            </Box>

            <Flex className="product-card__price" pt="4" gap="3">
              <Text size="8" style={{ fontWeight: 600 }}>
                {`${product.priceDiscount}$`}
              </Text>
              <Text
                size="7"
                color="gray"
                style={{
                  fontWeight: 600,
                  textDecorationLine: 'line-through',
                  textDecorationStyle: 'solid'
                }}>
                {`${product.priceRegular}$`}
              </Text>
            </Flex>

            <Box
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                gap: '10px',
                paddingTop: '20px'
              }}>
              <Button
                className="product-card__button-add"
                style={{
                  height: '40px',
                  width: '270px',
                  backgroundColor: 'white',
                  color: 'black',
                  fontSize: '16px'
                }}>
                Add to cart
              </Button>
              <Button
                className="product-card__button-like"
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'white'
                }}>
                <img src={heartSVG} alt="Cart" style={{ color: 'white' }} />
              </Button>
            </Box>

            <Box>
              <div className="product-specs">
                {productSpecs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <Label.Root
                      className="spec-label"
                      htmlFor={`spec-${index}`}
                      style={{ fontSize: '12px', fontWeight: 600, color: '#89939a' }}>
                      {spec.label}
                    </Label.Root>
                    <Text
                      className="spec-value"
                      id={`spec-${index}`}
                      style={{ fontSize: '12px', fontWeight: 600, color: 'black' }}>
                      {spec.value}
                    </Text>
                  </div>
                ))}
              </div>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid className="product-card__detail">
        <Box>
          <div className="product-about">
            <Label.Root className="product-about__text">
              <Text className="product-about__text-header">About</Text>
              <Text className="product-about__line"></Text>
              <Text className="product-about__text-header">Wonderful</Text>
              <Text className="product-about__text-description">
                A transformative triple-camera system that adds tons of capability without
                complexity. An unprecedented leap in battery life. And a mind-blowing chip that
                doubles down on machine learning and pushes the boundaries of what a smartphone can
                do. Welcome to the first iPhone powerful enough to be called Pro.
              </Text>
              <Text className="product-about__text-header">Camera</Text>
              <Text className="product-about__text-description">
                A transformative triple-camera system that adds tons of capability without
                complexity. An unprecedented leap in battery life. And a mind-blowing chip that
                doubles down on machine learning and pushes the boundaries of what a smartphone can
                do. Welcome to the first iPhone powerful enough to be called Pro.
              </Text>
              <Text className="product-about__text-header">
                Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it. Love it.
              </Text>
              <Text className="product-about__text-description">
                iPhone 11 Pro lets you capture videos that are beautifully true to life, with
                greater detail and smoother motion. Epic processing power means it can shoot 4K
                video with extended dynamic range and cinematic video stabilization — all at 60 fps.
                You get more creative control, too, with four times more scene and powerful new
                editing tools to play with.
              </Text>
            </Label.Root>
          </div>
        </Box>

        <Box>
          <div className="product-about">
            <Label.Root className="product-about__text">
              <Text className="product-about__text-header">Tech specs</Text>
              <Text className="product-about__line"></Text>
              <div className="product-about__specs">
                {techSpecs.map((spec, index) => (
                  <div key={index} className="spec-item">
                    <Label.Root
                      className="spec-label"
                      htmlFor={`spec-${index}`}
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#89939a',
                        lineHeight: '22px'
                      }}>
                      {spec.label}
                    </Label.Root>
                    <Text
                      className="spec-value"
                      id={`spec-${index}`}
                      style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        color: 'black',
                        lineHeight: '21px'
                      }}>
                      {spec.value}
                    </Text>
                  </div>
                ))}
              </div>
            </Label.Root>
          </div>
        </Box>
      </Grid>
    </Box>
  );
}

export default ProductCard;
