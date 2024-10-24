import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`/product/dream-bed-42`);
  }, [navigate]);

  return (
    <div>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </div>
  );
};
