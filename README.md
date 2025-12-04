# e-Retail Landing Page

A modern, responsive landing page for automated cash management systems built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Poppins (headings) + Inter (body)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   ├── tabs.tsx
│   │   └── accordion.tsx
│   ├── ornaments/
│   │   ├── grid-bg.tsx     # Faint grid pattern
│   │   └── cubes.tsx       # Floating 3D cube SVGs
│   ├── header.tsx          # Sticky navigation
│   ├── footer.tsx          # Site footer
│   ├── hero.tsx            # Hero section with parallax
│   ├── benefit-card.tsx    # Benefit/feature cards
│   ├── product-card.tsx    # Product display cards
│   ├── product-grid.tsx    # Product grid section
│   ├── kpi-strip.tsx       # Stats & logos section
│   ├── who-we-help.tsx     # Benefits section
│   ├── section.tsx         # Section wrapper component
│   └── beveled-panel.tsx   # Beveled corner panel
├── lib/
│   ├── data.ts             # Content data (nav, products, etc.)
│   └── utils.ts            # Utility functions
├── public/
│   ├── images/             # Product images (placeholders)
│   └── logos/              # Partner logos (placeholders)
└── ...config files
```

## Replacing Placeholder Images

### Product Images
Replace the following files in `/public/images/`:
- `product-core.png` - Hero product render
- `product-1.png` - Product card 1
- `product-2.png` - Product card 2
- `product-3.png` - Product card 3

**Recommended dimensions**: 800x600px or higher, PNG with transparency

### Partner Logos
Replace the SVG files in `/public/logos/`:
- `logo-1.svg` through `logo-6.svg`

**Recommended dimensions**: 120x40px

## Editing Content

All content data is centralized in `/lib/data.ts`:

- `navItems` - Navigation links
- `benefits` - Feature/benefit cards
- `products` - Product grid items
- `kpis` - Statistics strip
- `logos` - Partner logo paths
- `footerLinks` - Footer navigation
- `trustBullets` - Hero trust indicators

## Color Tokens

Defined in `/app/globals.css`:

```css
--bg: #0E1217;          /* Page background */
--panel: #12171F;       /* Cards/panels */
--panel-2: #1A202B;     /* Secondary panels */
--border: #262D3A;      /* Borders */
--text: #E7ECF4;        /* Primary text */
--muted: #A8B1C4;       /* Secondary text */
--accent: #E44242;      /* Red accent */
--accent-700: #C73434;  /* Darker red */
```

## Key Features

- **Responsive Design**: Mobile-first, works on all screen sizes
- **Smooth Animations**: Staggered reveals, hover effects, parallax
- **Accessible**: Proper ARIA labels, keyboard navigation, focus states
- **Performance**: Optimized images, minimal bundle size
- **Dark Theme**: Graphite/charcoal UI with red accents

## Customization

### Adding New Products
Edit the `products` array in `/lib/data.ts`:

```typescript
{
  title: "Product Name",
  blurb: "Short description",
  image: "/images/product-new.png",
  href: "#",
}
```

### Changing Colors
Update CSS variables in `/app/globals.css` and corresponding Tailwind config in `/tailwind.config.ts`.

## License

Private - All rights reserved.
