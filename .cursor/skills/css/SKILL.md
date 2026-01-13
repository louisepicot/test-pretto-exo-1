---
description: CSS and styling best practices following utility-first approach with design tokens
globs: ["**/*.css", "**/*.scss", "**/*.module.css", "**/*.module.scss"]
---

# CSS & Styling Best Practices

## Design Tokens & CSS Variables

- **ALWAYS use CSS custom properties (variables) for all design tokens**

  - Colors, typography, spacing, shadows, borders, etc.
  - Define all tokens in `:root` selector
  - Use semantic naming (e.g., `--color-text-primary` not `--color-gray-600`)
  - Group related tokens together with clear comments

- **Follow the established design token structure:**

  ```css
  :root {
    /* Colors */
    --color-*: value;

    /* Typography */
    --font-family: value;
    --font-size-*: value;
    --font-weight-*: value;
    --line-height-*: value;

    /* Spacing (8px base scale) */
    --spacing-*: value;

    /* Border Radius */
    --radius-*: value;

    /* Shadows */
    --shadow-*: value;
  }
  ```

- **Never use hardcoded values** - always reference CSS variables
- Use consistent naming conventions with kebab-case
- Document token purpose when not obvious

## Utility-First Approach

- **Prefer utility classes over custom component styles**
- Create reusable utility classes for common patterns:

  - Typography utilities (`.text-sm`, `.text-lg`, `.font-bold`, etc.)
  - Spacing utilities (`.m-4`, `.p-6`, `.gap-4`, etc.)
  - Layout utilities (`.flex`, `.grid`, `.items-center`, etc.)
  - Color utilities (`.text-primary`, `.bg-white`, etc.)

- **Utility class naming conventions:**

  - Use abbreviations: `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`
  - Use descriptive prefixes: `text-`, `bg-`, `border-`, `shadow-`
  - Use directional modifiers: `mt-`, `mb-`, `px-`, `py-`, `mx-`, `my-`

- **When to create component classes:**
  - Only for complex, reusable component patterns (e.g., `.card`, `.button`)
  - When utility composition becomes too verbose
  - For component-specific styling that doesn't fit utility patterns

## Spacing System

- **Use the 8px base spacing scale consistently:**

  - `--spacing-0`: 0
  - `--spacing-2`: 0.5rem (8px)
  - `--spacing-4`: 1rem (16px)
  - `--spacing-6`: 1.5rem (24px)
  - `--spacing-8`: 2rem (32px)
  - `--spacing-12`: 3rem (48px)
  - `--spacing-16`: 4rem (64px)

- **Never use arbitrary spacing values** - stick to the scale
- Use spacing variables for margins, padding, gaps, and positioning

## Responsive Design

- **Always use mobile-first approach:**

  - Base styles apply to mobile (0-833px)
  - Use `@media (min-width: 834px)` for tablet
  - Use `@media (min-width: 1440px)` for desktop

- **Breakpoint strategy:**

  - Mobile: default styles (no media query, up to 375px base)
  - Tablet: `834px` and up
  - Desktop: `1440px` and up

- **Responsive utility classes:**

  - Use prefixes: `tablet:` and `desktop:` for responsive utilities
  - Example: `.tablet:flex`, `.desktop:flex-row`

- **Avoid fixed widths** - use relative units and max-widths
- Use `container` class for responsive containers with proper max-widths

## Typography

- **Use typography variables consistently:**

  - Font sizes: `--font-size-sm` through `--font-size-3xl`
  - Font weights: `--font-weight-normal`, `--font-weight-medium`, `--font-weight-semibold`, `--font-weight-bold`
  - Line height: `--line-height-normal`

- **Typography utilities:**

  - Size: `.text-sm`, `.text-base`, `.text-lg`, `.text-xl`, `.text-2xl`, `.text-3xl`
  - Weight: `.font-normal`, `.font-medium`, `.font-semibold`, `.font-bold`
  - Alignment: `.text-left`, `.text-center`, `.text-right`
  - Color: `.text-primary`, `.text-secondary`, `.text-white`, `.text-black`

