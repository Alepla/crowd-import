import { IntlProvider } from 'react-intl';
import { ErrorBoundary } from './components/error-boundary';
import { AppRouter } from './components/router';
import esMessages from './locales/es.json';
import './styles';

const App: React.FC = () => {
  return (
    <IntlProvider locale="es" messages={esMessages}>
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    </IntlProvider>
  );
};

export default App;

