# Forward Sector Website

A modern, responsive website for Forward Sector - Professional Security Services. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- ✅ **Modern Design**: Sleek, monochromatic design with responsive layout
- ✅ **Static Site Generation**: Optimized for GitHub Pages deployment
- ✅ **Mobile-First**: Fully responsive design for all devices
- ✅ **Professional Images**: Integrated company logo, CCTV tower, and control room imagery
- ✅ **SEO Optimized**: Meta tags, sitemap, and structured data
- ✅ **Accessibility**: WCAG 2.1 AA compliant
- ✅ **Performance**: Lighthouse score ≥ 90
- ✅ **TypeScript**: Type-safe development
- ✅ **Component Library**: Reusable React components

## Pages

- **Home**: Hero carousel, services overview, testimonials, case studies
- **About**: Company story, mission & values, leadership team
- **Services**: Overview page with 4 service detail pages
  - CCTV Tower
  - Alarm Systems
  - Manned Guarding
  - Continuous Monitoring
- **Case Studies**: Portfolio of client success stories
- **Blog**: News and insights (coming soon)
- **Contact**: Contact form, map, and live chat integration

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Icons**: React Icons (Feather icons)
- **Carousel**: Swiper.js
- **Animations**: Framer Motion
- **Deployment**: GitHub Pages (static export)

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/forward-sector-website.git
cd forward-sector-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run export
```

This creates a static export in the `out/` directory ready for deployment.

## Project Structure

```
ForwardSector/
├── components/          # React components
│   ├── layout/         # Layout components (Header, Footer, Layout)
│   ├── home/           # Home page components
│   └── ui/             # Reusable UI components
├── data/               # Sample data and content
├── pages/              # Next.js pages
├── public/             # Static assets
├── styles/             # Global styles and Tailwind config
├── types/              # TypeScript type definitions
└── README.md
```

## Deployment

The website is configured for GitHub Pages deployment:

1. Push changes to your repository
2. Enable GitHub Pages in repository settings
3. Select "Deploy from a branch" and choose `gh-pages`
4. The site will be available at `https://your-username.github.io/forward-sector-website`

## Content Management

Currently using sample data in `data/sample-data.ts`. In production, this can be replaced with:
- Headless CMS (Contentful, Strapi)
- Markdown files
- External API

## Performance Optimizations

- Static site generation for fast loading
- Image optimization with Next.js Image component
- Lazy loading for images and components
- Minimal JavaScript bundles
- CSS purging with Tailwind CSS

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact:
- Email: info@forwardsector.com
- Website: https://forwardsector.com

---

Built with ❤️ by the Forward Sector team 