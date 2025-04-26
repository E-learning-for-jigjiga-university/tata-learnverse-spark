
interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 card-hover">
      <div className="bg-tata-light-orange w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-tata-orange">
        {icon}
      </div>
      <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
