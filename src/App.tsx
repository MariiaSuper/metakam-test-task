import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header/Header';

export const App = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug === '/') {
      navigate(`/product/apple-iphone-14-pro-128gb-spaceblack`);
    }
  }, [navigate, slug]);

  return (
    <div>
      <Header />
      <Outlet />
      <div>Footer</div>
    </div>
  );
};
