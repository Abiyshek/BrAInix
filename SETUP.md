# BrAInix - Setup & Quick Start Guide

## What's Been Created

Your single JSX file has been converted into a professional, scalable npm architecture with:

### 📁 Folder Structure
```
brainix/
├── src/
│   ├── components/      # Reusable React components
│   ├── hooks/           # Custom React hooks  
│   ├── data/            # Constants and data
│   ├── styles/          # Global CSS
│   ├── App.jsx          # Main component
│   └── index.jsx        # React root
├── index.html           # HTML entry point
├── vite.config.js       # Vite configuration
├── package.json         # Dependencies
├── .eslintrc.json       # Linting rules
├── .env.example         # Environment template
├── .gitignore           # Git ignore file
└── README.md            # Documentation
```

## Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
This will open http://localhost:3000 with hot reload.

### 3. Build for Production
```bash
npm run build
```
Output goes to `dist/` folder.

## File Organization Benefits

### Before (Single File)
- All code in one 1000+ line file
- Hard to maintain and scale
- Difficult to test individual components
- Mixed concerns (styles, logic, UI)

### After (Modular Architecture)
✅ **Separated Concerns**
- Components isolated in `src/components/`
- Business logic in custom hooks
- Data centralized in `src/data/`
- Styles in dedicated CSS file

✅ **Easy Maintenance**
- Find and edit specific features quickly
- Add new components without bloat
- Reuse hooks across components
- Update data without touching UI code

✅ **Scalability**
- Add new pages easily
- Create feature folders for larger features
- Split components into smaller pieces
- Tree-shaking for smaller bundle sizes

✅ **Development Experience**
- Faster hot reload (changes to single file)
- ESLint for code quality
- Better IDE support and autocomplete
- Easy debugging with DevTools

## Key Files to Edit

### 📝 Update Content
Edit `src/data/constants.jsx`:
- Features list
- Courses data
- Steps/process
- Testimonials
- Stats
- Footer links

### 🎨 Modify Styles
Edit `src/styles/globals.css`:
- CSS variables (colors, fonts)
- Component styles
- Animations
- Responsive breakpoints

### 🛠️ Add Components
Create new files in `src/components/`:
```javascript
// src/components/MyComponent.jsx
export function MyComponent() {
  return <div>...</div>;
}
```

Then export from `src/components/index.js`

### 🪝 Add Custom Hooks
Create new files in `src/hooks/`:
```javascript
// src/hooks/useMyHook.js
export function useMyHook() {
  // hook logic
}
```

## Build Pipeline

- **Development**: Vite dev server with fast HMR
- **Production**: Optimized build with code splitting
- **Linting**: ESLint for code quality
- **Browser Support**: Modern browsers with ES2021+

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Start dev server: `npm run dev`
3. ✅ Make changes and see live reload
4. ✅ Build: `npm run build`
5. ✅ Deploy `dist/` folder to hosting

## Deployment

The `dist/` folder after building is ready for deployment to:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting service

## Questions?

Refer to:
- `README.md` - Full documentation
- `src/` folder - Source code structure
- `package.json` - Dependencies and scripts
