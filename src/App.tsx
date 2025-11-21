import { BrowserRouter as Router } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { ErrorBoundary, AppLayout, AppRoutes } from './components';
import { useThemeSync } from './hooks';
import esMessages from './locales/es.json';
import './styles';

const App: React.FC = () => {
  useThemeSync();

  return (
    <IntlProvider locale="es" messages={esMessages}>
      <ErrorBoundary>
        <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppLayout>
            <AppRoutes />
          </AppLayout>
        </Router>
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;
