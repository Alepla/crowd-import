import { Link } from 'react-router-dom';
import { Layout, Button, BUTTON_TYPE, FormField } from '../../components';
import { ROUTES } from '../../constants';
import { useLogin } from './hooks/use-login';

export const Login: React.FC = () => {
  const {
    isLogin,
    email,
    password,
    name,
    error,
    loading,
    intl,
    setEmail,
    setPassword,
    setName,
    handleSubmit,
    toggleMode,
    submitButtonText,
    switchButtonText
  } = useLogin();

  return (
    <Layout
      className="login-page"
      title={intl.title}
      subtitle={intl.subtitle}
    >
      <div className="login-page__card">
          <form onSubmit={handleSubmit} className="login-page__form">
            {!isLogin && (
              <FormField
                id="name"
                label={intl.name}
                type="text"
                value={name}
                onChange={setName}
                placeholder={intl.namePlaceholder}
                disabled={loading}
                classNamePrefix="login-page"
              />
            )}

            <FormField
              id="email"
              label={intl.email}
              type="email"
              value={email}
              onChange={setEmail}
              placeholder={intl.emailPlaceholder}
              disabled={loading}
              classNamePrefix="login-page"
            />

            <FormField
              id="password"
              label={intl.password}
              type="password"
              value={password}
              onChange={setPassword}
              placeholder={intl.passwordPlaceholder}
              disabled={loading}
              classNamePrefix="login-page"
            />

            {error && (
              <div className="login-page__error">
                {error}
              </div>
            )}

            <Button
              type={BUTTON_TYPE.SUBMIT}
              className="login-page__submit"
              disabled={loading}
            >
              {submitButtonText}
            </Button>
          </form>

          <div className="login-page__footer">
            <Button
              type={BUTTON_TYPE.BUTTON}
              onClick={toggleMode}
              className="login-page__switch"
            >
              {switchButtonText}
            </Button>
            <Link to={ROUTES.LANDING} className="login-page__back-link">
              {intl.backHome}
            </Link>
          </div>
        </div>
    </Layout>
  );
};

