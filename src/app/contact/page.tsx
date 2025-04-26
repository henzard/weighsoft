import Contact from "../../components/Contact";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our products or need support? Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
      
      <Contact />
    </div>
  );
} 