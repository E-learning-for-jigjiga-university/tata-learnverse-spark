
import React from 'react';

interface StatCardProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const StatCard = ({ label, value, icon }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 flex items-center">
      <div className="mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-poppins font-bold text-2xl text-gray-800">{value}</h3>
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
