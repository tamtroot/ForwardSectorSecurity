import Link from 'next/link';
import { 
  FiShield, 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiLinkedin, 
  FiTwitter, 
  FiFacebook 
} from 'react-icons/fi';

const Footer = () => {
  const services = [
    { name: 'CCTV Tower', href: '/services/cctv-tower' },
    { name: 'Alarm Systems', href: '/services/alarm-systems' },
    { name: 'Manned Guarding', href: '/services/manned-guarding' },
    { name: 'Continuous Monitoring', href: '/services/monitoring' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: FiLinkedin },
    { name: 'Twitter', href: '#', icon: FiTwitter },
    { name: 'Facebook', href: '#', icon: FiFacebook },
  ];

  return (
    <footer className="bg-gradient-to-r from-primary-900 to-primary-800 text-white">
      <div className="container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/images/logo.png" 
                alt="Forward Sector Logo" 
                className="h-16 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional security services with cutting-edge technology and 
              eco-friendly solutions. Protecting what matters most.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FiPhone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Phone</p>
                  <a
                    href="tel:02039000716"
                    className="text-white hover:text-accent-400 transition-colors duration-200"
                  >
                    020 3900 0716
                  </a>
                  <p className="text-xs text-gray-400">Select Option 3 for Sales</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <FiMail className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Email</p>
                  <a
                    href="mailto:info@forwardsector.com"
                    className="text-white hover:text-accent-400 transition-colors duration-200"
                  >
                    info@forwardsector.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FiMapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-300">Address</p>
                  <a
                    href="https://maps.google.com/?q=20-22+Wenlock+Road+London+N1+7TA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-accent-400 transition-colors duration-200"
                  >
                    20-22 Wenlock Road<br />
                    London, N1 7TA
                  </a>
                </div>
              </div>

              <div className="border-t border-gray-600 pt-4">
                <p className="text-sm text-gray-300 mb-2">Emergency Response</p>
                <a
                  href="tel:+442039342108"
                  className="text-red-400 hover:text-red-300 font-semibold"
                >
                  (+44) 020 3934 2108
                </a>
                <p className="text-xs text-gray-400">24/7 Emergency Line</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm text-gray-400">
              {legalLinks.map((link, index) => (
                <span key={link.name} className="flex items-center">
                  <Link 
                    href={link.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="ml-6 text-gray-600">|</span>
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Forward Sector. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 