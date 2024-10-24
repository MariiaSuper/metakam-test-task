import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { NotFoundPage } from './NotFoundPage';
import { ProductPage } from './ProductPage';
import { App } from './App';

export const Root = () => (
  <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="product/:slug" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
