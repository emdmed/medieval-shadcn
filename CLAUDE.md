# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 application with a medieval-themed design system built on top of shadcn/ui components. The project uses Tailwind CSS v4 (with PostCSS), TypeScript, and React 19, featuring custom medieval-styled UI components with unique visual treatments.

## Development Commands

```bash
# Start development server with Turbopack
npm run dev

# Build for production with Turbopack
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## Architecture

### Component System

The UI is built on **shadcn/ui** components heavily customized with a medieval aesthetic:

- **Base components**: Located in `components/ui/`, these are Radix UI primitives wrapped with custom medieval styling
- **Custom styling approach**: Components use `clip-path` CSS to create medieval geometric shapes (polygons, irregular borders)
- **Variant system**: Uses `class-variance-authority` (CVA) for type-safe component variants
- **Composition pattern**: Components are composed using `@radix-ui/react-slot` for flexible rendering

### Styling Architecture

**Tailwind CSS v4** configuration in `app/globals.css`:

- Uses CSS variables with `oklch()` color space for modern color definitions
- Theme tokens defined in `:root` with dark mode overrides in `.dark`
- Custom `@theme inline` layer maps CSS variables to Tailwind tokens
- MedievalSharp font applied across all font families (`--font-sans`, `--font-serif`, `--font-mono`)
- Custom shadow system with 8 shadow levels (2xs through 2xl)

### Path Aliases

TypeScript is configured with `@/*` alias mapping to the project root, used throughout for imports:

```typescript
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
```

### Medieval Design Patterns

When working with UI components, note these patterns:

1. **Button variants** add decorative text around content:
   - Primary: `+ {children} +`
   - Secondary: `- {children} -`
   - Ghost: `| {children} |`

2. **Geometric shapes** use `clip-path` polygons:
   - Primary button: 12-point irregular polygon
   - Secondary button: 8-point octagon
   - Ghost button: Pentagon with cut bottom

3. **Border styling**: Double borders (`border-double border-3`) for medieval texture

### Key Dependencies

- **UI Framework**: Radix UI primitives for accessible components
- **Drag & Drop**: `@dnd-kit` for sortable/draggable interfaces
- **Forms**: `react-hook-form` + `@hookform/resolvers` + `zod` for validation
- **Animation**: `motion` (Framer Motion v12) for animations
- **Charts**: `recharts` for data visualization
- **Icons**: `lucide-react` and `@tabler/icons-react`
- **Utilities**: `clsx` + `tailwind-merge` combined in `cn()` utility

## File Structure

```
app/
  ├── layout.tsx          # Root layout with font setup
  ├── page.tsx            # Homepage with component demos
  ├── globals.css         # Tailwind config and theme tokens
  ├── dashboard/          # Dashboard route
  ├── login/              # Login route
  └── waitlist1/          # Waitlist route

components/
  ├── ui/                 # Base UI components (shadcn/ui)
  └── [feature-components] # Composed feature components

lib/
  └── utils.ts            # cn() utility for class merging
```

## TypeScript Configuration

- Target: ES2017
- Module resolution: bundler (Next.js optimized)
- Strict mode enabled
- Path alias: `@/*` maps to project root
