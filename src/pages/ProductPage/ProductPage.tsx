import { Container } from '@radix-ui/themes';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data/products.json';

export const ProductPage = () => {
  const { slug } = useParams();
  const product = data.find((item) => item.slug === slug);

  if (!product) {
    return (
      <Container>
        <div style={{ display: 'flex', gap: 20 }}>Not found product</div>
      </Container>
    );
  }

  return (
    <Container
      p="4"
      size={{
        xs: '1',
        sm: '2',
        md: '3',
        lg: '4'
      }}>
      <ProductCard product={product} />
    </Container>
  );
};
