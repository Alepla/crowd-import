import { Component, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';
import esMessages from '../../locales/es.json';
import { Button } from '../button';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorFallbackProps {
  error: Error | null;
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  const intl = {
    title: esMessages['errorBoundary.title'],
    message: esMessages['errorBoundary.message'],
    reload: esMessages['errorBoundary.reload'],
    details: esMessages['errorBoundary.details']
  };

  return (
    <div className="error-boundary">
      <div className="error-boundary__container">
        <h1 className="error-boundary__title">{intl.title}</h1>
        <p className="error-boundary__message">{intl.message}</p>
        {error && (
          <details className="error-boundary__details">
            <summary className="error-boundary__summary">{intl.details}</summary>
            <pre className="error-boundary__error">{error.toString()}</pre>
          </details>
        )}
        <Button
          className="error-boundary__button"
          onClick={() => window.location.reload()}
        >
          {intl.reload}
        </Button>
      </div>
    </div>
  );
};

class ErrorBoundaryClass extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <IntlProvider locale="es" messages={esMessages}>
          <ErrorFallback error={this.state.error} />
        </IntlProvider>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary = ErrorBoundaryClass;

