import Link from 'next/link';
import { FiEye, FiAlertTriangle, FiUsers, FiMonitor, FiArrowRight } from 'react-icons/fi';
import { Service } from '@/types';

interface ServicesSectionProps {
  services: Service[];
}

const ServicesSection = ({ services }: ServicesSectionProps) => {
  const serviceIcons = {
    'cctv-tower': FiEye,
    'alarm-systems': FiAlertTriangle,
    'manned-guarding': FiUsers,
    'monitoring': FiMonitor,
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-primary-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions tailored to your needs. From cutting-edge 
              surveillance technology to dedicated personnel, we provide the protection you deserve.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const IconComponent = serviceIcons[service.id as keyof typeof serviceIcons] || FiEye;
              
              return (
                <div
                  key={service.id}
                  className="group card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center group-hover:from-primary-600 group-hover:to-primary-700 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <IconComponent className="h-8 w-8 text-primary-700 group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    {/* Hexagon Background */}
                    <div className="absolute -top-2 -left-2 w-20 h-20 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <polygon
                          points="50,5 85,25 85,75 50,95 15,75 15,25"
                          fill="currentColor"
                          className="text-accent-500"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-primary-800 group-hover:text-primary-700 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-accent-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Learn More Link */}
                    <Link
                      href={service.link}
                      className="inline-flex items-center space-x-2 text-primary-700 hover:text-accent-600 font-medium transition-colors duration-300"
                    >
                      <span>Learn More</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">
              Need a custom security solution for your specific requirements?
            </p>
            <Link
              href="/contact"
              className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>Get Custom Quote</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 