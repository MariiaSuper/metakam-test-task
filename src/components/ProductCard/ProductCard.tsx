import * as Popover from '@radix-ui/react-popover';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import './ProductCard.scss';
import { Product } from '../../types';
import { Box, Flex, Grid, Heading, Text } from '@radix-ui/themes';
import { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';

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
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedCapacity, setSelectedCapacity] = useState(0);

  const mainImage = images[selectedImage] || '';
  const imagesForSlider = images.slice(0, 4);

  return (
    <Box className="product-card">
      <Box py="5">
        <Heading as="h1">{name}</Heading>
      </Box>
      <Grid className="product-card__detail">
        <Box>
          <Flex>
            <Box style={{ width: '20%' }}>
              <Flex direction="column">
                {imagesForSlider.map((item, index) => (
                  <img
                    key={item}
                    style={{ maxWidth: '100%' }}
                    className={classNames('product-card__slider-image', {
                      'product-card__slider-image--active': selectedImage === index
                    })}
                    src={`/${process.env.PUBLIC_URL}${item}`}
                    onClick={() => setSelectedImage(index)}
                  />
                ))}
              </Flex>
            </Box>
            <Box style={{ width: '80%' }}>
              <img
                style={{ maxWidth: '100%' }}
                className="product-card__image"
                src={`/${process.env.PUBLIC_URL}${mainImage}`}
              />
            </Box>
          </Flex>
        </Box>
        <Box>
          <Box style={{ width: '75%' }}>
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
                    console.log(`/product/${element.slug}`);
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
          </Box>
        </Box>
      </Grid>

      {/* Product Info */}
      <div className="product-info">
        <div className="product-info__images">
          <div className="product-info__main-image">
            <img src={`/img/iphone-main.png`} alt={name} />
          </div>
        </div>

        <div className="product-info__details">
          <div className="product-info__meta">
            <div className="product-info__colors">
              <p>Available colors:</p>
              <ToggleGroup.Root
                type="single"
                defaultValue="blue"
                className="color-selector"
                aria-label="Color selection">
                <ToggleGroup.Item
                  value="blue"
                  aria-label="Blue"
                  className="color blue"></ToggleGroup.Item>
                <ToggleGroup.Item
                  value="yellow"
                  aria-label="Yellow"
                  className="color yellow"></ToggleGroup.Item>
                <ToggleGroup.Item
                  value="purple"
                  aria-label="Purple"
                  className="color purple"></ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

            <div className="product-info__capacity">
              <p>Select capacity:</p>
              <ToggleGroup.Root
                type="single"
                defaultValue="128GB"
                className="capacity-selector"
                aria-label="Capacity selection">
                <ToggleGroup.Item value="128GB" className="capacity">
                  128GB
                </ToggleGroup.Item>
                <ToggleGroup.Item value="256GB" className="capacity">
                  256GB
                </ToggleGroup.Item>
                <ToggleGroup.Item value="512GB" className="capacity">
                  512GB
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            </div>

            <div className="product-info__price">
              <p className="current-price">$980</p>
              <p className="old-price">$1056</p>
            </div>

            <button className="add-to-cart">Add to cart</button>

            <Popover.Root>
              <Popover.Trigger asChild>
                <button className="wishlist-button">
                  <svg className="wishlist-icon" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                </button>
              </Popover.Trigger>
              <Popover.Content className="popover-content">Added to Wishlist!</Popover.Content>
            </Popover.Root>
          </div>

          <div className="product-info__specs">
            <ul>
              <li>
                <strong>Screen:</strong> 6.1" OLED (Super Retina XDR)
              </li>
              <li>
                <strong>Resolution:</strong> 2532×1170
              </li>
              <li>
                <strong>Processor:</strong> Apple A15 Bionic
              </li>
              <li>
                <strong>RAM:</strong> 6GB
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default ProductCard;
