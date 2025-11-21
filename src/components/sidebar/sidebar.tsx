import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useIntl } from 'react-intl';
import classNames from 'classnames';
import { ROUTES } from '../../constants';
import { IconButton, ICON_BUTTON_TYPE } from '../icon-button';
import { renderHomeIcon, renderProductsIcon, renderWishlistIcon, renderMyOrdersIcon, renderNotificationsIcon, renderContactIcon, renderMenuIcon, renderCloseIcon } from '../../resources/icons';

export const Sidebar: React.FC = () => {
  const { formatMessage } = useIntl();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const intl = {
    products: formatMessage({ id: 'header.products' }),
    landing: formatMessage({ id: 'header.landing' }),
    contact: formatMessage({ id: 'header.contact' }),
    notifications: formatMessage({ id: 'header.notifications' }),
    wishlist: formatMessage({ id: 'header.wishlist' }),
    myOrders: formatMessage({ id: 'header.myOrders' }),
    menu: formatMessage({ id: 'sidebar.menu' }),
    closeMenu: formatMessage({ id: 'sidebar.closeMenu' })
  };

  const isActive = (path: string) => location.pathname === path;

  const getLinkClassName = (path: string) => classNames('sidebar__link', {
    'sidebar__link--active': isActive(path)
  });

  const sidebarClassName = classNames('sidebar', {
    'sidebar--open': isOpen
  });

  return (
    <>
      <IconButton
        icon={renderMenuIcon()}
        onClick={() => setIsOpen(!isOpen)}
        className="sidebar__toggle"
        ariaLabel={intl.menu}
        title={intl.menu}
      />

      {isOpen && (
        <div className="sidebar__overlay" onClick={() => setIsOpen(false)} />
      )}

      <aside className={sidebarClassName}>
        <div className="sidebar__header">
          <h2 className="sidebar__title">{intl.menu}</h2>
          <IconButton
            icon={renderCloseIcon()}
            onClick={() => setIsOpen(false)}
            className="sidebar__close"
            ariaLabel={intl.closeMenu}
            title={intl.closeMenu}
          />
        </div>

        <nav className="sidebar__nav">
          <IconButton
            icon={renderHomeIcon()}
            to={ROUTES.LANDING}
            type={ICON_BUTTON_TYPE.LINK}
            className={getLinkClassName(ROUTES.LANDING)}
            onClick={() => setIsOpen(false)}
          >
            {intl.landing}
          </IconButton>

          <IconButton
            icon={renderProductsIcon()}
            to={ROUTES.PRODUCTS}
            type={ICON_BUTTON_TYPE.LINK}
            className={getLinkClassName(ROUTES.PRODUCTS)}
            onClick={() => setIsOpen(false)}
          >
            {intl.products}
          </IconButton>

          <IconButton
            icon={renderWishlistIcon()}
            to={ROUTES.WISHLIST}
            type={ICON_BUTTON_TYPE.LINK}
            className={getLinkClassName(ROUTES.WISHLIST)}
            onClick={() => setIsOpen(false)}
          >
            {intl.wishlist}
          </IconButton>

          <IconButton
            icon={renderMyOrdersIcon()}
            to={ROUTES.MY_ORDERS}
            type={ICON_BUTTON_TYPE.LINK}
            className={getLinkClassName(ROUTES.MY_ORDERS)}
            onClick={() => setIsOpen(false)}
          >
            {intl.myOrders}
          </IconButton>

          <IconButton
            icon={renderNotificationsIcon()}
            to={ROUTES.NOTIFICATIONS}
            type={ICON_BUTTON_TYPE.LINK}
            className={getLinkClassName(ROUTES.NOTIFICATIONS)}
            onClick={() => setIsOpen(false)}
          >
            {intl.notifications}
          </IconButton>
        </nav>

        <div className="sidebar__footer">
          <div className="sidebar__separator"></div>
          <IconButton
            icon={renderContactIcon()}
            to={ROUTES.CONTACT}
            type={ICON_BUTTON_TYPE.LINK}
            className={getLinkClassName(ROUTES.CONTACT)}
            onClick={() => setIsOpen(false)}
          >
            {intl.contact}
          </IconButton>
        </div>
      </aside>
    </>
  );
};

