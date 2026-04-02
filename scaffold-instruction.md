# Agent Instruction: Scaffold React SPA Company Profile

## Context & Objectives
You are an expert Front-End Engineer. Your task is to scaffold a Single Page Application (SPA) for a company profile. The application must prioritize semantic HTML, WCAG 2.1 accessibility standards, and Core Web Vitals (performance).

## Tech Stack
- **Build Tool:** Vite
- **Library:** React 18+
- **Language:** JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **Routing:** `react-router-dom` (use modern `createBrowserRouter` API)

## Initialization Checks
**CRITICAL:** Before generating component code, look up `package.json` to verify the presence and versions of necessary dependencies (`react`, `react-router-dom`, `tailwindcss`, `vite`). If any are missing, simulate the installation commands before proceeding.

## Directory Architecture
Implement a feature-based or standard scalable architecture inside the `src` folder:
```text
src/
├── assets/         # Static assets (images, icons)
├── components/     # Reusable UI components
│   ├── ui/         # Base components (Button, Card, Input)
│   └── layout/     # Structural components (Navbar, Footer)
├── pages/          # Route-level components
├── routes/         # React Router configuration
├── hooks/          # Custom React hooks
├── utils/          # Helper functions
├── App.jsx         # Root component
└── main.jsx        # Entry point
```

## Routing & Layout Strategy
1. **Routing (`src/routes/index.jsx`)**: Use `createBrowserRouter` and `RouterProvider`. Include routes for `Home`, `About`, `Services`, and `Contact`.
2. **Layout (`src/components/layout/RootLayout.jsx`)**: Create a wrapper component utilizing `<Outlet />` from `react-router-dom`. It must contain the `Navbar` at the top, the `<main>` tag for the Outlet, and the `Footer` at the bottom.

## Component Specifications

All components must be written as functional components using modern hooks. Document props using JSDoc since we are utilizing JavaScript instead of TypeScript.

### 1. Navbar (`src/components/layout/Navbar.jsx`)
- **Semantics:** Wrap in `<nav>` and `<header>`.
- **Features:** 
  - Sticky top positioning with a glassmorphism effect (Tailwind: `sticky top-0 backdrop-blur-md`).
  - Desktop: Inline `NavLink` components (use `isActive` to style the active state).
  - Mobile: Hamburger menu toggling a mobile drawer. Use `aria-expanded` and `aria-controls` for accessibility.

### 2. Hero (`src/components/Hero.jsx`)
- **Semantics:** Wrap in `<section aria-labelledby="hero-heading">`.
- **Features:**
  - High-impact headline (`<h1>`) optimizing for LCP (Largest Contentful Paint).
  - Sub-headline and primary/secondary Call to Action (CTA) buttons.
  - Responsive flex/grid layout to split text and a hero image/illustration.

### 3. Card (`src/components/ui/ServiceCard.jsx`)
- **Semantics:** Wrap in `<article>`.
- **Features:**
  - Reusable component. Must accept props: `title`, `description`, `icon`, and `link`.
  - Use Tailwind `group` class for hover effects (e.g., slight lift and shadow increase on hover).

### 4. Footer (`src/components/layout/Footer.jsx`)
- **Semantics:** Wrap in `<footer>`.
- **Features:**
  - Grid layout dividing into sections: Company Info, Quick Links (using `Link` from React Router), Social Icons, and a copyright notice.

## Page Implementations
- **Home (`src/pages/Home.jsx`)**: Composes the `Hero`, a "Features/Services" section mapping over `ServiceCard`s, and a "Testimonials" section.
- **About (`src/pages/About.jsx`)**: Company history, mission statement, and team grid.
- **Services (`src/pages/Services.jsx`)**: Detailed breakdown of offerings.
- **Contact (`src/pages/Contact.jsx`)**: Accessible HTML5 form (using `<label>`, `<input>`, `<textarea>`) with controlled state.

## Core Development Rules for the Agent
1. **DRY & Modular:** Do not write monolithic files. Extract repetitive UI elements into `src/components/ui/`.
2. **Accessibility First:** Ensure all interactive elements (`button`, `a`) are keyboard navigable. Use `aria-labels` for icon-only buttons.
3. **Performance:** Utilize `React.lazy()` and `Suspense` for route-level code splitting.
4. **Tailwind Best Practices:** Avoid inline styles entirely. Use Tailwind utilities to handle responsive design mobile-first (e.g., `flex flex-col md:flex-row`).
```