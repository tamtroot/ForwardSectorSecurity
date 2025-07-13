import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/layout/Layout';
import { 
  FiEye, 
  FiSun, 
  FiClock, 
  FiWifi, 
  FiShield, 
  FiCheck, 
  FiArrowRight,
  FiMapPin,
  FiCamera,
  FiZap,
  FiMonitor
} from 'react-icons/fi';

const CCTVTowerService = () => {
  const specifications = [
    {
      category: "Camera System",
      icon: FiCamera,
      features: [
        "360° Pan-Tilt-Zoom capability",
        "4K Ultra HD resolution",
        "30x optical zoom",
        "Night vision up to 100m",
        "Thermal imaging option",
        "Motion detection & tracking"
      ]
    },
    {
      category: "Power System",
      icon: FiZap,
      features: [
        "Solar panel array 400W",
        "Battery backup 48V/200Ah",
        "Hybrid wind/solar option",
        "Grid connection capability",
        "Auto power management",
        "7-day autonomous operation"
      ]
    },
    {
      category: "Communication",
      icon: FiWifi,
      features: [
        "4G/5G connectivity",
        "WiFi hotspot capability",
        "Satellite uplink option",
        "Real-time streaming",
        "Remote configuration",
        "Cloud storage integration"
      ]
    },
    {
      category: "Construction",
      icon: FiShield,
      features: [
        "Galvanized steel mast",
        "IP66 weatherproof rating",
        "Wind resistance 120mph",
        "Vandal-resistant design",
        "Lockable equipment housing",
        "Anti-climb protection"
      ]
    }
  ];

  const applications = [
    {
      title: "Construction Sites",
      description: "Protect valuable equipment and materials from theft and vandalism",
      benefits: [
        "Deter theft of expensive machinery",
        "Monitor site activity 24/7",
        "Reduce insurance premiums",
        "Ensure worker safety compliance"
      ]
    },
    {
      title: "Events & Festivals",
      description: "Temporary security for large gatherings and outdoor events",
      benefits: [
        "Crowd monitoring and control",
        "Perimeter security",
        "Emergency response coordination",
        "Evidence collection capability"
      ]
    },
    {
      title: "Remote Locations",
      description: "Surveillance for areas without existing infrastructure",
      benefits: [
        "No power grid required",
        "Rapid deployment capability",
        "Environmental monitoring",
        "Wildlife protection"
      ]
    },
    {
      title: "Critical Infrastructure",
      description: "Protection of utilities, transport hubs, and industrial facilities",
      benefits: [
        "Intrusion detection",
        "Compliance monitoring",
        "Incident documentation",
        "Emergency response"
      ]
    }
  ];

  const deploymentProcess = [
    {
      step: "01",
      title: "Site Assessment",
      description: "Our team evaluates your location and security requirements",
      duration: "Same day"
    },
    {
      step: "02",
      title: "System Configuration",
      description: "Customize camera angles, detection zones, and alert settings",
      duration: "15 minutes"
    },
    {
      step: "03",
      title: "Installation",
      description: "Rapid deployment with minimal site disruption",
      duration: "30 minutes"
    },
    {
      step: "04",
      title: "Testing & Handover",
      description: "System testing and operator training",
      duration: "15 minutes"
    }
  ];

  const caseStudies = [
    {
      title: "Major Construction Project",
      location: "London, UK",
      description: "Protected a £50M development site with 6 CCTV towers",
      results: [
        "90% reduction in theft incidents",
        "24/7 monitoring coverage",
        "Insurance premium reduction",
        "Improved worker safety"
      ]
    },
    {
      title: "Festival Security",
      location: "Edinburgh, Scotland",
      description: "Secured outdoor music festival with 10,000 attendees",
      results: [
        "Complete perimeter coverage",
        "Real-time crowd monitoring",
        "Zero security incidents",
        "Emergency response coordination"
      ]
    }
  ];

  return (
    <Layout>
      <Head>
        <title>CCTV Tower Solutions - Mobile Security Surveillance | Forward Sector</title>
        <meta name="description" content="Advanced mobile CCTV tower solutions with solar power, 4K cameras, and 24/7 monitoring. Rapid deployment for construction sites, events, and remote locations." />
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
                    <FiEye className="h-8 w-8 text-white" />
                  </div>
                  <h1 className="text-4xl lg:text-5xl font-bold">
                    CCTV Tower Solutions
                  </h1>
                </div>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Mobile solar-powered surveillance towers providing comprehensive security coverage for any location. Deploy in minutes, monitor for months.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                    Request Quote
                  </Link>
                  <Link href="tel:02039000716" className="btn btn-outline border-white text-white hover:bg-white hover:text-primary-900 text-lg px-8 py-4">
                    Call: 020 3900 0716
                  </Link>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="/images/cctv-tower.png" 
                  alt="CCTV Tower Installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Why Choose Our CCTV Towers?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Industry-leading mobile surveillance with unmatched reliability and performance
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-gradient-to-br from-success-500 to-success-600 rounded-full p-4 inline-block mb-4">
                  <FiSun className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Solar Powered</h3>
                <p className="text-gray-600">Eco-friendly operation with 7-day battery backup</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-full p-4 inline-block mb-4">
                  <FiClock className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Rapid Deployment</h3>
                <p className="text-gray-600">Installed and operational in just 30 minutes</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-4 inline-block mb-4">
                  <FiMonitor className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">24/7 Monitoring</h3>
                <p className="text-gray-600">Live streaming to our security operations center</p>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-full p-4 inline-block mb-4">
                  <FiMapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">Any Location</h3>
                <p className="text-gray-600">Perfect for remote sites without power infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                Professional-grade components designed for demanding environments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specifications.map((spec, index) => (
                <div key={index} className="bg-silver-50 rounded-lg p-8 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg p-3">
                      <spec.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary-900">{spec.category}</h3>
                  </div>
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

      {/* Applications */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Applications & Use Cases</h2>
              <p className="text-xl text-gray-600">
                Versatile security solutions for diverse industry needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-primary-900 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-6">{app.description}</p>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-3">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {app.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <FiCheck className="h-4 w-4 text-success-500 mt-1" />
                          <span className="text-gray-700">{benefit}</span>
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

      {/* Deployment Process */}
      <section className="section-padding bg-white">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-primary-900 mb-4">Deployment Process</h2>
              <p className="text-xl text-gray-600">
                From assessment to operation in under 1 hour
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {deploymentProcess.map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gradient-to-br from-accent-500 to-accent-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 mb-2">{process.description}</p>
                  <div className="text-sm text-accent-600 font-medium">{process.duration}</div>
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
                Real results from our CCTV tower deployments
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
            <h2 className="text-4xl font-bold mb-6">Ready to Deploy CCTV Towers?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free site assessment and customized security solution quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn btn-accent text-lg px-8 py-4">
                Get Free Assessment
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

export default CCTVTowerService; 