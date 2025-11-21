import { Routes, Route } from 'react-router-dom';
import {
  Products,
  Dashboard,
  Landing,
  Privacy,
  Terms,
  Login,
  Contact,
  Notifications,
  Wishlist,
  MyOrders,
  FAQ,
  NotFound,
} from '../../pages';
import { ROUTES } from '../../constants';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.LANDING} element={<Landing />} />
      <Route path={ROUTES.PRODUCTS} element={<Products />} />
      <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
      <Route path={ROUTES.CONTACT} element={<Contact />} />
      <Route path={ROUTES.NOTIFICATIONS} element={<Notifications />} />
      <Route path={ROUTES.WISHLIST} element={<Wishlist />} />
      <Route path={ROUTES.MY_ORDERS} element={<MyOrders />} />
      <Route path={ROUTES.FAQ} element={<FAQ />} />
      <Route path={ROUTES.PRIVACY} element={<Privacy />} />
      <Route path={ROUTES.TERMS} element={<Terms />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
