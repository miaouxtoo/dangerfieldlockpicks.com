# Dangerfield Lock Picks - Website Sprint Plan
## dangerfieldlockpicks.com

---

## Project Overview

**Objective:** Build a premium, dark-themed showcase website for Dangerfield lock picks that establishes brand authority, drives conversions to LockPickWorld.com, and ranks for professional lock pick set keywords.

**Tech Stack:**
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS + custom design system
- Vercel deployment
- Framer Motion animations
- Next SEO optimization

**Design Philosophy:** Figma-quality, dark luxury aesthetic. Think Apple product pages meets high-end tool craftsmanship. Every element should feel premium, intentional, and desirable.

---

## Brand Research Summary

### Chris Dangerfield - The Founder
- **Origin:** Picked first lock at age 9 with a nail clipper
- **Experience:** 20+ years in locksport, designing tools since 2000
- **Philosophy:** "Unethical to sell lock picks without education"
- **Innovations:** Shoulderless bump keys, dual-gauge Praxis system, TOK tension tools, Dangerfield Machina EPG
- **Collaborations:** World champion pickers, special forces, government agencies
- **Persona:** Expert lock picker, comedian, adrenaline junkie

### Brand Pillars
1. **British Engineering Excellence** - Precision design, no compromises
2. **20+ Years of Innovation** - Proven track record
3. **Professional Grade** - Used by locksmiths, military, champions
4. **Education First** - Tools + knowledge = mastery

### Key Materials & Quality Points
- 301 Stainless Steel (extreme hardness, high yield strength)
- Aerospace-grade aluminum
- Precision manufacturing (Taiwan for Machina)
- Extensive real-world testing

---

## Product Catalog (Priority Order)

### Tier 1: Hero Products (Featured prominently)

#### 1. Dangerfield MACHINA Electric Lock Pick Gun
- **Price:** $274.99 (from $299.95)
- **USP:** "Revolution in EPGs" - beats all competitors in opening more locks
- **Specs:** 13,000 RPM, 0-8mm adjustable swing, ~80dB quiet operation
- **Target:** Professional locksmiths, serious enthusiasts
- **Rating:** 5 stars

#### 2. PRAXIS Dual-Gauge Complete Set
- **Price:** From $69.99
- **USP:** Most-rated Dangerfield set (516 reviews, 5 stars)
- **Features:** Two pick thicknesses, 301 stainless steel, includes guide
- **Target:** All skill levels

#### 3. SKELETON EDC Multi-Tool
- **Price:** $44.99-$67.95
- **USP:** British-engineered EDC perfection
- **Specs:** 3.15" x 0.8", 2.5oz, aerospace aluminum + 301 SS
- **Features:** Quick-release customizable picks, 8-38 pick options

### Tier 2: Core Products

#### 4. Serenity Lock Pick Set
- **Price:** From $29.99
- **Rating:** 5 stars (152 reviews)
- **USP:** Affordable pro-quality entry point

#### 5. Polaris Lock Pick Rakes
- **Price:** $79.99 (from $99.95)
- **Rating:** 5 stars (97 reviews)
- **USP:** Premium raking system

#### 6. Nano Covert EDC Rake Set
- **Price:** From $47.99
- **Rating:** 5 stars (82 reviews)
- **USP:** "Raking locks has never been so stylish" - includes leather wallet

### Tier 3: Practice & Learning

#### 7. Progressive Clear Lock Set (3-pack)
- **Price:** $47.99-$54.99
- **Rating:** 5 stars (124 reviews)
- **USP:** "Go from Beginner to Pro fast"

#### 8. Aluminum Brushed Repinnable Lock
- **Price:** $69.99
- **Rating:** 5 stars (77 reviews)
- **USP:** Aerospace aluminum, infinitely repinnable

#### 9. Infinitus Repinnable Cutaway Lock
- **Price:** $49.99
- **Rating:** 5 stars (40 reviews)

### Tier 4: Accessories & Tools

