import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  change?: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, color, change }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
          {change && (
            <p className="text-sm text-green-600 mt-1">{change}</p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;