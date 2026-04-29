# BrAInix - AI-Powered Learning Platform

A modern, interactive learning platform with AI-driven personalization, featuring 3D animations and custom cursor effects.

## Project Structure

```
brainix/
├── src/
│   ├── components/          # React components
│   │   ├── HeroCanvas.jsx   # Three.js hero animation
│   │   ├── HowCanvas.jsx    # Three.js how-it-works animation
│   │   ├── StarRating.jsx   # Star rating component
│   │   └── index.js         # Components export
│   ├── hooks/               # Custom React hooks
│   │   ├── useCursor.js     # Custom cursor effect hook
│   │   ├── useReveal.js     # Intersection observer hook
│   │   └── index.js         # Hooks export
│   ├── data/
│   │   └── constants.jsx    # App data and constants
│   ├── styles/
│   │   └── globals.css      # Global styles
│   ├── App.jsx              # Main app component
│   └── index.jsx            # React entry point
├── index.html               # HTML entry point
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies and scripts
├── .env.example            # Example environment variables
├── .gitignore              # Git ignore rules
└── README.md               # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

## Development

Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000` with hot reload enabled.

## Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues

## Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool
- **Three.js** - 3D graphics
- **Lucide React** - Icons
- **CSS3** - Styling with animations

## Features

- AI-powered personalized learning paths
- Interactive 3D visualizations with Three.js
- Custom animated cursor effect
- Smooth scroll animations and reveal effects
- Responsive design for mobile and desktop
- Course catalog with tags and pricing
- Testimonials section
- Email signup with validation
- Newsletter integration ready

## Key Components

### Hooks
- **useCursor** - Manages custom cursor effect with trail animation
- **useReveal** - Implements scroll-based reveal animations

### Canvas Components
- **HeroCanvas** - Animated particles, rings, shapes, and helixes
- **HowCanvas** - Network graph visualization with connected nodes

### UI Components
- **StarRating** - 5-star rating display
- **App** - Main component orchestrating all sections

## Data Structure

All app data (features, courses, steps, testimonials, stats) is centralized in `src/data/constants.jsx` for easy updates and maintenance.

## Styling

Global styles use CSS variables for consistent theming:
- Colors: cyan, violet, gold, ink
- Typography: Syne (headings), DM Sans (body)
- Responsive breakpoints: Mobile-first design

## Development Tips

- Edit data in `src/data/constants.jsx` to update content
- Modify hook behavior in `src/hooks/`
- Create new components in `src/components/`
- Global styles in `src/styles/globals.css`

## License

MIT
