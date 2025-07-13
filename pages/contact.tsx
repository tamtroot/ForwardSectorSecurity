import Layout from '@/components/layout/Layout';
import { useState } from 'react';
import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiSend,
  FiCheckCircle,
  FiArrowRight
} from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'CCTV Tower',
    'Alarm Systems',
    'Manned Guarding',
    'Continuous Monitoring',
    'Custom Solution',
    'General Inquiry'
  ];

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone',
      content: '020 3900 0716',
      subtitle: 'Select Option 3 for Sales & Enquiries',
      link: 'tel:02039000716'
    },
    {
      icon: FiMail,
      title: 'Email',
      content: 'info@forwardsector.com',
      link: 'mailto:info@forwardsector.com'
    },
    {
      icon: FiMapPin,
      title: 'Address',
      content: '20-22 Wenlock Road, London, N1 7TA',
      link: 'https://maps.google.com/?q=20-22+Wenlock+Road+London+N1+7TA'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        message: ''
      });
    }, 2000);
  };

  return (
    <Layout
      title="Contact Forward Sector - Get Your Security Quote"
      description="Contact Forward Sector for a free security consultation. Our experts are ready to help with CCTV towers, alarm systems, manned guarding, and monitoring services."
    >
      {/* Hero Section */}
      <section className="relative py-24 bg-primary-900 text-white">
        <div className="container-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Ready to enhance your security? Contact our experts for a free consultation 
              and custom quote tailored to your specific needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-silver-100">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <FiCheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-800 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-600">
                      Thank you for your inquiry. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                          Service Required
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us about your security requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn btn-primary text-lg py-4 inline-flex items-center justify-center space-x-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <FiSend className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-display font-bold text-primary-900 mb-6">
                  Contact Information
                </h2>
                <p className="text-gray-600 mb-8">
                  Get in touch with our security experts. We're here to help you 
                  24/7 with any security concerns or questions.
                </p>

                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                  <h3 className="text-lg font-semibold text-red-800 mb-2 flex items-center">
                    <FiPhone className="mr-2" />
                    Emergency Contact
                  </h3>
                  <p className="text-red-700">
                    For urgent security matters outside office hours:
                  </p>
                  <p className="text-red-800 font-semibold text-lg">
                    (+44) 020 3934 2108
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="text-center">
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-full p-4 inline-block mb-4">
                        <info.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <p className="text-gray-600 mb-2">{info.content}</p>
                      {info.subtitle && (
                        <p className="text-sm text-gray-500 mb-2">{info.subtitle}</p>
                      )}
                      <a
                        href={info.link}
                        className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
                      >
                        Contact Now <FiArrowRight className="ml-1" />
                      </a>
                    </div>
                  ))}
                </div>

                <div className="mt-12 bg-gray-50 rounded-lg p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Hours</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">General Enquiry Office</h4>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Monday – Friday:</strong> 6am to 5pm</p>
                        <p><strong>Saturday:</strong> 8am to 5pm</p>
                        <p><strong>Sunday:</strong> No general enquiries</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Emergency Response</h4>
                      <p className="text-gray-600">Available 24/7, 365 days a year</p>
                      <p className="text-red-600 font-medium">Call: (+44) 020 3934 2108</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Office</h3>
                  <div className="bg-silver-100 rounded-lg shadow-md overflow-hidden">
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">
                        Visit our offices in Central London for in-person consultations
                      </p>
                      <div className="flex items-start space-x-3">
                        <FiMapPin className="h-5 w-5 text-primary-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-gray-900">Head Office</p>
                          <p className="text-gray-600">
                            20-22 Wenlock Road, London, N1 7TA
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="h-64 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-50 py-16">
        <div className="container-padding">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-primary-900 mb-4">
                Our Location
              </h2>
              <p className="text-gray-600">
                Visit our offices in Central London for in-person consultations
              </p>
            </div>

            <div className="bg-silver-100 rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <FiMapPin className="h-12 w-12 text-primary-900 mx-auto mb-4" />
                  <p className="text-gray-600">
                    Interactive map will be embedded here
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    123 Security Street, London, UK SW1A 1AA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact; 