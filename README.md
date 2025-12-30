# QR Code Landing Page

A modern, high-performance landing page built with Astro and Tailwind CSS, optimized for QR code scan destinations.

## Features

- 🚀 **Ultra-fast**: Built with Astro for sub-1-second load times
- 📱 **Mobile-First**: Optimized for smartphone viewing with large tap targets
- 🌙 **Dark Mode**: Sleek dark aesthetic with neon green and electric blue accents
- ✨ **Animated Success Checkmark**: Smooth SVG animation on page load
- ♿ **Accessible**: High contrast design for better readability
- 🎯 **Clear CTA**: Prominent call-to-action button for user engagement

## Getting Started

### Prerequisites

- Node.js 18+ or npm installed

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
/
├── public/
├── src/
│   ├── components/
│   │   └── SuccessCheckmark.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   └── pages/
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Customization

### Colors

Edit the accent colors in `tailwind.config.mjs`:
- `neon-green`: #39FF14
- `electric-blue`: #00D9FF

### Content

Edit the content in `src/pages/index.astro` to customize:
- Headline text
- Intro paragraphs
- CTA button text and link

## Performance

- Static site generation for optimal performance
- Minimal JavaScript for fast load times
- Optimized fonts and assets
- Mobile-first responsive design

## License

MIT
