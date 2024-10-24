import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Popover from '@radix-ui/react-popover';
import * as Separator from '@radix-ui/react-separator';
import './Header.scss'; // Assuming you're using SCSS for styling
import heartSVG from '../../assets/HeartLike_Header_default.svg';
import cartSVG from '../../assets/ShoppingBag_header.svg';
import { Text } from '@radix-ui/themes';
import { useWindowSize } from '@uidotdev/usehooks';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="/logo.png" alt="Nice Gadgets" className="logo" />
        <span className="logo__text">METAKAM</span>
      </div>

      <NavigationMenu.Root className="navigation-menu">
        <NavigationMenu.List className="navigation-menu__list">
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/" className="navigation-menu__link">
              HOME
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/phones" className="navigation-menu__link">
              NEWS
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Link href="/tablets" className="navigation-menu__link">
              PRODUCTS
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>

      <div className="header__icons header__icons">
        <Separator.Root className="header__separator" />
        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="icon-button icon-button-likes">
              <img src={heartSVG} alt="Wishlist" />
            </button>
          </Popover.Trigger>
          <Popover.Content className="popover-content">Wishlist content goes here.</Popover.Content>
        </Popover.Root>

        <Popover.Root>
          <Popover.Trigger asChild>
            <button className="icon-button">
              <img src={cartSVG} alt="Cart" />
            </button>
          </Popover.Trigger>
          <Popover.Content className="popover-content">Cart content goes here.</Popover.Content>
        </Popover.Root>
      </div>
    </header>
  );
}

export default Header;
