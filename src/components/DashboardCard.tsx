
interface DashboardCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard = ({ title, children, className = '' }: DashboardCardProps) => {
  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm ${className}`}>
      <h3 className="font-poppins text-lg font-medium mb-4">{title}</h3>
      {children}
    </div>
  );
};

export default DashboardCard;
