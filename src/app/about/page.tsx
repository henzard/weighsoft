export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      bio: 'Founded WeighSoft in 1995 with a vision to revolutionize weighbridge management systems. Over 25 years of experience in software development and business management.',
      imageSrc: '/team/placeholder.jpg',
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      bio: 'Leading our technology strategy and development teams. Sarah brings 15 years of experience in software architecture and enterprise systems.',
      imageSrc: '/team/placeholder.jpg',
    },
    {
      name: 'Michael Brown',
      role: 'Head of Customer Success',
      bio: 'Ensuring our clients get the most out of WeighSoft solutions. Michael has helped hundreds of businesses optimize their weighing operations.',
      imageSrc: '/team/placeholder.jpg',
    },
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Company Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            About WeighSoft
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Providing innovative weighbridge management solutions since 1995
          </p>
        </div>
        
        <div className="mt-16 lg:mt-20">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="prose prose-blue prose-lg text-gray-600 mx-auto lg:max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">Our Story</h2>
              <p>
                WeighSoft was founded with a simple mission: to provide businesses with reliable, efficient weighbridge management software that makes operations smoother and more profitable.
              </p>
              <p>
                What started as a small software development company has grown into a trusted provider of weighing solutions across various industries, including agriculture, mining, logistics, and manufacturing.
              </p>
              <p>
                Our team combines deep industry knowledge with technical expertise to deliver solutions that address real business challenges faced by weighbridge operators.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 prose prose-blue prose-lg text-gray-600 mx-auto lg:max-w-none">
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              <p>
                We envision a future where weighbridge operations are seamlessly integrated with business systems, providing real-time insights and driving operational efficiency.
              </p>
              <p>
                By continuously innovating our software and staying ahead of industry trends, we aim to remain the preferred partner for businesses seeking reliable weighing solutions.
              </p>
              <p>
                Our commitment to excellence, customer satisfaction, and technological advancement guides everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Values */}
      <div className="bg-blue-50 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
              <p className="mt-4 text-lg text-gray-600">
                Core principles that guide our operations and relationships with clients.
              </p>
            </div>
            <div className="mt-12 lg:mt-0 lg:col-span-2">
              <dl className="space-y-10">
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Innovation</dt>
                  <dd className="mt-2 text-base text-gray-600">
                    We constantly explore new technologies and methodologies to enhance our solutions and provide greater value to our clients.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Reliability</dt>
                  <dd className="mt-2 text-base text-gray-600">
                    Our clients depend on our software for critical business operations. We are committed to delivering stable, dependable solutions.
                  </dd>
                </div>
                <div>
                  <dt className="text-lg leading-6 font-medium text-gray-900">Customer Focus</dt>
                  <dd className="mt-2 text-base text-gray-600">
                    We listen to our clients, understand their challenges, and work collaboratively to solve their problems.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Leadership Team
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
            Meet the people driving innovation and excellence at WeighSoft.
          </p>
        </div>
        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-x-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 h-48 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">{member.name.charAt(0)}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{member.role}</p>
                <p className="mt-4 text-base text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-700 mt-20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to optimize your weighbridge operations?</span>
            <span className="block text-blue-200">Contact us today for a demo.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 