# Interactive Card Grid Animation

A modern, interactive card grid system built with Next.js, Framer Motion, and TypeScript. The system features smooth scroll-based animations, interactive hover states, and a responsive layout.

## Architecture Overview

### Type Organization

The project uses two main types of interfaces for the card components:

1. **CardProps (`src/types/cardProps.ts`)**
   - Common props shared across regular cards
   - Includes basic motion values (scale, x, y)
   - Handles interaction states (hover, click)
   - Controls line animations (thickness, opacity)

2. **IconCardProps (`src/types/cardProps.ts`)**
   - Specific to the main icon card
   - Extended animation properties for the central card
   - Controls background, text colors, and card dimensions
   - Manages line scaling and opacity independently

This separation allows for:
- Clear distinction between the main icon card and regular cards
- Type safety across components
- Reusability of common props
- Flexibility for special card behaviors

### Component Structure

```
src/
├── components/
│   └── cards/
│       ├── index.ts          # Card exports
│       ├── IconCard.tsx      # Central animated card
│       ├── ColorCard.tsx     # Color showcase card
│       ├── LogoCard.tsx      # Logo showcase card
│       └── [Other Cards]     # Additional card components
├── types/
│   ├── cardProps.ts         # Shared type definitions
│   └── cards.ts             # Card type enums
└── hooks/
    └── useCardAnimations.ts # Centralized animation logic
```

### Animation System

The project uses a centralized animation system through `useCardAnimations` hook that:
- Manages scroll-based animations
- Controls card scaling
- Handles color transitions
- Coordinates card movements
- Provides consistent line animations

### Implementation Choices

1. **Scroll-Based Animations**
   - Uses Framer Motion's `useScroll` and `useTransform`
   - Smooth transitions based on scroll position
   - Configurable ranges in `constants/animations.ts`

2. **Card Component Design**
   - Each card is a self-contained component
   - Shares common styling through Tailwind classes
   - Uses Framer Motion for animations
   - Incorporates Lottie for interactive animations

3. **State Management**
   - Hover states managed at page level
   - Card types defined through TypeScript enums
   - Centralized click handling

4. **Styling Approach**
   - Tailwind CSS for utility classes
   - CSS Modules for component-specific styles
   - Dynamic styling through Framer Motion
   - Consistent color scheme and spacing

## Best Practices

1. **Type Organization**
   - Common types in central `/types` directory
   - Component-specific types alongside components
   - Clear interface segregation
   - Strong type safety

2. **Component Structure**
   - Single responsibility principle
   - Reusable components
   - Consistent prop patterns
   - Clear separation of concerns

3. **Animation Performance**
   - Use of `willChange` for optimization
   - Efficient scroll-based transforms
   - Hardware acceleration where appropriate
   - Debounced event handlers

4. **Code Organization**
   - Clear file structure
   - Consistent naming conventions
   - Modular design
   - Easy to maintain and extend

## Technical Decisions

1. **Framer Motion**
   - Chosen for smooth animations
   - Built-in scroll handling
   - TypeScript support
   - Performance optimizations

2. **Next.js**
   - React framework
   - Built-in TypeScript support
   - File-based routing
   - Optimized build process

3. **TypeScript**
   - Type safety
   - Better developer experience
   - Clear interfaces
   - Improved maintainability

4. **Tailwind CSS**
   - Utility-first approach
   - Consistent styling
   - Easy responsive design
   - Performance benefits

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
