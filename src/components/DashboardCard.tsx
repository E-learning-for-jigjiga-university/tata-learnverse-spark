import { Link } from 'react-router-dom';

interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  to?: string | null;
}

const DashboardCard = ({ title, children, className = '', to = null }: DashboardCardProps) => {
  const cardContent = (
    <div className={`bg-white rounded-xl p-6 shadow-sm ${className}`}>
      <h3 className="font-poppins text-lg font-medium mb-4">{title}</h3>
      {children}
    </div>
  );

  // If a link is provided, wrap the card in a Link component
  if (to) {
    return <Link to={to} className="block hover:no-underline">{cardContent}</Link>;
  }
  
  // Otherwise return the card as is
  return cardContent;
};

export default DashboardCard;