- Set base typography on `body` element
- Use semantic HTML elements for proper typography hierarchy

## Layout & Flexbox/Grid

- **Use utility classes for layout:**

  - Display: `.flex`, `.grid`, `.hidden`
  - Flex direction: `.flex-col`, `.flex-row`
  - Alignment: `.items-center`, `.items-start`, `.justify-center`, `.justify-between`
  - Gaps: `.gap-2`, `.gap-4`, `.gap-6`, `.gap-8`

- **Prefer Flexbox for 1D layouts**
- **Use Grid for 2D layouts**
- Use `.w-full` for full-width elements
- Use `.mx-auto` for centered elements

## Colors

- **Always use color variables:**

  - Text colors: `--color-text-primary`, `--color-text-secondary`, `--color-text-light`
  - Background colors: `--color-white`, `--color-black`, `--color-card-bg`
  - Border colors: `--color-border`

- **Color utilities:**

  - `.text-primary`, `.text-secondary`, `.text-white`, `.text-black`
  - Create background utilities as needed: `.bg-white`, `.bg-card-bg`

- **Never use hex codes directly** - always use variables
- Ensure sufficient color contrast for accessibility

## Borders & Shadows

- **Use border radius variables:**

  - `.rounded-sm`, `.rounded-md`, `.rounded-lg`
  - Values: `--radius-sm` (4px), `--radius-md` (8px), `--radius-lg` (16px)

- **Use shadow variables:**

  - `.shadow-sm`, `.shadow-md`
  - Values: `--shadow-sm`, `--shadow-md`

- Apply borders using color variables: `border: 1px solid var(--color-border)`

## Code Organization

- **File structure (follow this order):**

  1. CSS Variables & Design Tokens
  2. Reset & Base Styles
  3. Typography Utilities
  4. Spacing Utilities
  5. Layout Utilities
  6. Component Styles
  7. Responsive Utilities
  8. Border & Radius Utilities
  9. Shadow Utilities

- **Use clear section comments:**

  ```css
  /* ============================================
     Section Name
     ============================================ */
  ```

- **Group related utilities together**
- Keep utilities in logical order (most common first)
- Maintain consistent spacing between sections

## Performance

- **Minimize CSS specificity** - prefer single-class selectors
- Avoid deep nesting (max 2-3 levels)
- Use efficient selectors (avoid `*` when possible)
- Leverage CSS variables for runtime theming
- Use `will-change` sparingly and only when needed

## Accessibility

- **Ensure sufficient color contrast** (WCAG AA minimum)
- Use relative units (rem, em) for font sizes to respect user preferences
- Don't rely solely on color to convey information
- Ensure interactive elements have proper focus states
- Use semantic HTML elements

## Modern CSS Features

- **Prefer modern CSS features:**

  - CSS Grid and Flexbox over floats
  - CSS custom properties over preprocessors
  - `gap` property for spacing in flex/grid
  - Logical properties when appropriate (`margin-inline`, `padding-block`)

- **Avoid deprecated features:**
  - No vendor prefixes (use autoprefixer if needed)
  - No `!important` unless absolutely necessary
  - Avoid inline styles in components

## Project-Specific Guidelines

- **Follow the established utility-first pattern** in `src/index.css`
- All styles should use CSS variables from `:root`
- Use the 8px spacing scale consistently
- Mobile-first responsive design is mandatory
- Component classes should be minimal - prefer utility composition
- Keep `index.css` as the single source of truth for design tokens
- Add new utilities to the appropriate section following the established structure
- Use semantic color names that describe purpose, not appearance

## Anti-Patterns to Avoid

- ❌ Hardcoded color values (hex, rgb, etc.)
- ❌ Arbitrary spacing values
- ❌ Inline styles in React components
- ❌ Deep CSS nesting (more than 3 levels)
- ❌ Using `!important` without justification
- ❌ Fixed pixel values for spacing
- ❌ Desktop-first media queries
- ❌ Creating component classes for simple styling that utilities can handle
- ❌ Mixing different spacing scales
- ❌ Using color names that describe appearance (e.g., `--color-blue-500`) instead of purpose
