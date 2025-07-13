import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import VisualShowcase from '@/components/home/VisualShowcase';
import { heroSlides, services, testimonials, caseStudies, whyChooseUs } from '@/data/sample-data';
import Link from 'next/link';
import { 
  FiCheckCircle, 
  FiArrowRight, 
  FiMessageCircle, 
  FiStar,
  FiTool,
  FiCpu,
  FiShield,
  FiClock,
  FiZap,
  FiSettings
} from 'react-icons/fi';
import { Testimonial, CaseStudy } from '@/types';

const Home = () => {
  const iconMap = {
    'leaf': FiTool,
    'cpu': FiCpu,
    'shield': FiShield,
    'clock': FiClock,
    'zap': FiZap,
    'settings': FiSettings,
  };

  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection slides={heroSlides} />

      {/* Services Section */}
      <ServicesSection services={services} />

      {/* Visual Showcase Section */}
      <VisualShowcase />

      {/* Why Choose Us Section */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary-900 mb-4">Why Choose Forward Sector?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with professional expertise to deliver 
                security solutions that exceed expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const IconComponent = iconMap[item.icon as keyof typeof iconMap] || FiShield;
                
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center shadow-md">
                        <IconComponent className="h-6 w-6 text-primary-700" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary-800 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies Section */}
              <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients. See how we've helped businesses 
                enhance their security and achieve peace of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.slice(0, 3).map((study, index) => (
                <div
                  key={study.id}
                  className="card hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gray-200 rounded-lg mb-6 overflow-hidden">
                    <img
                      src={study.images[0]}
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-primary-900 bg-primary-100 px-3 py-1 rounded-full">
                        {study.service}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary-900">
                      {study.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {study.excerpt}
                    </p>

                    <div className="space-y-2">
                      <h4 className="font-medium text-primary-900">Key Results:</h4>
                      <ul className="space-y-1">
                        {study.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                            <FiCheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center space-x-2 text-primary-900 hover:text-primary-800 font-medium transition-colors duration-300"
                    >
                      <span>View Case Study</span>
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="btn btn-outline text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>View All Case Studies</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-white mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Don't just take our word for it. Hear from the businesses that trust 
                Forward Sector with their security needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <FiMessageCircle className="h-8 w-8 text-gray-300 mr-3" />
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <FiStar key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-200 leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-white">{testimonial.author}</p>
                      <p className="text-gray-300 text-sm">
                        {testimonial.title}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-primary-900 mb-6">Ready to Secure Your Future?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get a free security consultation and custom quote tailored to your specific needs. 
              Our experts are ready to help you choose the right solution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get Free Quote</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/services"
                className="btn btn-outline text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Explore Services</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600">
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="h-5 w-5 text-success-500" />
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="h-5 w-5 text-success-500" />
                  <span>Custom solutions</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FiCheckCircle className="h-5 w-5 text-success-500" />
                  <span>24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home; 