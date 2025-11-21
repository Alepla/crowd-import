import React from 'react';
import classNames from 'classnames';

interface CostItemProps {
  label: string;
  value: string | number;
  isTotal?: boolean;
}

export const CostItem: React.FC<CostItemProps> = ({ label, value, isTotal = false }) => {
  const costItemClassName = classNames('cost-item', {
    'cost-item--total': isTotal
  });

  return (
    <div className={costItemClassName}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
};

