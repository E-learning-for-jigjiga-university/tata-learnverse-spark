
const PartnerLogos = () => {
  const partners = [
    { name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' },
    { name: 'Udemy', logo: 'https://seeklogo.com/images/U/udemy-logo-C3D3F5AC0C-seeklogo.com.png' },
    { name: 'Khan Academy', logo: 'https://cdn.worldvectorlogo.com/logos/khan-academy-1.svg' },
    { name: 'CodeAcademy', logo: 'https://seeklogo.com/images/C/codecademy-logo-472CA6C0C3-seeklogo.com.png' },
    { name: 'Cloud Academy', logo: 'https://seeklogo.com/images/C/cloud-academy-logo-A791EBDBC9-seeklogo.com.png' }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto">
        <h3 className="text-center text-gray-500 font-medium mb-8">We are trusted by</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {partners.map((partner) => (
            <div key={partner.name} className="w-32 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
