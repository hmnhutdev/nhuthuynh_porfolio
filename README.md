<<<<<<< HEAD
# Modern Developer Portfolio Website

A modern, responsive developer portfolio website built with React TypeScript featuring comprehensive animations and professional design.

## Features

✨ **Modern Design & Animations**
- Responsive navigation with smooth scrolling
- Hero section with animated typing effect and floating elements
- About section with personal information and animated stats
- Skills section with categorized technology cards
- Projects showcase with modal details and hover effects
- Contact form with backend integration
- Professional footer with navigation links

🎨 **Animation Features**
- Button hover/click effects using Framer Motion
- Modal fade in/out animations
- Page transitions and scroll-triggered reveals
- Loading spinners with custom styling
- List item entrance animations with stagger effects
- Mobile menu slide-in from right

🛠 **Technology Stack**
- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, Custom CSS animations
- **UI Components**: Radix UI, Shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: In-memory storage (easily switchable to PostgreSQL)
- **Forms**: React Hook Form with Zod validation
- **State Management**: TanStack Query

## Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### For Windows Users

1. **Clone/Download the project**
   ```bash
   # Extract the zip file or clone the repository
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server (Windows)**
   ```bash
   # Use this command for Windows
   set NODE_ENV=development && npm run tsx server/index.ts
   
   # Or alternatively, you can use npx
   npx cross-env NODE_ENV=development tsx server/index.ts
   ```

### For Mac/Linux Users

1. **Clone/Download the project**
   ```bash
   # Extract the zip file or clone the repository
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server (Mac/Linux)**
   ```bash
   npm run dev
   ```

### Alternative Method (Works on all OS)

If you encounter any issues with environment variables, you can start the server directly:

```bash
npx tsx server/index.ts
```

The application will start on `http://localhost:5000`

## Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── ui/        # Reusable UI components
│   │   │   ├── Hero.tsx   # Hero section
│   │   │   ├── About.tsx  # About section
│   │   │   ├── Skills.tsx # Skills section
│   │   │   └── ...        # Other components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and configurations
│   │   └── types/         # TypeScript type definitions
├── server/                # Backend Express server
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # In-memory storage
├── shared/               # Shared types and schemas
└── ...                   # Configuration files
```

## Customization

### Personalizing Content

1. **Update personal information** in `client/src/components/Hero.tsx`
2. **Modify about section** in `client/src/components/About.tsx`
3. **Add your skills** in `client/src/components/Skills.tsx`
4. **Update projects** in `client/src/components/Projects.tsx`
5. **Change contact info** in `client/src/components/Contact.tsx`

### Styling & Colors

- Main color scheme is defined in `client/src/index.css`
- Custom portfolio colors are available as CSS variables
- Tailwind configuration in `tailwind.config.ts`

### Animations

- Framer Motion animations are configured in `client/src/lib/animations.ts`
- Custom CSS animations in `client/src/index.css`
- Scroll reveal effects using Intersection Observer API

## Building for Production

```bash
npm run build
```

This will create a `dist` directory with the production build.

## Available Scripts

- `npm run dev` - Start development server (Mac/Linux)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Run TypeScript checks

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your own portfolio!

## Support

If you encounter any issues:
1. Make sure Node.js is properly installed
2. Try deleting `node_modules` and running `npm install` again
3. For Windows users, ensure you're using the correct environment variable syntax
4. Check that all dependencies are installed correctly

---

**Built with ❤️ using modern web technologies**
=======
# nhuthuynh_porfolio
a simple porfolio
>>>>>>> 146d739f260a354c9d678b5f6454994c17d44946
