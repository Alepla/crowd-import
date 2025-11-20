import { useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import { ErrorBoundary, AppRouter } from './components';
import { useThemeStore } from './stores/theme-store';
import esMessages from './locales/es.json';
import './styles';

const App: React.FC = () => {
  const theme = useThemeStore((state) => state.theme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <IntlProvider locale="es" messages={esMessages}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;