#### 10. TOK Tension Wrench Set (5-piece)
- **Price:** $29.99
- **Rating:** 5 stars (110 reviews)

#### 11. Extended TOK Set + Case
- **Price:** $39.99
- **Rating:** 5 stars (46 reviews)

#### 12. BOGOTA Picks (2-pack)
- **Price:** $19.87
- **Rating:** 5 stars (64 reviews)

#### 13. Zedwrench Tension Tool
- **Price:** $9.71
- **Rating:** 5 stars (35 reviews)

#### 14. How to Pick Locks Guidebook
- **Price:** $14.99
- **Rating:** 5 stars (41 reviews)

---

## SEO Strategy

### Primary Keywords (Target)
1. "professional lock pick set" - High intent, commercial
2. "lock pick set" - High volume, competitive
3. "best lock pick set" - Comparison/review intent

### Secondary Keywords
- "electric lock pick gun"
- "lock picking tools professional"
- "British lock picks"
- "Dangerfield lock picks"
- "EDC lock pick set"
- "practice locks for lock picking"
- "stainless steel lock picks"

### SEO Implementation
- Semantic HTML5 structure
- JSON-LD structured data (Product, Organization, BreadcrumbList)
- Open Graph + Twitter Cards
- Optimized meta titles/descriptions per page
- Internal linking strategy
- Fast Core Web Vitals (Vercel Edge)
- Mobile-first responsive design

---

## Site Architecture

```
dangerfieldlockpicks.com/
├── / (Homepage)
│   ├── Hero Section (Machina feature)
│   ├── Brand Story Teaser
│   ├── Featured Products Grid
│   ├── Trust Signals / Social Proof
│   ├── Category Navigation
│   └── CTA to LockPickWorld
│
├── /products (Product Catalog)
│   ├── Filter by category
│   ├── Sort options
│   └── Grid/List view
│
├── /products/[slug] (Individual Product Pages)
│   ├── Hero image gallery
│   ├── Specifications
│   ├── Features breakdown
│   ├── Reviews summary
│   └── Buy CTA → LockPickWorld
│
├── /machina (Dedicated Machina Landing Page)
│   ├── Cinematic hero
│   ├── Technical deep-dive
│   ├── Comparison section
│   └── Purchase CTA
│
├── /about (Brand Story)
│   ├── Chris Dangerfield bio
│   ├── 20+ years timeline
│   ├── Philosophy
│   └── Innovations
│
├── /collections/[category]
│   ├── lock-pick-sets
│   ├── practice-locks
│   ├── tension-tools
│   └── accessories
│
└── /guide (Lock Picking Education)
    ├── Beginner resources
    └── Links to tutorials
```

---

## Sprint Breakdown

### Sprint 1: Foundation (Steps 1-5)
**Goal:** Project setup and design system

1. **Initialize Next.js Project**
   - `npx create-next-app@latest` with TypeScript, Tailwind, App Router
   - Configure ESLint, Prettier
   - Set up folder structure

2. **Configure Tailwind Design System**
   - Custom color palette (dark theme)
   - Typography scale (premium feel)
   - Spacing system
   - Component variants

3. **Create Base Components**
   - Button (primary, secondary, ghost)
   - Card (product, feature)
   - Container/Layout
   - Typography components
   - Navigation (header, footer)

4. **Set Up Layout Structure**
   - Root layout with fonts
   - Header with navigation
   - Footer with links
   - Mobile responsive nav

5. **Configure Metadata & SEO Base**
   - Next.js metadata API setup
   - Default OG images
   - Robots.txt, sitemap config

---

### Sprint 2: Homepage (Steps 6-10)
**Goal:** High-impact landing experience

6. **Hero Section**
   - Full-viewport dark hero
   - Animated headline typography
   - Machina product feature
   - Floating CTA button
   - Subtle background animation/gradient

7. **Brand Story Section**
   - "20+ Years of British Engineering"
   - Chris Dangerfield quote
   - Trust badges (materials, testing)
   - Link to About page

8. **Featured Products Grid**
   - 6-product showcase
   - Hover animations
   - Quick-view ratings
   - "Shop at LockPickWorld" CTAs

