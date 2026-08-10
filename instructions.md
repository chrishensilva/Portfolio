# Portfolio Website — Redesign Requirements
**Owner:** Chrishen Silva  
**Current Site:** https://chrishensilva.github.io/Portfolio/  
**Document Type:** Full Technical & Business Requirements  
**Version:** 1.0  
**Date:** March 2026

---

## 1. Executive Summary

The current portfolio website is functional but lacks the visual sophistication, modern interaction design, and strategic positioning needed to stand out in a competitive market. This document defines all business and technical requirements to transform the site into a world-class, creative, and memorable developer portfolio that converts visitors into clients, collaborators, or employers.

**Core Goal:** Redesign the portfolio to be visually striking, fast, accessible, and conversion-focused — making Chrishen Silva impossible to forget.

---

## 2. Business Requirements

### 2.1 Primary Goals

| # | Goal | Priority |
|---|------|----------|
| B1 | Establish a strong, memorable personal brand identity | High |
| B2 | Clearly communicate skills, experience, and value proposition | High |
| B3 | Generate leads (job offers, freelance inquiries, collaborations) | High |
| B4 | Showcase projects with enough context to build credibility | High |
| B5 | Position Chrishen as a modern, skilled, and creative developer | High |
| B6 | Make it easy for visitors to take action (hire, connect, contact) | High |

### 2.2 Target Audience

- **Recruiters & HR Managers** — need quick, scannable proof of capability
- **Tech Leads & Engineering Managers** — want to evaluate technical depth
- **Startup Founders** — looking for a versatile developer/collaborator
- **Freelance Clients** — need trust signals and clear project examples
- **Peers & Community** — developers, designers seeking inspiration or collaboration

### 2.3 Key Business Problems with Current Site

1. **No strong visual identity** — the design blends into thousands of generic GitHub Pages portfolios
2. **Weak first impression** — the hero section does not make an immediate, memorable impact
3. **Projects lack storytelling** — project cards likely show too little context (no role, challenge, outcome)
4. **No clear call-to-action (CTA) hierarchy** — visitors don't know what to do next
5. **Missing trust signals** — no testimonials, no metrics, no social proof
6. **Generic typography and color palette** — forgettable aesthetic
7. **Likely missing SEO metadata** — hard to discover through search
8. **No personal brand voice** — the copy doesn't sound like a distinct person

### 2.4 Success Metrics

- Bounce rate below 40%
- Average session duration above 2 minutes
- At least 1 contact form submission per 50 unique visitors
- Lighthouse performance score ≥ 90
- Lighthouse accessibility score ≥ 95

---

## 3. Design Requirements

### 3.1 Aesthetic Direction

**Chosen Direction:** Editorial Dark — refined, confident, high-contrast  
Think: a premium tech magazine meets a creative developer's personal space.

- **Theme:** Dark background (`#0A0A0F`) with sharp light text and a single vivid accent color (e.g., electric lime `#C8FF00` or cool cyan `#00E5FF`)
- **Typography:** Pair a bold geometric display font (e.g., *Clash Display*, *Syne*, or *Space Grotesk*) with a clean readable body font (e.g., *DM Sans*, *Manrope*, or *Plus Jakarta Sans*)
- **Layout:** Asymmetric, grid-breaking, generous whitespace in key sections
- **Motion:** Purposeful — smooth entrance animations, cursor effects, hover reveals
- **No:** purple gradients on white, Inter/Roboto everywhere, stock photo backgrounds

### 3.2 Visual Identity Requirements

| Element | Requirement |
|---------|-------------|
| Logo / Wordmark | Custom typographic logo or monogram — not just plain text |
| Color Palette | 1 dark base + 1 vivid accent + 1 neutral mid-tone (max 3 core colors) |
| Typography Scale | Min 5-level type scale with clear hierarchy |
| Iconography | Custom SVG icons or a single icon library (Lucide/Phosphor) — not Font Awesome |
| Spacing System | 8px base grid throughout |
| Border Radius | Consistent token — either sharp (0px) or soft (8–12px), not mixed |

### 3.3 Sections Required

#### 3.3.1 Navigation
- Sticky, minimal, transparent-to-solid on scroll
- Logo/name left, nav links right
- Mobile: full-screen overlay menu with large typography
- Active section highlight

