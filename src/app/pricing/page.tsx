export default function PricingPage() {
  const pricingPlans = [
    {
      name: 'Standard - Once-off',
      price: 'R29,995',
      description: 'Perfect for small to medium businesses',
      features: [
        'Single location support',
        'Basic reporting',
        'Up to 5 user accounts',
        '1 year of email support',
        'Software updates for 1 year',
        'One-time payment',
      ],
      cta: 'Buy Now',
      popular: false,
    },
    {
      name: 'Standard - Subscription',
      price: 'R1,999/month',
      description: 'Flexibility for growing businesses',
      features: [
        'Single location support',
        'Basic reporting',
        'Up to 5 user accounts',
        'Ongoing email support',
        'Access to all software updates',
        'Monthly or annual billing',
      ],
      cta: 'Start Subscription',
      popular: true,
    },
    {
      name: 'Enterprise - Once-off',
      price: 'R69,995',
      description: 'For organizations with complex needs',
      features: [
        'Multi-location support',
        'Advanced analytics and reporting',
        'Unlimited user accounts',
        'Premium support for 1 year',
        'Software updates for 1 year',
        'One-time payment',
      ],
      cta: 'Buy Now',
      popular: false,
    },
    {
      name: 'Enterprise - Subscription',
      price: 'R4,999/month',
      description: 'Complete solution with ongoing support',
      features: [
        'Multi-location support',
        'Advanced analytics and reporting',
        'Unlimited user accounts',
        'Priority support',
        'Access to all software updates',
        'Monthly or annual billing',
      ],
      cta: 'Start Subscription',
      popular: false,
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for your business. All plans include our core weighbridge management features.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-8 md:grid-cols-2 lg:grid-cols-4 md:gap-x-6">
          {pricingPlans.map((plan) => (
            <div key={plan.name} className={`bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${plan.popular ? 'ring-2 ring-blue-600' : ''}`}>
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-6 flex-1">
                <h2 className="text-xl font-semibold text-gray-900">{plan.name}</h2>
                <p className="mt-4 text-3xl font-extrabold text-gray-900">{plan.price}</p>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg 
                        className="flex-shrink-0 h-5 w-5 text-green-500" 
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
                      <span className="ml-2 text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 bg-gray-50 border-t border-gray-200">
                <button
                  className={`w-full text-center py-3 px-4 rounded-md shadow font-medium text-white ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 sm:p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-900">Need a custom solution?</h2>
            <p className="mt-3 text-lg text-gray-600">
              Contact our sales team for custom pricing, implementation services, or specific requirements.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 