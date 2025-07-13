import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  FiMonitor, 
  FiEye, 
  FiClock, 
  FiPhone, 
  FiShield, 
  FiCheck, 
  FiArrowRight,
  FiMapPin,
  FiRadio,
  FiAlertCircle,
  FiHeadphones,
  FiActivity
} from 'react-icons/fi';

const MonitoringService = () => {
  const monitoringTypes = [
    {
      title: "CCTV Video Monitoring",
      icon: FiEye,
      description: "Live video surveillance with intelligent analytics and human verification",
      features: [
        "Live video streaming",
        "Motion detection alerts",
        "Facial recognition",
        "Behavior analysis",
        "Incident recording",
        "Real-time response"
      ],
      coverage: [
        "Retail stores",
        "Construction sites",
        "Industrial facilities",
        "Car parks"
      ]
    },
    {
      title: "Alarm Monitoring",
      icon: FiAlertCircle,
      description: "24/7 alarm signal monitoring with immediate response protocols",
      features: [
        "Intrusion detection",
        "Fire alarm monitoring",
        "Panic button response",
        "Medical alerts",
        "Environmental monitoring",
        "System diagnostics"
      ],
      coverage: [
        "Commercial buildings",
        "Residential properties",
        "Healthcare facilities",
        "Educational institutions"
      ]
    },
    {
      title: "Access Control Monitoring",
      icon: FiShield,
      description: "Real-time access control monitoring and management",
      features: [
        "Door access logs",
        "Unauthorized access alerts",
        "Visitor management",
        "Time-based restrictions",
        "Remote door control",
        "Tailgating detection"
      ],
      coverage: [
        "Office buildings",
        "Secure facilities",
        "Data centers",
        "Government buildings"
      ]
    },
    {
      title: "Remote Guarding",
      icon: FiHeadphones,
      description: "Virtual security presence with live operator intervention",
      features: [
        "Two-way audio communication",
        "Speaker warnings",
        "Live monitoring",
        "Incident escalation",
        "Emergency response",
        "Evidence collection"
      ],
      coverage: [
        "Multi-site operations",
        "Remote locations",
        "Temporary events",
        "High-risk areas"
      ]
    }
  ];

  const controlCenterFeatures = [
    {
      title: "24/7 Operation",
      icon: FiClock,
      description: "Continuously staffed monitoring center with no downtime"
    },
    {
      title: "Trained Operators",
      icon: FiHeadphones,
      description: "Certified security professionals with extensive training"
    },
    {
      title: "Rapid Response",
      icon: FiPhone,
      description: "Average response time of less than 30 seconds"
    },
    {
      title: "Advanced Technology",
      icon: FiMonitor,
      description: "State-of-the-art monitoring equipment and software"
    }
  ];

  const responseProtocols = [
    {
      level: "Level 1",
      title: "Automated Response",
      description: "System automatically processes standard alerts",
      timeframe: "Immediate",
      actions: [
        "Alarm signal received",
        "System verification",
        "Initial assessment",
        "Automated notifications"
      ]
    },
    {
      level: "Level 2",
      title: "Operator Assessment",
      description: "Human verification and initial response",
      timeframe: "< 30 seconds",
      actions: [
        "Operator review",
        "Video verification",
        "Client notification",
        "Initial response"
      ]
    },
    {
      level: "Level 3",
      title: "Emergency Response",
      description: "Full emergency protocol activation",
      timeframe: "< 2 minutes",
      actions: [
        "Emergency services",
        "Mobile response",
        "Stakeholder alerts",
        "Incident management"
      ]
    }
  ];

  const technologyStack = [
    {
      category: "Monitoring Software",
      technologies: [
        "Advanced video analytics",
        "AI-powered threat detection",
        "Multi-site management",
        "Real-time dashboards",
        "Mobile applications",
        "Cloud-based platform"
      ]
    },
    {
      category: "Communication Systems",
      technologies: [
        "Redundant communication paths",
        "Encrypted data transmission",
        "VoIP and telephony",
        "SMS and email alerts",
        "Mobile push notifications",
        "Two-way audio systems"
      ]
    },
    {
      category: "Infrastructure",
      technologies: [
        "Redundant power systems",
        "Multiple internet connections",
        "Secure data centers",
        "Climate controlled environment",
        "24/7 technical support",
        "Disaster recovery systems"
      ]
    }
  ];

  const benefits = [
    {
      title: "Cost Effective",
      description: "Significantly cheaper than on-site security guards",
      saving: "Up to 60%",
      comparison: "vs. physical guards"
    },
    {
      title: "Rapid Response",
      description: "Immediate response to security incidents",
      saving: "< 30 sec",
      comparison: "average response time"
    },
    {
      title: "Comprehensive Coverage",
      description: "Monitor multiple locations from single center",
      saving: "24/7",
      comparison: "continuous monitoring"
    },
    {
      title: "Evidence Collection",
      description: "Automatic recording and evidence preservation",
      saving: "100%",
      comparison: "incident documentation"
    }
  ];

  const caseStudies = [
    {
      title: "National Retail Chain",
      location: "UK-wide",
      description: "24/7 monitoring for 200 retail locations across the UK",
      solution: "Integrated CCTV monitoring, alarm response, and access control",
      results: [
        "80% reduction in theft incidents",
        "Improved staff safety",
        "Reduced security costs",
        "Faster incident response"
      ]
    },
    {
      title: "Industrial Complex",
      location: "Manchester, UK",
      description: "Remote monitoring for large manufacturing facility",
      solution: "Perimeter monitoring, access control, and environmental alerts",
      results: [
        "Zero security breaches",
        "Improved operational efficiency",
        "Enhanced safety compliance",
        "Reduced insurance premiums"
      ]
    }
  ];

  const industries = [
    {
      name: "Retail & Commercial",
      monitoring: "Loss prevention, customer safety, after-hours protection"
    },
    {
      name: "Industrial & Manufacturing",
      monitoring: "Perimeter security, equipment monitoring, safety compliance"
    },
    {
      name: "Healthcare",
      monitoring: "Patient safety, restricted area access, emergency response"
    },
    {
      name: "Education",
      monitoring: "Campus security, access control, incident management"
    },
    {
      name: "Construction",
      monitoring: "Site security, equipment protection, safety monitoring"
    },
    {
      name: "Government",
      monitoring: "Facility security, access control, threat assessment"
    }
  ];

  return (
    <Layout>
      <Head>
        <title>24/7 Security Monitoring Services - Remote Video Surveillance & Alarm Response | Forward Sector</title>
        <meta name="description" content="Professional 24/7 security monitoring services with live video surveillance, alarm response, and emergency protocols. Protect multiple locations from our control center." />
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
                    <FiMonitor className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    24/7 Monitoring Services
                  </h1>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Professional security monitoring from our state-of-the-art control center. Live video surveillance, alarm response, and emergency protocols operating around the clock.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                    Start Monitoring
                  </Link>
                  <Link href="tel:02039000716" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                    Call: 020 3900 0716
                  </Link>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/images/rapid-response.png" 
                  alt="Security Monitoring Center"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Control Center Features */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Our Control Center</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional monitoring facility with advanced technology and trained operators
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {controlCenterFeatures.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-4 inline-block mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Monitoring Types */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Monitoring Services</h2>
              <p className="text-xl text-gray-600">
                Comprehensive monitoring solutions for every security need
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {monitoringTypes.map((service, index) => (
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
                      <h4 className="font-semibold text-primary-800 mb-3">Features</h4>
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
                      <h4 className="font-semibold text-primary-800 mb-3">Coverage</h4>
                      <ul className="space-y-2">
                        {service.coverage.map((item, idx) => (
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

      {/* Response Protocols */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Response Protocols</h2>
              <p className="text-xl text-gray-600">
                Structured escalation procedures for effective incident management
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {responseProtocols.map((protocol, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{protocol.level}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{protocol.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{protocol.description}</p>
                    <div className="text-accent-600 font-semibold text-sm">{protocol.timeframe}</div>
                  </div>
                  <ul className="space-y-2">
                    {protocol.actions.map((action, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm">
                        <FiCheck className="h-4 w-4 text-success-500 mt-0.5" />
                        <span className="text-gray-700">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Technology & Infrastructure</h2>
              <p className="text-xl text-gray-600">
                Advanced technology stack ensuring reliable monitoring services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {technologyStack.map((tech, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">{tech.category}</h3>
                  <ul className="space-y-3">
                    {tech.technologies.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FiCheck className="h-5 w-5 text-success-500 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                Proven advantages of professional monitoring services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-accent-600 mb-2">{benefit.saving}</div>
                  <div className="text-sm text-gray-600 mb-4">{benefit.comparison}</div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Industry Applications</h2>
              <p className="text-xl text-gray-600">
                Specialized monitoring solutions for various sectors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-primary-900 mb-3">{industry.name}</h3>
                  <p className="text-gray-600 text-sm">{industry.monitoring}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">
                Real results from our monitoring services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
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
            <h2 className="text-4xl font-bold mb-6">Start 24/7 Monitoring Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get professional security monitoring with rapid response and advanced technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Start Monitoring
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

export default MonitoringService; 