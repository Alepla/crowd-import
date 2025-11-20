import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer, Sidebar, ScrollToTop, ScrollToTopButton, FloatingThemeToggle } from '../';
import { Home, Dashboard, About, Privacy, Terms, Login, Contact, Notifications, Wishlist, MyOrders, FAQ, NotFound } from '../../pages';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Sidebar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/products" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
      <FloatingThemeToggle />
    </Router>
  );
};