#### 3.3.2 Hero Section
- Full-viewport height
- Large, bold headline stating name + role (not just "Hi, I'm X")
- A short punchy tagline — value proposition, not job title
- Animated text (typewriter or reveal) on a key phrase
- Primary CTA: "View My Work" → scrolls to Projects
- Secondary CTA: "Download CV" → opens PDF
- Background: subtle animated mesh gradient, particle effect, or SVG blob animation — not a static solid color
- Profile photo: stylized, with a creative masking shape (hex, circle with border glow, etc.)

#### 3.3.3 About Section
- Short personal narrative (3–4 sentences), written in first person
- Timeline or card layout for education and experience
- "Currently:" status indicator (open to work, based in Sri Lanka, etc.)
- Soft background accent to differentiate from hero

#### 3.3.4 Skills Section
- Grouped by category (Languages, Frameworks, Tools, etc.)
- Visual representation: tags/pills with hover glow, or animated progress bars
- No plain unformatted lists
- Logos/icons for each technology

#### 3.3.5 Projects Section (Most Important)
- Minimum 3 featured projects with full context
- Each project card must include:
  - Project name + short description (1–2 lines)
  - Role played (e.g., "Solo Developer", "Frontend Lead")
  - Tech stack used (as visual tags)
  - Key outcome or metric (e.g., "Reduced load time by 40%", "500+ users")
  - Links: Live Demo + GitHub Repo
  - Screenshot or mockup image
- Layout: Large featured card + 2–3 smaller cards OR a horizontal scroll carousel
- Hover: image scale + overlay with CTA

#### 3.3.6 Testimonials / Social Proof (New Section)
- At least 2–3 short quotes from colleagues, clients, or professors
- If unavailable: replace with GitHub stats widget or a "What people say" placeholder for future content

#### 3.3.7 Contact Section
- Headline that invites action (e.g., "Let's build something together.")
- Contact form: Name, Email, Message — no CAPTCHA friction if possible (use Netlify Forms or EmailJS)
- Direct email address shown visually (with copy-to-clipboard button)
- Links to LinkedIn, GitHub, and other social profiles
- Location: Negombo, Sri Lanka (optional — shows personality)

#### 3.3.8 Footer
- Minimal: copyright, name, year (auto-updated via JS)
- Back-to-top button
- Social icon links

---

## 4. Technical Requirements

### 4.1 Technology Stack

| Layer | Recommendation | Rationale |
|-------|---------------|-----------|
| Framework | React + Vite OR plain HTML/CSS/JS | Speed of build; GitHub Pages compatibility |
| Styling | Tailwind CSS OR plain CSS with custom properties | Maintainability, consistency |
| Animations | GSAP or Framer Motion | Professional-quality motion |
| Form Handling | EmailJS or Formspree | Works without a backend |
| Hosting | GitHub Pages (current) OR Vercel | Vercel preferred for better build pipeline |
| Version Control | GitHub (existing) | Keep existing repo |

### 4.2 Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse Accessibility | ≥ 95 |
| First Contentful Paint (FCP) | < 1.5s |
| Largest Contentful Paint (LCP) | < 2.5s |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Total page weight | < 2MB uncompressed |

**Performance Tactics:**
- Compress and serve images as WebP (use Squoosh or Sharp)
- Lazy-load all images below the fold
- Minify and bundle all JS/CSS
- Use `font-display: swap` for web fonts
- Preload critical fonts and hero image
- Avoid render-blocking scripts

### 4.3 Responsiveness

- Mobile-first approach
- Breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop), 1536px (large desktop)
- No horizontal scroll on any viewport
- Touch-friendly tap targets (min 44×44px)
- Test on: Chrome, Safari, Firefox, Edge + iOS Safari + Android Chrome

### 4.4 Accessibility (WCAG 2.1 AA)

