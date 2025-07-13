import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  FiFilter, 
  FiSearch, 
  FiEye, 
  FiShield, 
  FiUsers, 
  FiMonitor,
  FiArrowRight,
  FiMapPin,
  FiCalendar,
  FiTrendingUp,
  FiAward
} from 'react-icons/fi';

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filters = [
    { id: 'all', label: 'All Cases', count: 12 },
    { id: 'cctv', label: 'CCTV Solutions', count: 4 },
    { id: 'guarding', label: 'Manned Guarding', count: 3 },
    { id: 'monitoring', label: '24/7 Monitoring', count: 3 },
    { id: 'alarms', label: 'Alarm Systems', count: 2 }
  ];

  const industries = [
    { id: 'construction', label: 'Construction' },
    { id: 'retail', label: 'Retail' },
    { id: 'healthcare', label: 'Healthcare' },
    { id: 'education', label: 'Education' },
    { id: 'industrial', label: 'Industrial' },
    { id: 'events', label: 'Events' }
  ];

  const caseStudies = [
    {
      id: 'london-construction-security',
      title: 'Major London Construction Project Security',
      slug: 'london-construction-security',
      client: 'Metropolitan Construction Ltd',
      industry: 'construction',
      services: ['cctv', 'monitoring'],
      location: 'London, UK',
      duration: '18 months',
      projectValue: '£50M',
      description: 'Comprehensive security solution for a high-value construction development in central London.',
      challenge: 'Securing a £50M construction site in central London with valuable equipment and materials at risk.',
      solution: 'Deployed 6 solar-powered CCTV towers with 24/7 monitoring and rapid response protocols.',
      results: [
        '90% reduction in theft incidents',
        'Zero major security breaches',
        '£2M+ in prevented losses',
        '24/7 site coverage achieved'
      ],
      image: '/images/cctv-tower.png',
      gallery: [
        '/images/cctv-tower.png',
        '/images/control-room.png',
        '/images/rapid-response.png'
      ],
      featured: true
    },
    {
      id: 'retail-chain-monitoring',
      title: 'National Retail Chain Security Monitoring',
      slug: 'retail-chain-monitoring',
      client: 'Premium Retail Group',
      industry: 'retail',
      services: ['monitoring', 'alarms'],
      location: 'UK-wide',
      duration: 'Ongoing (2+ years)',
      projectValue: '200 locations',
      description: '24/7 monitoring solution for major retail chain across 200 UK locations.',
      challenge: 'Providing consistent security monitoring across 200 retail locations with varying layouts and risks.',
      solution: 'Integrated monitoring platform with centralized control room and standardized response protocols.',
      results: [
        '75% reduction in theft incidents',
        '99.9% system uptime',
        '£5M+ annual loss prevention',
        'Improved staff confidence'
      ],
      image: '/images/control-room.png',
      gallery: [
        '/images/control-room.png',
        '/images/rapid-response.png',
        '/images/cctv-tower.png'
      ],
      featured: true
    },
    {
      id: 'hospital-security-upgrade',
      title: 'Hospital Security System Upgrade',
      slug: 'hospital-security-upgrade',
      client: 'NHS Foundation Trust',
      industry: 'healthcare',
      services: ['guarding', 'alarms'],
      location: 'Birmingham, UK',
      duration: '6 months',
      projectValue: '1,200 beds',
      description: 'Complete security upgrade for major NHS hospital including manned guarding and access control.',
      challenge: 'Enhancing security while maintaining open access for patients and visitors in busy hospital environment.',
      solution: 'Professional security guards combined with discrete access control and visitor management systems.',
      results: [
        '60% reduction in incidents',
        'Improved patient safety',
        'Enhanced staff security',
        'Streamlined visitor access'
      ],
      image: '/images/guard.png',
      gallery: [
        '/images/guard.png',
        '/images/control-room.png',
        '/images/rapid-response.png'
      ],
      featured: false
    },
    {
      id: 'university-campus-security',
      title: 'University Campus Security Enhancement',
      slug: 'university-campus-security',
      client: 'Metropolitan University',
      industry: 'education',
      services: ['cctv', 'guarding'],
      location: 'Manchester, UK',
      duration: '12 months',
      projectValue: '25,000 students',
      description: 'Comprehensive campus security upgrade including CCTV network and security personnel.',
      challenge: 'Securing large university campus with multiple buildings and 24/7 student access requirements.',
      solution: 'Strategic CCTV placement with roving security patrols and emergency response protocols.',
      results: [
        '50% reduction in campus crime',
        'Faster emergency response',
        'Improved student safety',
        'Enhanced night security'
      ],
      image: '/images/cctv-tower.png',
      gallery: [
        '/images/cctv-tower.png',
        '/images/guard.png',
        '/images/rapid-response.png'
      ],
      featured: false
    },
    {
      id: 'festival-security-management',
      title: 'Music Festival Security Management',
      slug: 'festival-security-management',
      client: 'Summer Sounds Festival',
      industry: 'events',
      services: ['cctv', 'guarding'],
      location: 'Edinburgh, Scotland',
      duration: '1 week',
      projectValue: '50,000 attendees',
      description: 'Complete security solution for major outdoor music festival with 50,000 attendees.',
      challenge: 'Managing security for large outdoor event with multiple stages and diverse crowd demographics.',
      solution: 'Mobile CCTV towers, professional security teams, and crowd management specialists.',
      results: [
        'Zero major incidents',
        'Smooth crowd management',
        'Rapid incident response',
        'Successful event completion'
      ],
      image: '/images/rapid-response.png',
      gallery: [
        '/images/rapid-response.png',
        '/images/cctv-tower.png',
        '/images/guard.png'
      ],
      featured: true
    },
    {
      id: 'warehouse-perimeter-security',
      title: 'Industrial Warehouse Perimeter Security',
      slug: 'warehouse-perimeter-security',
      client: 'Logistics Solutions Ltd',
      industry: 'industrial',
      services: ['cctv', 'monitoring'],
      location: 'Liverpool, UK',
      duration: 'Ongoing (3+ years)',
      projectValue: '500,000 sq ft',
      description: 'Perimeter security solution for large industrial warehouse and distribution center.',
      challenge: 'Securing vast warehouse perimeter with valuable goods and equipment against organized theft.',
      solution: 'Comprehensive CCTV coverage with thermal imaging and intelligent motion detection.',
      results: [
        '85% reduction in break-ins',
        '24/7 perimeter monitoring',
        'Reduced insurance costs',
        'Enhanced asset protection'
      ],
      image: '/images/cctv-tower.png',
      gallery: [
        '/images/cctv-tower.png',
        '/images/control-room.png',
        '/images/rapid-response.png'
      ],
      featured: false
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesFilter = selectedFilter === 'all' || study.services.includes(selectedFilter);
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const featuredCaseStudies = caseStudies.filter(study => study.featured);

  const getServiceIcon = (service: string) => {
    switch (service) {
      case 'cctv': return FiEye;
      case 'guarding': return FiUsers;
      case 'monitoring': return FiMonitor;
      case 'alarms': return FiShield;
      default: return FiShield;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Security Case Studies - Real Client Success Stories | Forward Sector</title>
        <meta name="description" content="Explore our security case studies showcasing successful CCTV, monitoring, manned guarding, and alarm system implementations across various industries." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-padding section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real client case studies showcasing how our security solutions deliver measurable results across diverse industries
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Discuss Your Project
              </Link>
              <Link href="#case-studies" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                Browse Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Featured Success Stories</h2>
              <p className="text-xl text-gray-600">
                Highlighted projects demonstrating exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredCaseStudies.slice(0, 2).map((study) => (
                <div key={study.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-2 mb-3">
                      <FiAward className="h-5 w-5 text-accent-500" />
                      <span className="text-sm font-medium text-accent-600">Featured Case</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900 mb-3">{study.title}</h3>
                    <p className="text-gray-600 mb-4">{study.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-500">Client</div>
                        <div className="font-medium text-gray-900">{study.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Industry</div>
                        <div className="font-medium text-gray-900 capitalize">{study.industry}</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-2">
                        {study.services.map((service) => {
                          const Icon = getServiceIcon(service);
                          return (
                            <div key={service} className="bg-primary-100 rounded-full p-2">
                              <Icon className="h-4 w-4 text-primary-700" />
                            </div>
                          );
                        })}
                      </div>
                      <Link 
                        href={`/case-studies/${study.slug}`}
                        className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-800 font-medium transition-colors duration-200"
                      >
                        <span>Read Case Study</span>
                        <FiArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section id="case-studies" className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-primary-900 mb-6">All Case Studies</h2>
              
              {/* Search Bar */}
              <div className="relative mb-6">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search case studies by client, project, or industry..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                      selectedFilter === filter.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {filter.label} ({filter.count})
                  </button>
                ))}
              </div>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study) => (
                <div key={study.id} className="bg-silver-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video bg-gray-200 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <FiMapPin className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{study.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900 mb-2">{study.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{study.description}</p>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Client:</span>
                        <span className="font-medium text-gray-900">{study.client}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Duration:</span>
                        <span className="font-medium text-gray-900">{study.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        {study.services.slice(0, 3).map((service) => {
                          const Icon = getServiceIcon(service);
                          return (
                            <div key={service} className="bg-primary-100 rounded-full p-1.5">
                              <Icon className="h-3 w-3 text-primary-700" />
                            </div>
                          );
                        })}
                      </div>
                      <Link 
                        href={`/case-studies/${study.slug}`}
                        className="text-primary-600 hover:text-primary-800 font-medium text-sm transition-colors duration-200"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FiSearch className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No case studies found</h3>
                <p className="text-gray-600">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-900 to-primary-800 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join our growing list of satisfied clients with a customized security solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Start Your Project
              </Link>
              <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies; 