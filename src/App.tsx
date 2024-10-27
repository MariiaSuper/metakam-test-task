import { useEffect } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './pages/Footer/Footer';

export const App = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug === '/' || !slug) {
      navigate(`/product/apple-iphone-14-pro-128gb-spaceblack`);
    }
  }, [navigate, slug]);

  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
