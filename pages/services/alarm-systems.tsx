import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  FiAlertTriangle, 
  FiShield, 
  FiSmartphone, 
  FiWifi, 
  FiClock, 
  FiCheck, 
  FiArrowRight,
  FiMapPin,
  FiActivity,
  FiLock,
  FiRadio,
  FiHome
} from 'react-icons/fi';

const AlarmSystemsService = () => {
  const systemTypes = [
    {
      title: "Intruder Alarm Systems",
      icon: FiActivity,
      description: "Advanced motion detection and perimeter protection",
      features: [
        "PIR motion sensors",
        "Dual-tech detectors",
        "Door/window contacts",
        "Glass break detectors",
        "Beam break sensors",
        "Shock sensors"
      ],
      applications: [
        "Residential properties",
        "Commercial buildings",
        "Retail stores",
        "Warehouses"
      ]
    },
    {
      title: "Access Control Systems",
      icon: FiLock,
      description: "Secure entry management and user authentication",
      features: [
        "Keypad entry systems",
        "Proximity card readers",
        "Biometric scanners",
        "Bluetooth/NFC access",
        "Video door entry",
        "Intercom systems"
      ],
      applications: [
        "Office buildings",
        "Apartment complexes",
        "Restricted areas",
        "Parking facilities"
      ]
    },
    {
      title: "Smart Home Integration",
      icon: FiHome,
      description: "Connected security solutions for modern homes",
      features: [
        "App-based control",
        "Voice assistant integration",
        "Automated lighting",
        "Smart locks",
        "Environmental sensors",
        "Security cameras"
      ],
      applications: [
        "Modern homes",
        "Apartments",
        "Holiday homes",
        "Rental properties"
      ]
    },
    {
      title: "Panic & Duress Alarms",
      icon: FiAlertTriangle,
      description: "Emergency response systems for personal safety",
      features: [
        "Panic buttons",
        "Duress codes",
        "Silent alarms",
        "Medical alerts",
        "Staff safety systems",
        "Remote monitoring"
      ],
      applications: [
        "Retail environments",
        "Healthcare facilities",
        "Educational institutions",
        "Elderly care"
      ]
    }
  ];

  const keyFeatures = [
    {
      icon: FiSmartphone,
      title: "Mobile App Control",
      description: "Control your security system from anywhere with our intuitive mobile app"
    },
    {
      icon: FiWifi,
      title: "Wireless Technology",
      description: "Advanced wireless sensors with long battery life and encrypted communication"
    },
    {
      icon: FiClock,
      title: "24/7 Monitoring",
      description: "Professional monitoring center with immediate emergency response"
    },
    {
      icon: FiShield,
      title: "False Alarm Prevention",
      description: "Advanced algorithms and verification procedures to minimize false alarms"
    }
  ];

  const specifications = [
    {
      category: "Detection Technology",
      features: [
        "Dual-technology PIR sensors",
        "Pet-immune detection (up to 25kg)",
        "Anti-masking protection",
        "Temperature compensation",
        "Adjustable sensitivity levels",
        "Multiple detection zones"
      ]
    },
    {
      category: "Communication",
      features: [
        "Dual-path communication",
        "GSM/GPRS backup",
        "IP network connectivity",
        "Encrypted data transmission",
        "Real-time status updates",
        "Remote diagnostics"
      ]
    },
    {
      category: "Power & Backup",
      features: [
        "Main power supply 230V AC",
        "Battery backup up to 24 hours",
        "Low battery alerts",
        "Power failure notifications",
        "Surge protection",
        "UPS integration"
      ]
    },
    {
      category: "User Interface",
      features: [
        "LCD keypad displays",
        "LED status indicators",
        "Audible confirmation tones",
        "Multi-language support",
        "User-friendly programming",
        "Remote access capability"
      ]
    }
  ];

  const industries = [
    {
      name: "Retail & Commercial",
      description: "Protect your business premises and inventory",
      solutions: [
        "Perimeter protection",
        "Point-of-sale security",
        "Stock room monitoring",
        "After-hours protection"
      ]
    },
    {
      name: "Residential",
      description: "Keep your family and home safe with comprehensive protection",
      solutions: [
        "Home automation",
        "Garage door monitoring",
        "Garden shed protection",
        "Holiday home security"
      ]
    },
    {
      name: "Industrial",
      description: "Secure manufacturing and warehouse facilities",
      solutions: [
        "Machinery protection",
        "Hazardous area monitoring",
        "Loading dock security",
        "Equipment theft prevention"
      ]
    },
    {
      name: "Healthcare",
      description: "Patient safety and facility security solutions",
      solutions: [
        "Medication storage security",
        "Restricted area access",
        "Staff duress systems",
        "Equipment monitoring"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Retail Chain Security Upgrade",
      location: "London, UK",
      description: "Upgraded 25 store locations with integrated alarm and access control systems",
      results: [
        "75% reduction in break-ins",
        "Improved staff safety",
        "Reduced insurance premiums",
        "Centralized monitoring"
      ]
    },
    {
      title: "Luxury Residential Development",
      location: "Surrey, UK",
      description: "Smart home security integration for 50-unit development",
      results: [
        "100% resident satisfaction",
        "Zero security incidents",
        "Increased property values",
        "Award-winning installation"
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>Advanced Alarm Systems - Intruder Detection & Access Control | Forward Sector</title>
        <meta name="description" content="Professional alarm systems with smart home integration, 24/7 monitoring, and mobile app control. Protect your property with advanced security technology." />
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
                    <FiAlertTriangle className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    Advanced Alarm Systems
                  </h1>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Intelligent intrusion detection and access control systems with smart home integration and professional monitoring for complete peace of mind.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                    Get Free Survey
                  </Link>
                  <Link href="tel:02039000716" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                    Call: 020 3900 0716
                  </Link>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/images/control-room.png" 
                  alt="Alarm System Control Room"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Advanced Security Features</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                State-of-the-art technology combined with professional monitoring for maximum protection
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {keyFeatures.map((feature, index) => (
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

      {/* System Types */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Alarm System Solutions</h2>
              <p className="text-xl text-gray-600">
                Comprehensive security systems tailored to your specific requirements
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {systemTypes.map((system, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-lg p-3">
                      <system.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900">{system.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{system.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">Features</h4>
                      <ul className="space-y-2">
                        {system.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <FiCheck className="h-4 w-4 text-success-500 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-800 mb-3">Applications</h4>
                      <ul className="space-y-2">
                        {system.applications.map((app, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm">
                            <FiCheck className="h-4 w-4 text-success-500 mt-0.5" />
                            <span className="text-gray-700">{app}</span>
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

      {/* Technical Specifications */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                Professional-grade components meeting British and European standards
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6">{spec.category}</h3>
                  <ul className="space-y-3">
                    {spec.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <FiCheck className="h-5 w-5 text-success-500 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Industry Solutions</h2>
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
                    <h4 className="font-semibold text-primary-800 mb-3">Solutions Include:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FiCheck className="h-4 w-4 text-success-500 mt-1" />
                          <span className="text-gray-700">{solution}</span>
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

      {/* Case Studies */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Success Stories</h2>
              <p className="text-xl text-gray-600">
                Real results from our alarm system installations
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
                  <p className="text-gray-600 mb-6">{study.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Results:</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FiCheck className="h-4 w-4 text-success-500 mt-1" />
                          <span className="text-gray-700">{result}</span>
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
            <h2 className="text-4xl font-bold mb-6">Secure Your Property Today</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free security survey and personalized alarm system quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Free Security Survey
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

export default AlarmSystemsService; 