
import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  onClick?: () => void;
}

const StatCard = ({ label, value, icon, trend, onClick }: StatCardProps) => {
  return (
    <div 
      className={`bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center ${
        onClick ? 'cursor-pointer' : ''
      }`}
      onClick={onClick}
    >
      <div className="mr-4 p-3 rounded-full bg-gray-50">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="font-poppins font-bold text-2xl text-gray-800">{value}</h3>
        <p className="text-gray-600">{label}</p>
        
        {trend && (
          <div className="mt-2 flex items-center">
            <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
              {trend.isPositive ? '+' : '-'}{Math.abs(trend.value)}%
            </span>
            <span className="text-xs text-gray-500 ml-1">from last period</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatCard;
