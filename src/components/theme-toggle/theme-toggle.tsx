import { useIntl } from 'react-intl';
import { useThemeStore, THEME } from '../../stores/theme-store';
import { IconButton } from '../icon-button';
import { renderMoonIcon, renderSunIcon } from '../../resources/icons';

export const ThemeToggle: React.FC = () => {
  const { formatMessage } = useIntl();
  const { theme, toggleTheme } = useThemeStore();

  const intl = {
    toggleTheme: formatMessage({ id: 'theme.toggleTheme' }),
    lightMode: formatMessage({ id: 'theme.lightMode' }),
    darkMode: formatMessage({ id: 'theme.darkMode' })
  };

  const isLightTheme = theme === THEME.LIGHT;

  const currentIcon = isLightTheme ? renderMoonIcon() : renderSunIcon();
  const ariaLabelText = isLightTheme ? intl.darkMode : intl.lightMode;

  return (
    <IconButton
      icon={
        <span className="theme-toggle__icon">
          {currentIcon}
        </span>
      }
      onClick={toggleTheme}
      className="theme-toggle"
      ariaLabel={ariaLabelText}
      title={ariaLabelText}
    />
  );
};

