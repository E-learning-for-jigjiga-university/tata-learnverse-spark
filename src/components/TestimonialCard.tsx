
interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
}

const TestimonialCard = ({ name, role, company, image, content }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-poppins font-medium text-tata-dark">{name}</h4>
          <p className="text-gray-500 text-sm">{role}, {company}</p>
        </div>
      </div>
      
      <p className="text-gray-600">"{content}"</p>
      
      <div className="mt-4 flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#F97316"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
