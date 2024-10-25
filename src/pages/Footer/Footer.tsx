import React from 'react';
import { Button } from '@radix-ui/themes';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Nice Gadgets" className="logo" />
        <span className="logo__text">METAKAM</span>
      </div>

      <NavigationMenu.Root className="navigation-menu">
        <NavigationMenu.List className="navigation-menu__list">
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" className="navigation-menu__link">
              GITHUB
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/contacts" className="navigation-menu__link">
              CONTACTS
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <Button
        className="back-to-top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="arrow">↑</span>
      </Button>
    </footer>
  );
};

export default Footer;
