# Claude Development Notes

## Build and Development Commands

### Primary Build Command

```bash
npm run build
```

- Compiles NextJS application
- Runs ESLint and TypeScript checks
- Should be run after major changes to verify everything works
- Currently shows some ESLint warnings about prop sorting (non-breaking)

### Development Server

```bash
npm run dev
```

- Starts local development server
- Hot reload for rapid development
- Accessible at http://localhost:3000

## Tools and Scripts Used

### Design Implementation

- **Tailwind CSS**: Primary styling framework
- **Custom CSS Classes**: Added to `app/globals.css`
  - `.bg-brand-gradient`: Background gradient for hero, cards, icons
  - `.text-brand-gradient`: Gradient text for active navigation links
- **Responsive Design**: All components work across desktop, tablet, mobile

### Component Architecture

- **Shadcn/ui**: Base component library for cards, buttons, sheets
- **Custom Components**: ArticleSummaryCard, Header with active state detection
- **MDX Components**: Custom styling for blog article links and content

### Navigation Implementation

- **usePathname**: NextJS hook for active route detection
- **Dynamic Styling**: Conditional classes based on current route
- **Smooth Scrolling**: CSS scroll-behavior and scroll-padding-top for fixed header

## Key Technical Decisions

### Fixed Header Solution

- Added `pt-16` to main element in layout.tsx for global header clearance
- Set `scroll-padding-top: 5rem` in CSS for proper anchor link behavior
- Removed individual page padding in favor of global solution

### Gradient Implementation

- Used custom CSS linear-gradient instead of Tailwind's limited gradient options
- Exact specification: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- Applied consistently across hero, service cards, quote cards, step numbers, and nav links

### Component Styling Patterns

- **Cards**: `rounded-2xl bg-white p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl`
- **Buttons**: `rounded-full` with gradient backgrounds or borders
- **Typography**: slate-800 for headings, gray-600 for body text
- **Sections**: Alternating white and gray-50 backgrounds

## Content Management

### Blog System

- **MDX Files**: Stored in `/articles/` directory
- **Custom Styling**: Updated link colors to match design palette (slate instead of green)
- **Article Cards**: Redesigned to match overall card design language

### Form Integration

- **Web3Forms**: Contact form integration with access key
- **React Hook Form**: Form validation and submission
- **Project Type Selector**: Dropdown for service categorization

## Browser Compatibility

- Modern CSS features used (backdrop-filter, CSS Grid, Flexbox)
- Tailwind provides good browser support out of the box
- Custom gradients work in all modern browsers

## Performance Optimizations

- Static generation where possible
- Image optimization through NextJS Image component
- Component-level imports to minimize bundle size
- Proper semantic HTML for accessibility and SEO

## Maintenance Notes

- ESLint prop sorting warnings can be addressed if needed (non-critical)
- All components follow consistent naming and structure patterns
- Responsive design uses Tailwind breakpoints (md:, lg:) consistently
