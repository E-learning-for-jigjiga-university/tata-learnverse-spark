
import { Link } from 'react-router-dom';

const CourseCard = ({ id, title, instructor, level, duration, category, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 card-hover dark:shadow-gray-900/30">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="bg-tata-light-orange dark:bg-tata-orange/20 text-tata-orange text-xs font-medium px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="bg-tata-light-purple dark:bg-tata-purple/20 text-tata-purple text-xs font-medium px-2 py-1 rounded-full">
            {level}
          </span>
        </div>
        
        <h3 className="font-poppins font-semibold text-lg mb-2 dark:text-white line-clamp-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">By {instructor}</p>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">{duration}</span>
          <Link 
            to={`/courses/${id}`}
            className="text-tata-orange font-medium hover:text-tata-orange/80 transition-colors"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
