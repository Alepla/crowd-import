import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../header';
import { Home } from '../../pages/home';
import { Dashboard } from '../../pages/dashboard';
import { NotFound } from '../../pages/not-found';

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

