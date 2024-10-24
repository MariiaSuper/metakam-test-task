import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { Theme, ThemePanel } from '@radix-ui/themes';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProductPage } from './pages/ProductPage';
import { App } from './App';

export const Root = () => (
  <Theme grayColor="sand" panelBackground="solid">
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="product/:slug" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    {/* <ThemePanel /> */}
  </Theme>
);
