
import { Link } from 'react-router-dom';

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  level: string;
  duration: string;
  category: string;
  image: string;
}

const CourseCard = ({ id, title, instructor, level, duration, category, image }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="bg-tata-light-orange text-tata-orange text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="bg-tata-light-purple text-tata-purple text-xs font-medium px-2 py-1 rounded-full">
            {level}
          </span>
        </div>
        
        <h3 className="font-poppins font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">By {instructor}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 text-sm">{duration}</span>
          <Link 
            to={`/courses/${id}`}
            className="text-tata-orange font-medium hover:text-tata-orange/80 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