9. **Category Navigation**
   - Visual category cards
   - Lock Pick Sets, Practice Locks, Tools, Machina
   - Smooth scroll animations

10. **Social Proof Section**
    - Review highlights
    - "Trusted by professionals"
    - Customer testimonials
    - Star ratings aggregate

---

### Sprint 3: Product System (Steps 11-15)
**Goal:** Complete product catalog

11. **Product Data Layer**
    - Create product data structure (TypeScript interfaces)
    - JSON data file with all products
    - Helper functions for filtering/sorting

12. **Product Catalog Page**
    - Grid layout with filters
    - Category filtering
    - Price sorting
    - Responsive grid

13. **Product Detail Page Template**
    - Image gallery/carousel
    - Specifications table
    - Features list with icons
    - "Buy at LockPickWorld" prominent CTA
    - Related products

14. **Collection Pages**
    - /collections/lock-pick-sets
    - /collections/practice-locks
    - /collections/tension-tools
    - /collections/accessories

15. **Machina Dedicated Page**
    - Cinematic product showcase
    - Technical specifications
    - "Why Machina" features
    - Comparison with competitors
    - Premium CTA

---

### Sprint 4: Content & Polish (Steps 16-20)
**Goal:** Brand content and conversion optimization

16. **About Page**
    - Chris Dangerfield story
    - Timeline of innovations
    - Brand philosophy
    - Professional credentials

17. **Guide/Education Section**
    - Beginner's intro
    - Link to LockPickWorld resources
    - Product recommendations by skill level

18. **CRO Optimization**
    - Strategic CTA placement
    - Exit-intent awareness
    - Product recommendation logic
    - Clear value propositions

19. **Animations & Micro-interactions**
    - Scroll-triggered animations
    - Hover states
    - Page transitions
    - Loading states

20. **Final SEO & Performance**
    - All meta tags
    - Structured data
    - Image optimization
    - Core Web Vitals audit
    - Accessibility review

---

## Design System Specification

### Colors (Dark Theme)
```css
--background: #0a0a0a (near black)
--background-secondary: #141414 (cards)
--background-tertiary: #1a1a1a (hover states)
--foreground: #fafafa (primary text)
--foreground-muted: #a1a1a1 (secondary text)
--accent: #d4af37 (gold - premium feel)
--accent-secondary: #b8860b (darker gold)
--border: #262626 (subtle borders)
--success: #22c55e
--error: #ef4444
```

### Typography
```css
--font-display: "Inter", system-ui (headings)
--font-body: "Inter", system-ui (body)
--font-mono: "JetBrains Mono" (specs/code)

/* Scale */
--text-xs: 0.75rem
--text-sm: 0.875rem
--text-base: 1rem
--text-lg: 1.125rem
--text-xl: 1.25rem
--text-2xl: 1.5rem
--text-3xl: 1.875rem
--text-4xl: 2.25rem
--text-5xl: 3rem
--text-6xl: 3.75rem
--text-7xl: 4.5rem
```

### Spacing
```css
/* 4px base unit */
--space-1: 0.25rem
--space-2: 0.5rem
--space-3: 0.75rem
--space-4: 1rem
--space-6: 1.5rem
--space-8: 2rem
--space-12: 3rem
--space-16: 4rem
--space-24: 6rem
--space-32: 8rem
```

### Component Patterns
- Cards: Subtle border, background-secondary, hover lift
- Buttons: Rounded-lg, gold accent for primary
- Images: Rounded corners, subtle shadow
- Sections: Full-width with max-w-7xl container

---

## CRO (Conversion Rate Optimization) Elements

### Primary CTA Strategy
- All "Buy" buttons link to specific LockPickWorld product pages
- Use UTM parameters for tracking: `?utm_source=dangerfieldlockpicks&utm_medium=website&utm_campaign=showcase`
- Button text: "Buy at LockPickWorld" / "Shop Now" / "Get Yours"

