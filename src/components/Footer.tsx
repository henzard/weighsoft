import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="font-bold text-2xl text-blue-700">WeighSoft</div>
            <p className="text-gray-600 text-base">
              Providing innovative weighing solutions for businesses since 1995.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19.7 3H4.3A1.3 1.3 0 0 0 3 4.3v15.4A1.3 1.3 0 0 0 4.3 21h15.4a1.3 1.3 0 0 0 1.3-1.3V4.3A1.3 1.3 0 0 0 19.7 3zM8.339 18.338H5.667v-8.59h2.672v8.59zM7.004 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.764H15.67v-4.177c0-.996-.017-2.278-1.387-2.278-1.389 0-1.601 1.086-1.601 2.206v4.249h-2.667v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/products/enterprise" className="text-base text-gray-600 hover:text-blue-700">
                      WeighSoft Enterprise
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/standard" className="text-base text-gray-600 hover:text-blue-700">
                      WeighSoft Standard
                    </Link>
                  </li>
                  <li>
                    <Link href="/products/features" className="text-base text-gray-600 hover:text-blue-700">
                      Features
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Support</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/support" className="text-base text-gray-600 hover:text-blue-700">
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-base text-gray-600 hover:text-blue-700">
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="text-base text-gray-600 hover:text-blue-700">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about" className="text-base text-gray-600 hover:text-blue-700">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-base text-gray-600 hover:text-blue-700">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="text-base text-gray-600 hover:text-blue-700">
                      Careers
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy" className="text-base text-gray-600 hover:text-blue-700">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-base text-gray-600 hover:text-blue-700">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            &copy; {new Date().getFullYear()} WeighSoft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 