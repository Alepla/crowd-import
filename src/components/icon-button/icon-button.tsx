import React from 'react';
import { Link } from 'react-router-dom';
import { IconButtonProps, ICON_BUTTON_TYPE } from './types';

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onClick,
  to,
  href,
  className = '',
  ariaLabel,
  title,
  type = ICON_BUTTON_TYPE.BUTTON,
  target,
  rel,
  ariaExpanded,
  children
}) => {
  if (type === ICON_BUTTON_TYPE.EXTERNAL && href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        className={className}
        aria-label={ariaLabel}
        title={title}
      >
        {icon}
        {children}
      </a>
    );
  }

  if (type === ICON_BUTTON_TYPE.LINK && to) {
    return (
      <Link
        to={to}
        className={className}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
      >
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={ariaLabel}
      title={title}
      type="button"
      aria-expanded={ariaExpanded}
    >
      {icon}
      {children}
    </button>
  );
};

