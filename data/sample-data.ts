import { HeroSlide, Service, Testimonial, CaseStudy, TeamMember } from '@/types';

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Advanced Security Solutions',
    subtitle: 'Protecting Your Future',
    description: 'Solar-powered surveillance systems and professional security services for modern protection needs.',
    backgroundImage: '/images/cctv-tower.png',
    ctaText: 'Explore Services',
    ctaLink: '/services',
  },
  {
    id: '2',
    title: '24/7 Monitoring Center',
    subtitle: 'Always Watching',
    description: 'State-of-the-art control room with trained operators monitoring your property around the clock.',
    backgroundImage: '/images/control-room.png',
    ctaText: 'Learn More',
    ctaLink: '/services/monitoring',
  },
  {
    id: '3',
    title: 'Rapid Response Team',
    subtitle: 'Swift Action',
    description: 'Professional security personnel ready to respond to any situation with speed and expertise.',
    backgroundImage: '/images/rapid-response.png',
    ctaText: 'Get Protected',
    ctaLink: '/contact',
  },
  {
    id: '4',
    title: 'Eco-Friendly Security',
    subtitle: 'Sustainable Protection',
    description: 'Solar-powered security solutions that protect your property while caring for the environment.',
    backgroundImage: '/images/cctv-tower.png',
    ctaText: 'Discover Innovation',
    ctaLink: '/services/cctv-tower',
  },
];

