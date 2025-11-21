import React from 'react';

export const ICON_BUTTON_TYPE = {
  BUTTON: 'button',
  LINK: 'link',
  EXTERNAL: 'external'
} as const;

export type IconButtonType = typeof ICON_BUTTON_TYPE[keyof typeof ICON_BUTTON_TYPE];

export interface IconButtonProps {
  icon: React.ReactNode;
  onClick?: () => void;
  to?: string;
  href?: string;
  className?: string;
  ariaLabel?: string;
  title?: string;
  type?: IconButtonType;
  target?: string;
  rel?: string;
  ariaExpanded?: boolean;
  children?: React.ReactNode;
}