- All images have descriptive `alt` text
- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- Full keyboard navigation support
- ARIA labels on icon-only buttons
- Focus indicators visible and styled
- Skip-to-content link at top of page
- Semantic HTML5 elements (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- No animation that can't be disabled (respect `prefers-reduced-motion`)

### 4.5 SEO Requirements

- `<title>` tag: "Chrishen Silva — [Role] | Portfolio"
- Meta description (150–160 chars) describing skills and value
- Open Graph tags for social sharing preview (title, description, image)
- Twitter card tags
- `robots.txt` and `sitemap.xml`
- Schema.org JSON-LD markup for Person type
- Canonical URL
- All pages/sections have logical heading hierarchy (one `<h1>` per page)

### 4.6 Analytics

- Google Analytics 4 (GA4) or Plausible (privacy-friendly alternative)
- Track: page views, session duration, CTA clicks (View Work, Download CV, Contact)
- Set up conversion goals in GA4 for form submissions

### 4.7 File & Asset Structure

```
/Portfolio
├── index.html
├── /assets
│   ├── /images          # Optimized WebP images
│   ├── /fonts           # Self-hosted web fonts
│   └── /icons           # SVG icons
├── /css
│   └── style.css
├── /js
│   └── main.js
├── resume.pdf           # Downloadable CV
├── robots.txt
├── sitemap.xml
└── README.md
```

---

## 5. Content Requirements

### 5.1 Copy Guidelines

- Write in **first person**, present tense
- Use **active voice** throughout
- Hero headline: lead with impact, not name (e.g., "I craft digital experiences that people actually want to use.")
- Avoid clichés: "passionate developer", "hardworking team player", "go-getter"
- Each project description answers: What was the problem? What did I build? What was the result?

### 5.2 Required Content Assets

| Asset | Status Required |
|-------|----------------|
| Professional headshot or stylized photo | Required |
| Project screenshots / mockups (min 3) | Required |
| Updated CV / Resume (PDF) | Required |
| Short bio (100–150 words) | Required |
| Project descriptions (3 min, 5 ideal) | Required |
| Tech stack list with proficiency levels | Required |
| Testimonial quotes (2–3) | Nice to have |
| Social links (GitHub, LinkedIn) | Required |

---

## 6. Animation & Interaction Design

| Interaction | Specification |
|-------------|--------------|
| Page load | Staggered fade-up for hero elements (0ms, 100ms, 200ms delays) |
| Scroll | Scroll-triggered entrance animations (fade + translateY) |
| Nav links | Underline slide-in on hover |
| Project cards | Lift + shadow deepen on hover; image scale 1.05 |
| CTA buttons | Background fill sweep on hover (left to right) |
| Cursor (desktop) | Custom cursor dot with magnetic pull on buttons (optional) |
| Form submit | Loading state + success/error feedback animation |
| Section transitions | Smooth anchored scroll |

All animations must respect `prefers-reduced-motion: reduce` media query.

---

## 7. Deployment & Maintenance

### 7.1 Deployment

- Deploy via **GitHub Actions CI/CD** — auto-deploy on push to `main`
- Optional: Move to **Vercel** for zero-config deployment and better performance CDN
- Custom domain (optional future step): e.g., `chrishensilva.dev`

### 7.2 Maintenance Tasks (Quarterly)

- [ ] Update project list with new work
- [ ] Refresh resume/CV PDF
- [ ] Check all external links are alive
- [ ] Review Lighthouse scores and fix regressions
- [ ] Update "Currently:" status in About section

---

## 8. Project Phases & Prioritization

### Phase 1 — Foundation (Week 1–2) 🔴 Critical
- Set up project structure and tooling
- Define color palette, typography, and design tokens
- Build responsive navigation and hero section
- Ensure performance baseline is met

### Phase 2 — Core Content (Week 2–3) 🔴 Critical
- Build About, Skills, and Projects sections
- Write all copy and gather all assets
- Integrate contact form with EmailJS/Formspree

### Phase 3 — Polish & Animation (Week 3–4) 🟡 Important
- Add scroll-triggered animations (GSAP / Intersection Observer)
- Implement hover interactions on project cards and buttons
- Add custom cursor (desktop only)
- Refine mobile experience

### Phase 4 — SEO & Launch (Week 4) 🟢 Required Before Go-Live
- Add all meta tags, OG tags, schema markup
- Set up GA4 analytics
- Lighthouse audit and fixes
- Cross-browser testing
- Deploy and share

---

## 9. Out of Scope (v1)

- Backend/server-side functionality
- Blog or articles section (can be added in v2)
- CMS integration
- Dark/light mode toggle (can be added in v2)
- Multi-language support

---

## 10. References & Inspiration

The redesigned portfolio should draw inspiration from the following design directions:

- **Typographic boldness:** Large, confident display type that owns the screen
- **Dark editorial aesthetic:** Think premium, not gloomy
- **Purposeful motion:** Animations that guide attention, not distract
- **Content-first layout:** Every design decision serves the content
- **Zero ambiguity:** A visitor should know within 5 seconds who Chrishen is and what he does

---

*This document should be treated as a living specification. Update it as decisions are made, requirements evolve, or new insights emerge during development.*