export const services: Service[] = [
  {
    id: 'cctv-tower',
    title: 'CCTV Tower',
    description: 'Solar-powered mobile surveillance towers with advanced camera systems and battery backup.',
    icon: 'eye',
    link: '/services/cctv-tower',
    features: [
      'Solar-powered operation',
      'HD night vision cameras',
      '7-day battery backup',
      'Mobile app alerts',
      'Weather-resistant design',
    ],
  },
  {
    id: 'alarm-systems',
    title: 'Alarm Systems',
    description: 'Comprehensive alarm systems with smart monitoring and instant mobile notifications.',
    icon: 'alert-triangle',
    link: '/services/alarm-systems',
    features: [
      'Motion detection sensors',
      'Door/window sensors',
      'Smart home integration',
      'Mobile app control',
      'Professional monitoring',
    ],
  },
  {
    id: 'manned-guarding',
    title: 'Manned Guarding',
    description: 'Professional security personnel providing on-site protection and customer service.',
    icon: 'users',
    link: '/services/manned-guarding',
    features: [
      'Licensed security officers',
      'Customer service training',
      'Emergency response protocols',
      'Regular patrol schedules',
      'Incident reporting',
    ],
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring',
    description: '24/7 surveillance center with trained operators monitoring your security systems.',
    icon: 'monitor',
    link: '/services/monitoring',
    features: [
      '24/7 monitoring center',
      'Instant alert response',
      'Video verification',
      'Emergency services dispatch',
      'Real-time notifications',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Forward Sector transformed our site security. The solar-powered CCTV towers provide excellent coverage, and the monitoring team is incredibly responsive.',
    author: 'Sarah Johnson',
    title: 'Site Manager',
    company: 'Construction Solutions Ltd',
    image: '/images/testimonial-sarah.jpg',
  },
  {
    id: '2',
    quote: 'The professionalism of their manned guarding service is outstanding. Our visitors feel safe and welcomed, and we have complete peace of mind.',
    author: 'Michael Chen',
    title: 'Operations Director',
    company: 'Corporate Plaza',
    image: '/images/testimonial-michael.jpg',
  },
  {
    id: '3',
    quote: 'Their eco-friendly approach to security aligns perfectly with our sustainability goals. The solar-powered systems work flawlessly.',
    author: 'Emma Thompson',
    title: 'Facilities Manager',
    company: 'Green Enterprise',
    image: '/images/testimonial-emma.jpg',
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Major Construction Site Security',
    excerpt: 'Comprehensive security solution for a £50M construction project in Central London.',
    description: 'A major construction company needed comprehensive security for their high-value project in Central London. We deployed multiple solar-powered CCTV towers and provided 24/7 monitoring services.',
    client: 'BuildCorp Construction',
    service: 'CCTV Tower + Monitoring',
    results: [
      '95% reduction in security incidents',
      'Zero theft incidents during 18-month project',
      '24/7 monitoring coverage',
      'Rapid response to 47 alerts',
    ],
    images: [
      '/images/cctv-tower.png',
      '/images/control-room.png',
      '/images/case-study-1-monitoring.jpg',
    ],
    slug: 'construction-site-security',
    date: '2023-12-15',
  },
  {
    id: '2',
    title: 'Retail Park Enhanced Security',
    excerpt: 'Integrated security solution combining manned guarding and advanced alarm systems.',
    description: 'A busy retail park required enhanced security to protect customers and retailers. We implemented a combination of manned guarding and advanced alarm systems.',
    client: 'Westfield Retail Park',
    service: 'Manned Guarding + Alarm Systems',
    results: [
      '78% reduction in antisocial behavior',
      'Improved customer satisfaction scores',
      'Faster emergency response times',
      'Enhanced retailer confidence',
    ],
    images: [
      '/images/guard.png',
      '/images/cctv-tower.png',
      '/images/control-room.png',
    ],
    slug: 'retail-park-security',
    date: '2023-11-20',
  },
  {
    id: '3',
    title: 'Corporate Campus Protection',
    excerpt: 'Complete security overhaul for a multinational corporation\'s UK headquarters.',
    description: 'A multinational corporation needed to upgrade their security infrastructure at their UK headquarters. We provided a comprehensive solution including all our services.',
    client: 'TechGlobal Corporation',
    service: 'Full Security Package',
    results: [
      'Seamless integration with existing systems',
      'Improved access control',
      'Enhanced emergency procedures',
      'Reduced security operating costs by 30%',
    ],
    images: [
      '/images/rapid-response.png',
      '/images/control-room.png',
      '/images/guard.png',
    ],
    slug: 'corporate-campus-security',
    date: '2023-10-10',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'David Anderson',
    title: 'Managing Director',
    bio: 'Over 15 years of experience in security services and business development. David leads our strategic vision and client relationships.',
    image: '/images/team-david.jpg',
    email: 'david.anderson@forwardsector.com',
    linkedin: 'https://linkedin.com/in/davidanderson',
  },
  {
    id: '2',
    name: 'Sarah Williams',
    title: 'Head of Operations',
    bio: 'Former police officer with 12 years of operational security experience. Sarah oversees all security operations and personnel.',
    image: '/images/team-sarah.jpg',
    email: 'sarah.williams@forwardsector.com',
    linkedin: 'https://linkedin.com/in/sarahwilliams',
  },
  {
    id: '3',
    name: 'Mark Thompson',
    title: 'Technical Director',
    bio: 'Electronics engineer specializing in surveillance systems and solar technology. Mark leads our technical innovation and installation teams.',
    image: '/images/team-mark.jpg',
    email: 'mark.thompson@forwardsector.com',
    linkedin: 'https://linkedin.com/in/markthompson',
  },
  {
    id: '4',
    name: 'Jennifer Clarke',
    title: 'Client Relations Manager',
    bio: 'Customer service specialist with expertise in security consultancy. Jennifer ensures exceptional client experiences and satisfaction.',
    image: '/images/team-jennifer.jpg',
    email: 'jennifer.clarke@forwardsector.com',
    linkedin: 'https://linkedin.com/in/jenniferclarke',
  },
];

export const whyChooseUs = [
  {
    title: 'Eco-Friendly Solutions',
    description: 'Solar-powered systems that protect the environment while securing your property.',
    icon: 'leaf',
  },
  {
    title: 'Advanced Technology',
    description: 'Cutting-edge surveillance and monitoring systems with the latest innovations.',
    icon: 'cpu',
  },
  {
    title: 'Professional Team',
    description: 'Licensed and trained security professionals with extensive experience.',
    icon: 'shield',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock monitoring and support services for complete peace of mind.',
    icon: 'clock',
  },
  {
    title: 'Rapid Response',
    description: 'Quick response times and immediate action when security situations arise.',
    icon: 'zap',
  },
  {
    title: 'Custom Solutions',
    description: 'Tailored security packages designed to meet your specific requirements.',
    icon: 'settings',
  },
]; 