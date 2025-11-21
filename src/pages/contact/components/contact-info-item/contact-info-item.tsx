import React from 'react';

interface ContactInfoItemProps {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}

export const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
  icon,
  label,
  children
}) => {
  return (
    <div className="contact-page__info-item">
      <div className="contact-page__info-icon">
        {icon}
      </div>
      <div className="contact-page__info-content">
        <h3 className="contact-page__info-label">{label}</h3>
        {children}
      </div>
    </div>
  );
};

