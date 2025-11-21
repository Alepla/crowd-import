import React from 'react';
import { CostItem } from './cost-item';

interface CostSummaryItem {
  label: string;
  value: string | number;
  isTotal?: boolean;
}

interface CostSummaryProps {
  title: string;
  items: CostSummaryItem[];
}

export const CostSummary: React.FC<CostSummaryProps> = ({ title, items }) => {
  return (
    <div className="cost-summary">
      <h3>{title}</h3>
      {items.map((item, index) => (
        <CostItem
          key={index}
          label={item.label}
          value={item.value}
          isTotal={item.isTotal}
        />
      ))}
    </div>
  );
};

