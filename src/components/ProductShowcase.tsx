import Link from 'next/link';

const ProductShowcase = () => {
  const products = [
    {
      name: 'WeighSoft Enterprise',
      description: 'Comprehensive weighbridge management solution for large-scale operations with multiple locations, advanced analytics, and ERP integration.',
      features: [
        'Multi-location support',
        'Advanced reporting and analytics',
        'Customizable workflows',
        'Unlimited user accounts',
        'Enterprise-grade security',
        'Full API access',
      ],
      cta: 'Learn More',
      href: '/products/enterprise',
    },
    {
      name: 'WeighSoft Standard',
      description: 'Reliable weighbridge software for small to medium businesses seeking efficiency, accuracy, and streamlined operations.',
      features: [
        'Single-location support',
        'Standard reporting',
        'Basic customization',
        'Up to 5 user accounts',
        'Secure data management',
        'Email support',
      ],
      cta: 'Learn More',
      href: '/products/standard',
    },
  ];

  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Solutions</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Choose the right solution for your business
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            WeighSoft offers flexible solutions designed to meet the specific needs of your weighbridge operations.
          </p>
        </div>

        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8">
          {products.map((product) => (
            <div 
              key={product.name} 
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="p-6 flex-1">
                <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                <p className="mt-4 text-base text-gray-600">{product.description}</p>
                <ul className="mt-6 space-y-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <svg 
                        className="h-5 w-5 text-green-500" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="ml-2 text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50">
                <Link 
                  href={product.href}
                  className="block w-full bg-blue-600 text-center rounded-md py-3 px-4 font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {product.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase; 