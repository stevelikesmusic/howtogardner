# Steve Gardner's Portfolio Website - Project Context

## Overview

This is a NextJS portfolio website for Steve Gardner, a Fractional CTO and engineering consultant. The site has been redesigned to match a modern, professional aesthetic with a focus on engineering leadership services.

## Recent Major Updates (2025)

### Design System Overhaul

- **Color Palette**: Implemented custom linear gradient `linear-gradient(135deg, #667eea 0%, #764ba2 100%)` as the primary brand gradient
- **Design Language**: Adopted rounded cards, elevated shadows, and gradient elements throughout
- **Typography**: Uses slate color family for text hierarchy (slate-800, slate-600, gray-600)
- **Layout**: Fixed header with smooth scrolling, alternating section backgrounds (white/gray-50)

### Key Components

- **Header**: Fixed navigation with gradient text for active routes, responsive mobile menu
- **Hero Section**: Gradient background with compelling messaging about fractional CTO services
- **Services Section**: Three service cards with emoji icons and feature lists
- **Approach Section**: Two-column layout with methodology and testimonial quote card
- **Process Steps**: Numbered workflow with gradient circle icons
- **Articles Section**: Latest 3 blog posts with custom card design
- **Featured Article**: Highlighted article with gradient background
- **Contact Footer**: Integrated contact section with CTA

### Technical Architecture

- **Framework**: NextJS 15.2.4 with App Router
- **Styling**: Tailwind CSS with custom gradient classes
- **Content**: MDX for blog articles with custom components
- **Typography**: Roboto font family
- **Components**: Shadcn/ui component library for base UI elements

### Navigation Structure

- **Home** (`/`) - Main landing page with services overview
- **About** (`/about`) - Personal story and background with headshot
- **Articles** (`/blog`) - Blog listing page with all posts
- **Contact** (`/contact`) - Contact form with project type selection

### Content Strategy

- **Services Focus**: Three main offerings:
  1. Building Engineering Culture That Scales
  2. Reducing Time-to-Production & Technical Risk
  3. Growing Remote Teams That Ship
- **Approach**: Service-oriented leadership methodology
- **Social Proof**: Netflix APIv2 migration case study
- **Lead Generation**: Free technical assessment CTA throughout

### Brand Positioning

- **Target Audience**: Early-stage companies needing engineering leadership
- **Value Proposition**: Adaptable fractional CTO services that meet teams where they are
- **Differentiator**: Service-first approach vs. prescriptive consulting
- **Credibility**: Netflix, Zapier experience with concrete examples

## File Structure

```
├── app/
│   ├── layout.tsx (global layout with fixed header)
│   ├── page.tsx (homepage with service overview)
│   ├── about/ (personal story)
│   ├── blog/ (articles listing and individual posts)
│   ├── contact/ (contact form)
│   └── globals.css (custom gradient classes)
```

## Performance & SEO

- Static generation for optimal performance
- Responsive design across all device sizes
- Semantic HTML and proper heading hierarchy
- Open Graph metadata for social sharing
- Newsletter signup integration via Web3Forms

## Development Workflow

- ESLint for code quality (currently some prop sorting warnings)
- TypeScript for type safety
- Git version control with main branch
- Build process via `npm run build`
