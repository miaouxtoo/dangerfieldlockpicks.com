# Dangerfield Lock Picks

Official showcase website for Dangerfield Lock Picks - British-engineered precision lock picking tools.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel

## Development

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

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── products/          # Product catalog & detail pages
│   ├── collections/       # Category collection pages
│   ├── machina/           # Dedicated Machina EPG page
│   ├── about/             # Brand story page
│   └── guide/             # Lock picking guide
├── components/
│   ├── ui/                # Base UI components
│   ├── layout/            # Header, Footer
│   ├── home/              # Homepage sections
│   ├── products/          # Product-related components
│   └── seo/               # JSON-LD structured data
├── data/                  # Product catalog data
├── lib/                   # Utilities and constants
└── types/                 # TypeScript types
```

## Features

- Dark premium design aesthetic
- Full product catalog with 15+ products
- Individual product detail pages
- Category collection pages
- SEO optimized (meta tags, JSON-LD, sitemap)
- Mobile responsive
- CRO-focused CTAs linking to LockPickWorld.com

## Deployment

Deploy to Vercel:

```bash
# Using Vercel CLI
vercel

# Or connect to GitHub for automatic deployments
```

## Environment

No environment variables required - this is a static showcase site.

## SEO Keywords

- Professional lock pick set
- Lock pick set
- Best lock pick set
- Dangerfield lock picks
- British lock picks
- Electric lock pick gun

---

Built for [LockPickWorld.com](https://www.lockpickworld.com)
