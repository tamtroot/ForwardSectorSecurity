import Link from 'next/link';
import { FiArrowRight, FiEye, FiMonitor, FiUsers } from 'react-icons/fi';

const VisualShowcase = () => {
  const showcaseItems = [
    {
      id: 'cctv-tower',
      title: 'Solar-Powered CCTV Towers',
      description: 'Advanced mobile surveillance systems with eco-friendly solar power and cutting-edge camera technology.',
      image: '/images/cctv-tower.png',
      features: ['Solar powered', '7-day battery backup', 'HD night vision', 'Weather resistant'],
      link: '/services/cctv-tower',
      icon: FiEye,
    },
    {
      id: 'monitoring-center',
      title: '24/7 Monitoring Center',
      description: 'Professional operators monitoring your security systems around the clock from our state-of-the-art control room.',
      image: '/images/control-room.png',
      features: ['24/7 surveillance', 'Instant alerts', 'Video verification', 'Emergency dispatch'],
      link: '/services/monitoring',
      icon: FiMonitor,
    },
    {
      id: 'manned-guarding',
      title: 'Professional Manned Guarding',
      description: 'Highly trained security personnel providing on-site protection, access control, and customer service excellence.',
      image: '/images/guard.png',
      features: ['Licensed officers', 'Customer service', 'Access control', 'Incident response'],
      link: '/services/manned-guarding',
      icon: FiUsers,
    },
  ];

  return (
    <section className="section-padding bg-silver-100">
      <div className="container-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-primary-900 mb-4">Our Technology in Action</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our cutting-edge security solutions in real-world applications. 
              From solar-powered surveillance to professional monitoring and manned guarding services.
            </p>
          </div>

          <div className="space-y-24">
            {showcaseItems.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-2xl">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    {/* Overlay Icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-3xl font-display font-bold text-primary-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="grid grid-cols-2 gap-3">
                      {item.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-accent-500 rounded-full" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      <Link
                        href={item.link}
                        className="inline-flex items-center space-x-2 text-primary-900 hover:text-primary-800 font-semibold text-lg group"
                      >
                        <span>Learn More About This Service</span>
                        <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-display font-bold text-primary-900 mb-4">
              Ready to See These Solutions in Action?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Schedule a demonstration or site visit to see how our technology 
              can enhance your security infrastructure.
            </p>
            <Link
              href="/contact"
              className="btn btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>Schedule a Demo</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualShowcase; 