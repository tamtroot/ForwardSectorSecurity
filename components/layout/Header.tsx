import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  FiMenu, 
  FiX, 
  FiShield, 
  FiEye, 
  FiAlertTriangle, 
  FiUsers, 
  FiMonitor, 
  FiArrowRight 
} from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const services = [
    {
      title: 'CCTV Tower',
      description: 'Solar-powered mobile surveillance',
      icon: FiEye,
      href: '/services/cctv-tower',
    },
    {
      title: 'Alarm Systems',
      description: 'Advanced security monitoring',
      icon: FiAlertTriangle,
      href: '/services/alarm-systems',
    },
    {
      title: 'Manned Guarding',
      description: 'Professional security personnel',
      icon: FiUsers,
      href: '/services/manned-guarding',
    },
    {
      title: 'Continuous Monitoring',
      description: '24/7 surveillance center',
      icon: FiMonitor,
      href: '/services/monitoring',
    },
  ];

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Cleanup timeout on unmount
    return () => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleServicesMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150); // 150ms delay before closing
    setHoverTimeout(timeout);
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return router.pathname === '/';
    }
    return router.pathname.startsWith(href);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-silver-200 shadow-lg backdrop-blur-lg' 
          : 'bg-silver-100 bg-opacity-95 backdrop-blur-sm'
      }`}
    >
      <div className="container-padding">
        <div className="flex items-center justify-between h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img 
              src="/images/logo.png" 
              alt="Forward Sector Logo" 
              className="h-24 w-auto md:h-32"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <button
                      className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${
                        isActive(item.href)
                          ? 'text-primary-700'
                          : isScrolled
                          ? 'text-gray-700 hover:text-primary-700'
                          : 'text-primary-900 hover:text-primary-700'
                      }`}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* Mega Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 w-96 bg-silver-100 rounded-lg shadow-xl border border-gray-200 p-6 z-50">
                        <div className="grid grid-cols-1 gap-4">
                          {services.map((service) => (
                            <Link
                              key={service.title}
                              href={service.href}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white transition-colors duration-200"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <service.icon className="h-6 w-6 text-primary-900 mt-1" />
                              <div>
                                <h4 className="font-medium text-gray-900">{service.title}</h4>
                                <p className="text-sm text-gray-600">{service.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                        
                        {/* View All Services Link */}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                          <Link
                            href="/services"
                            className="flex items-center justify-center space-x-2 text-sm font-medium text-primary-700 hover:text-primary-900 transition-colors duration-200"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span>View All Services</span>
                            <FiArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-900'
                        : isScrolled
                        ? 'text-gray-700 hover:text-primary-900'
                        : 'text-primary-900 hover:text-primary-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="btn btn-primary transition-colors duration-200"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-200 ${
              isScrolled
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-primary-900 hover:bg-primary-100'
            }`}
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-silver-100 border-t border-gray-200">
          <div className="container-padding py-4">
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary-900'
                        : 'text-gray-700 hover:text-primary-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {services.map((service) => (
                        <Link
                          key={service.title}
                          href={service.href}
                          className="block py-2 text-sm text-gray-600 hover:text-primary-900"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="btn btn-primary w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 