import ProductShowcase from "../../components/ProductShowcase";

export default function ProductsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Our Products
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            WeighSoft offers comprehensive weighbridge management solutions tailored to your business needs, 
            from small operations to enterprise-level implementations.
          </p>
        </div>
      </div>
      
      <ProductShowcase />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-blue-50 rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-8 sm:p-10">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-900">Need a custom solution?</h2>
              <p className="mt-3 text-lg text-gray-600">
                Contact our team to discuss your specific requirements and how we can tailor our solutions to your business.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 