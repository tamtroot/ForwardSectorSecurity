import Layout from '@/components/layout/Layout';
import Link from 'next/link';
import { teamMembers } from '@/data/sample-data';
import { 
  FiMail, 
  FiLinkedin, 
  FiShield, 
  FiTarget, 
  FiUsers, 
  FiTrendingUp,
  FiArrowRight
} from 'react-icons/fi';

const About = () => {
  const companyValues = [
    {
      icon: FiShield,
      title: 'Security First',
      description: 'Every solution is designed with security as the top priority, ensuring maximum protection for our clients.',
    },
    {
      icon: FiTarget,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from initial consultation to ongoing support.',
    },
    {
      icon: FiUsers,
      title: 'Client Focus',
      description: 'Our clients are at the heart of everything we do. We build lasting relationships based on trust and results.',
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We continuously innovate and adopt new technologies to stay ahead of evolving security challenges.',
    },
  ];

  const milestones = [
    { year: '2018', event: 'Forward Sector founded with a vision to revolutionize security services' },
    { year: '2019', event: 'Launched first solar-powered CCTV tower solutions' },
    { year: '2020', event: 'Expanded to serve major construction and retail clients' },
    { year: '2021', event: 'Opened 24/7 monitoring center with advanced technology' },
    { year: '2022', event: 'Achieved recognition as leading eco-friendly security provider' },
    { year: '2023', event: 'Expanded services to include comprehensive security packages' },
  ];

  return (
    <Layout
      title="About Forward Sector - Professional Security Experts"
      description="Learn about Forward Sector's mission to provide cutting-edge security solutions with eco-friendly technology and professional expertise."
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary-800" />
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
        
        <div className="relative container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              About Forward Sector
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              We're pioneering the future of security with innovative, eco-friendly solutions 
              that protect what matters most to businesses across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-primary-900 mb-6">Our Story</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Forward Sector was founded in 2018 with a simple yet powerful mission: to transform 
                    the security industry through innovative, sustainable solutions. Our founders recognized 
                    that traditional security services were falling behind the rapidly evolving needs of 
                    modern businesses.
                  </p>
                  <p>
                    What started as a small team of security professionals and engineers has grown into 
                    a leading provider of comprehensive security solutions. We've always believed that 
                    security shouldn't come at the cost of environmental responsibility, which is why 
                    we pioneered solar-powered surveillance systems.
                  </p>
                  <p>
                    Today, we serve hundreds of clients across the UK, from small businesses to major 
                    corporations, providing them with the peace of mind that comes from knowing their 
                    assets are protected by the most advanced security technology available.
                  </p>
                </div>
              </div>
              
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img
                  src="/images/control-room.png"
                  alt="Forward Sector monitoring center operations"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary-900 mb-4">Our Mission & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're driven by a commitment to excellence, innovation, and sustainability 
                in everything we do.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-silver-100 rounded-lg p-8 mb-12 shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-primary-900 mb-4">Our Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  To provide innovative, eco-friendly security solutions that protect businesses 
                  and communities while contributing to a sustainable future. We combine cutting-edge 
                  technology with professional expertise to deliver unparalleled security services.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-silver-100 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary-900" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">
                Key milestones in our mission to revolutionize security services
              </p>
            </div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-4 h-4 bg-primary-900 rounded-full"></div>
                    {index < milestones.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-px h-12 bg-gray-300"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="text-lg font-semibold text-primary-900">
                        {milestone.year}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-primary-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who lead Forward Sector's mission 
                to deliver exceptional security solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-silver-100 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square bg-gray-200 rounded-lg mb-6 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-medium mb-3">
                      {member.title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    <div className="flex items-center justify-center space-x-4">
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="text-gray-400 hover:text-primary-900 transition-colors duration-200"
                        >
                          <FiMail className="h-5 w-5" />
                        </a>
                      )}
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary-900 transition-colors duration-200"
                        >
                          <FiLinkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-900 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white mb-6">Ready to Work with Us?</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Let's discuss how Forward Sector can help protect your business with 
              our innovative security solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="btn btn-secondary bg-silver-100 text-primary-900 hover:bg-silver-200 text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Get in Touch</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              
              <Link
                href="/services"
                className="btn btn-outline border-silver-200 text-silver-700 hover:bg-silver-50 hover:text-primary-900 text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <span>Our Services</span>
                <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About; 