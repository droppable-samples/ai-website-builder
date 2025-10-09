# Buildable.dev - Next.js Demo

A modern, responsive demo application built with Next.js 14, inspired by AI-powered website builders.

## Features

- 🎨 Beautiful gradient animated background
- 💬 AI chat prompt interface
- 📁 Workspace project showcase
- 👥 Community projects gallery
- 📱 Fully responsive design
- ⚡ Next.js 14 with App Router
- 🎭 TypeScript support

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Production Build

Build the app for production:

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-buildable-demo/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   ├── page.module.css  # Page styles
│   │   └── globals.css      # Global styles
│   └── components/          # React components (future)
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Configuration

### Allowed Hosts

The Next.js configuration includes CORS headers to allow access from Droppable environment hosts:

```javascript
// next.config.js
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Access-Control-Allow-Origin',
          value: '*',
        },
      ],
    },
  ];
}
```

## Technologies

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **CSS Modules**: Component-scoped styling
- **React 18**: Latest React features

## Design Features

- Animated gradient background
- Clean, modern UI inspired by Lovable.dev
- Responsive grid layouts
- Smooth transitions and hover effects
- Professional color scheme

## License

MIT
