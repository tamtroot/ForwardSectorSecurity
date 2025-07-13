import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  FiUsers, 
  FiShield, 
  FiEye, 
  FiClock, 
  FiRadio, 
  FiCheck, 
  FiArrowRight,
  FiMapPin,
  FiUser,
  FiClipboard,
  FiAlertCircle,
  FiAward
} from 'react-icons/fi';

const MannedGuardingService = () => {
  const serviceTypes = [
    {
      title: "Static Security Guards",
      icon: FiShield,
      description: "Permanent security presence at fixed locations",
      features: [
        "Reception desk duties",
        "Access control management",
        "Visitor screening",
        "CCTV monitoring",
        "Alarm response",
        "Incident reporting"
      ],
      ideal: [
        "Corporate offices",
        "Retail centers",
        "Industrial facilities",
        "Educational institutions"
      ]
    },
    {
      title: "Mobile Security Patrols",
      icon: FiEye,
      description: "Regular security checks across multiple locations",
      features: [
        "Scheduled patrols",
        "Key holding service",
        "Alarm response",
        "Perimeter checks",
        "Mobile reporting",
        "Emergency response"
      ],
      ideal: [
        "Multiple site operations",
        "Vacant properties",
        "Construction sites",
        "Business parks"
      ]
    },
    {
      title: "Event Security",
      icon: FiUsers,
      description: "Specialized security for events and gatherings",
      features: [
        "Crowd management",
        "VIP protection",
        "Bag searches",
        "Ticket validation",
        "Emergency procedures",
        "Stewarding services"
      ],
      ideal: [
        "Conferences",
        "Festivals",
        "Sporting events",
        "Corporate functions"
      ]
    },
    {
      title: "Close Protection",
      icon: FiUser,
      description: "Personal protection for high-profile individuals",
      features: [
        "Risk assessment",
        "Route planning",
        "Advance security",
        "Escort services",
        "Emergency response",
        "Discreet protection"
      ],
      ideal: [
        "Executives",
        "Celebrities",
        "Politicians",
        "High-net-worth individuals"
      ]
    }
  ];

  const guardQualifications = [
    {
      title: "SIA Licensed",
      icon: FiAward,
      description: "All guards hold valid Security Industry Authority licenses"
    },
    {
      title: "Background Checked",
      icon: FiClipboard,
      description: "Enhanced DBS checks and comprehensive vetting procedures"
    },
    {
      title: "Professional Training",
      icon: FiUser,
      description: "Ongoing training in conflict resolution and emergency procedures"
    },
    {
      title: "Uniformed & Equipped",
      icon: FiRadio,
      description: "Professional uniforms and communication equipment provided"
    }
  ];

  const industries = [
    {
      name: "Corporate & Commercial",
      description: "Professional security for business environments",
      services: [
        "Reception security",
        "Executive protection",
        "Building access control",
        "Visitor management",
        "Loading bay supervision",
        "Car park security"
      ]
    },
    {
      name: "Retail & Shopping Centers",
      description: "Loss prevention and customer safety",
      services: [
        "Store detectives",
        "Theft prevention",
        "Customer assistance",
        "Cash escort services",
        "Opening/closing duties",
        "Incident response"
      ]
    },
    {
      name: "Industrial & Manufacturing",
      description: "Specialized security for industrial facilities",
      services: [
        "Gate house duties",
        "Vehicle inspections",
        "Safety compliance",
        "Equipment protection",
        "Hazardous area monitoring",
        "Emergency response"
      ]
    },
    {
      name: "Healthcare & Education",
      description: "Sensitive environment security",
      services: [
        "Patient/student safety",
        "Visitor management",
        "Car park security",
        "Emergency procedures",
        "Conflict resolution",
        "Asset protection"
      ]
    }
  ];

  const benefits = [
    {
      title: "Crime Deterrent",
      description: "Visible security presence deters criminal activity and antisocial behavior",
      percentage: "85%",
      metric: "reduction in incidents"
    },
    {
      title: "Rapid Response",
      description: "Immediate on-site response to security incidents and emergencies",
      percentage: "<2min",
      metric: "average response time"
    },
    {
      title: "Professional Image",
      description: "Uniformed guards enhance your company's professional appearance",
      percentage: "95%",
      metric: "client satisfaction"
    },
    {
      title: "Cost Effective",
      description: "More economical than internal security departments",
      percentage: "40%",
      metric: "cost savings vs in-house"
    }
  ];

  const caseStudies = [
    {
      title: "Corporate Headquarters Security",
      location: "London, UK",
      description: "24/7 manned guarding for 40-story office building with 5,000 employees",
      solution: "Static guards, mobile patrols, and executive protection services",
      results: [
        "Zero security incidents in 2 years",
        "Improved employee confidence",
        "Enhanced building access control",
        "Reduced insurance premiums"
      ]
    },
    {
      title: "Shopping Center Security",
      location: "Birmingham, UK",
      description: "Comprehensive security for busy retail center with 150 stores",
      solution: "Static guards, mobile patrols, and specialized retail security",
      results: [
        "60% reduction in theft incidents",
        "Improved customer experience",
        "Enhanced store confidence",
        "Effective crowd management"
      ]
    }
  ];

  const training = [
    "Conflict resolution and de-escalation",
    "Emergency first aid and CPR",
    "Fire safety and evacuation procedures",
    "CCTV operation and monitoring",
    "Report writing and documentation",
    "Customer service excellence",
    "Health and safety compliance",
    "Counter-terrorism awareness"
  ];

  return (
    <Layout>
      <Head>
        <title>Professional Manned Guarding Services - SIA Licensed Security Guards | Forward Sector</title>
        <meta name="description" content="Professional manned guarding services with SIA licensed security guards. Static security, mobile patrols, event security, and close protection services." />
      </Head>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container-padding section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-accent-500 rounded-lg p-3">
                    <FiUsers className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Professional Manned Guarding
                  </h1>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Highly trained SIA licensed security personnel providing professional protection services tailored to your specific requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                    Request Guards
                  </Link>
                  <Link href="tel:02039000716" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                    Call: 020 3900 0716
                  </Link>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/images/guard.png" 
                  alt="Professional Security Guard"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guard Qualifications */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Why Choose Our Security Guards?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional, reliable, and fully qualified security personnel
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {guardQualifications.map((qual, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-4 inline-block mb-4">
                    <qual.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{qual.title}</h3>
                  <p className="text-gray-600">{qual.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Security Guard Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive manned guarding solutions for every requirement
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceTypes.map((service, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg p-3">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">Services Include</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <FiCheck className="h-4 w-4 text-success-500 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">Ideal For</h4>
                      <ul className="space-y-2">
                        {service.ideal.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <FiCheck className="h-4 w-4 text-success-500 mt-0.5" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Key Benefits</h2>
              <p className="text-xl text-gray-600">
                Measurable results from professional security services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">{benefit.percentage}</div>
                  <div className="text-sm text-gray-600 mb-4">{benefit.metric}</div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Industry Expertise</h2>
              <p className="text-xl text-gray-600">
                Specialized security solutions for different sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Services Include:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {industry.services.map((service, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm">
                          <FiCheck className="h-4 w-4 text-success-500 mt-0.5" />
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Guard Training & Development</h2>
              <p className="text-xl text-gray-600">
                Comprehensive training ensures professional, effective security services
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">Training Areas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {training.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-silver-50 rounded-lg">
                    <FiCheck className="h-5 w-5 text-success-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">
                Real results from our manned guarding services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center space-x-2 mb-4">
                    <FiMapPin className="h-5 w-5 text-primary-600" />
                    <span className="text-sm text-gray-600">{study.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-primary-800 mb-2">Solution:</h4>
                    <p className="text-gray-700 text-sm">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FiCheck className="h-4 w-4 text-success-500 mt-1" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
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
            <h2 className="text-4xl font-bold mb-6">Need Professional Security Guards?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free security assessment and customized manned guarding quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Request Security Guards
              </Link>
              <Link href="/services" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default MannedGuardingService; 