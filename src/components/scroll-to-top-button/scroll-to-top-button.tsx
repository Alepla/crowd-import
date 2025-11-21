import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { IconButton } from '../icon-button';
import { renderScrollToTopIcon } from '../../resources/icons';

export const ScrollToTopButton: React.FC = () => {
  const { formatMessage } = useIntl();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const intl = {
    label: formatMessage({ id: 'scrollToTop.label' })
  };

  if (!isVisible) {
    return null;
  }

  return (
    <IconButton
      icon={renderScrollToTopIcon()}
      onClick={scrollToTop}
      className="scroll-to-top-button"
      ariaLabel={intl.label}
      title={intl.label}
    />
  );
};

