const Testimonials = () => {
  const testimonials = [
    {
      content: "WeighSoft Enterprise has transformed our multi-site operations. The centralized reporting and real-time monitoring capabilities have improved our efficiency by over 30%.",
      author: {
        name: "John Doe",
        title: "Operations Manager, Mining Solutions Ltd",
      },
    },
    {
      content: "As a medium-sized logistics company, WeighSoft Standard has been the perfect solution. Easy to use, reliable, and excellent customer support.",
      author: {
        name: "Jane Smith",
        title: "Logistics Director, FastFreight Inc",
      },
    },
    {
      content: "The customization options in WeighSoft allowed us to tailor the system to our unique agricultural needs. The return on investment has been remarkable.",
      author: {
        name: "Michael Johnson",
        title: "CEO, AgriWeigh Solutions",
      },
    },
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by businesses worldwide
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Hear what our clients have to say about their experience with WeighSoft.
          </p>
        </div>

        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="relative bg-white p-6 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600"></div>
              <svg 
                className="h-12 w-12 text-gray-300 mb-4" 
                fill="currentColor" 
                viewBox="0 0 32 32" 
                aria-hidden="true"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.896 3.456-8.352 9.12-8.352 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <p className="text-lg text-gray-700 italic mb-4">{testimonial.content}</p>
              <div className="flex items-center mt-6">
                <div className="h-10 w-10 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.author.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.author.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 