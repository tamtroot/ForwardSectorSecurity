import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  FiEye, 
  FiShield, 
  FiAlertTriangle, 
  FiUsers, 
  FiMonitor, 
  FiCheck, 
  FiArrowRight,
  FiClock,
  FiPhone,
  FiStar
} from 'react-icons/fi';

const Services = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'cctv-tower',
      title: 'CCTV Tower Solutions',
      icon: FiEye,
      description: 'Mobile solar-powered surveillance towers for comprehensive perimeter security',
      image: '/images/cctv-tower.png',
      features: [
        '360° Pan-Tilt-Zoom cameras',
        'Solar powered with battery backup',
        'Rapid deployment in 30 minutes',
        'Real-time monitoring capability',
        'Night vision & thermal imaging',
        'Weatherproof construction'
      ],
      applications: [
        'Construction sites',
        'Events & festivals',
        'Remote locations',
        'Temporary installations'
      ],
      href: '/services/cctv-tower'
    },
    {
      id: 'alarm-systems',
      title: 'Advanced Alarm Systems',
      icon: FiAlertTriangle,
      description: 'Intelligent intrusion detection with instant alert capabilities',
      image: '/images/control-room.png',
      features: [
        'PIR motion sensors',
        'Door/window contacts',
        'Glass break detectors',
        'Panic buttons',
        'Smart home integration',
        'Mobile app control'
      ],
      applications: [
        'Residential properties',
        'Commercial buildings',
        'Industrial facilities',
        'Retail establishments'
      ],
      href: '/services/alarm-systems'
    },
    {
      id: 'manned-guarding',
      title: 'Professional Manned Guarding',
      icon: FiUsers,
      description: 'Highly trained security personnel providing physical protection',
      image: '/images/guard.png',
      features: [
        'SIA licensed officers',
        'Static & mobile patrols',
        'Access control management',
        'Incident response',
        'Detailed reporting',
        'Emergency procedures'
      ],
      applications: [
        'Corporate offices',
        'Retail centers',
        'Industrial sites',
        'Special events'
      ],
      href: '/services/manned-guarding'
    },
    {
      id: 'monitoring',
      title: '24/7 Monitoring Services',
      icon: FiMonitor,
      description: 'Round-the-clock surveillance from our state-of-the-art control center',
      image: '/images/rapid-response.png',
      features: [
        'Live video monitoring',
        'Alarm response center',
        'Incident escalation',
        'Emergency services liaison',
        'Detailed incident logs',
        'Monthly reporting'
      ],
      applications: [
        'Multi-site operations',
        'Critical infrastructure',
        'High-risk locations',
        'Remote facilities'
      ],
      href: '/services/monitoring'
    }
  ];

  const stats = [
    { number: '500+', label: 'Sites Protected', icon: FiShield },
    { number: '99.9%', label: 'Uptime Guarantee', icon: FiClock },
    { number: '24/7', label: 'Monitoring', icon: FiMonitor },
    { number: '<2min', label: 'Response Time', icon: FiPhone }
  ];

  const testimonials = [
    {
      quote: "Forward Sector's CCTV towers have significantly improved our site security. The rapid deployment and solar power make them perfect for our construction projects.",
      author: "Sarah Johnson",
      position: "Security Manager",
      company: "Metropolitan Construction"
    },
    {
      quote: "The professionalism of their manned guarding service is exceptional. Our retail locations have never felt more secure.",
      author: "Mike Chen",
      position: "Operations Director",
      company: "Premium Retail Group"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Security Services - Forward Sector</title>
        <meta name="description" content="Comprehensive security services including CCTV towers, alarm systems, manned guarding, and 24/7 monitoring solutions." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-padding section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Comprehensive Security Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Protecting what matters most with cutting-edge technology and professional expertise
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Get Quote
              </Link>
              <Link href="#services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-4 inline-block mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Security Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From mobile surveillance to professional guarding, we provide comprehensive security solutions tailored to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={service.id} className="bg-silver-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-3">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-900 mb-2">{service.title}</h3>
                        <p className="text-gray-600 mb-4">{service.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-primary-800 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <FiCheck className="h-4 w-4 text-success-500" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-800 mb-3">Applications</h4>
                        <ul className="space-y-2">
                          {service.applications.slice(0, 3).map((app, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                              <FiCheck className="h-4 w-4 text-success-500" />
                              <span>{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link 
                      href={service.href}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
                    >
                      <span>Learn More</span>
                      <FiArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">What Our Clients Say</h2>
              <p className="text-xl text-gray-600">
                Trusted by leading organizations across various industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="h-5 w-5 text-accent-500 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-primary-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Secure Your Property?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free security assessment and customized quote for your specific needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Request Quote
              </Link>
              <Link href="tel:02039000716" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                Call Now: 020 3900 0716
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services; 