### Trust Signals
- Star ratings prominently displayed
- Review counts
- "20+ Years of Innovation"
- "British Engineered"
- "Professional Grade"
- "Used by Locksmiths Worldwide"

### Urgency/Scarcity (Subtle)
- "Most Popular" badges
- "516 5-Star Reviews" social proof
- "Professional's Choice" endorsement

### Value Propositions (Per Product)
- Clear benefits, not just features
- "Why This Set" sections
- Skill level recommendations

---

## File Structure

```
dangerfieldlockpicks.com/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx (homepage)
│   │   ├── products/
│   │   │   ├── page.tsx (catalog)
│   │   │   └── [slug]/
│   │   │       └── page.tsx (detail)
│   │   ├── machina/
│   │   │   └── page.tsx
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── collections/
│   │   │   └── [category]/
│   │   │       └── page.tsx
│   │   └── guide/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Container.tsx
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedProducts.tsx
│   │   │   ├── BrandStory.tsx
│   │   │   ├── Categories.tsx
│   │   │   └── SocialProof.tsx
│   │   ├── products/
│   │   │   ├── ProductCard.tsx
│   │   │   ├── ProductGrid.tsx
│   │   │   ├── ProductGallery.tsx
│   │   │   ├── ProductSpecs.tsx
│   │   │   └── ProductCTA.tsx
│   │   └── shared/
│   │       ├── StarRating.tsx
│   │       ├── TrustBadges.tsx
│   │       └── SEO.tsx
│   │
│   ├── data/
│   │   ├── products.ts
│   │   ├── categories.ts
│   │   └── testimonials.ts
│   │
│   ├── lib/
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   ├── types/
│   │   └── index.ts
│   │
│   └── styles/
│       └── globals.css
│
├── public/
│   ├── images/
│   │   ├── products/
│   │   ├── hero/
│   │   └── icons/
│   ├── favicon.ico
│   └── og-image.jpg
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## Implementation Order (Sequential Steps)

### Phase 1: Setup
- [x] Step 1: Research complete
- [ ] Step 2: Initialize Next.js project
- [ ] Step 3: Configure Tailwind with design system
- [ ] Step 4: Create TypeScript types
- [ ] Step 5: Build UI components (Button, Card, Badge)

### Phase 2: Layout
- [ ] Step 6: Create Header component
- [ ] Step 7: Create Footer component
- [ ] Step 8: Set up root layout
- [ ] Step 9: Add product data file

### Phase 3: Homepage
- [ ] Step 10: Build Hero section
- [ ] Step 11: Build Brand Story section
- [ ] Step 12: Build Featured Products section
- [ ] Step 13: Build Categories section
- [ ] Step 14: Build Social Proof section
- [ ] Step 15: Assemble homepage

### Phase 4: Products
- [ ] Step 16: Build Product Card component
- [ ] Step 17: Build Product Grid component
- [ ] Step 18: Create Products catalog page
- [ ] Step 19: Build Product Detail page
- [ ] Step 20: Create Collection pages

### Phase 5: Special Pages
- [ ] Step 21: Build Machina landing page
- [ ] Step 22: Build About page
- [ ] Step 23: Build Guide page

### Phase 6: Polish
- [ ] Step 24: Add animations (Framer Motion)
- [ ] Step 25: Implement full SEO
- [ ] Step 26: Performance optimization
- [ ] Step 27: Final review and deploy config

---

## Success Metrics

1. **SEO:** Rank on page 1 for "professional lock pick set" within 6 months
2. **Performance:** 90+ Lighthouse score across all categories
3. **Conversion:** Track clicks to LockPickWorld via UTM parameters
4. **Engagement:** Low bounce rate, high time on site

---

## Notes

- All purchases redirect to LockPickWorld.com - this is a showcase/brand site
- Focus on aspirational, premium positioning
- Education and authority-building content supports SEO
- Mobile experience is critical - many users browse on phones
- Dark theme aligns with professional/tactical aesthetic of the products

---

*Sprint Plan Created: December 2024*
*Ready for Implementation*
