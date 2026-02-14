# Elementor Setup Guide — Yfeey Theme

Complete guide for recreating the Yfeey website in WordPress using Elementor.

---

## Prerequisites

1. WordPress 6.0+ installed
2. **Elementor** plugin installed and activated (Free or Pro)
3. **Yfeey theme** activated via **Appearance → Themes**

---

## Quick Start (Static Fallback)

The theme ships with **built-in static HTML sections**. If you simply activate the theme and create a page called "Home" (set as static front page in **Settings → Reading**), the landing page renders automatically without Elementor.

To use Elementor for visual editing, follow the sections below.

---

## Theme Setup

### 1. Set Static Front Page

- Go to **Settings → Reading**
- Select "A static page" for "Your homepage displays"
- Set "Home" as the homepage
- Create and save an "About" page (it auto-uses the `page-about.php` template)

### 2. Set Up Navigation

- Go to **Appearance → Menus**
- Create a new menu and assign it to **Primary Navigation**
- Add links: About, Services, Works, Blogs

---

## Color Reference

| Token          | Hex       | Usage                         |
| -------------- | --------- | ----------------------------- |
| Primary        | `#8062c0` | Buttons, accents, icons       |
| Primary Dark   | `#694fa0` | Hover states                  |
| Deep Midnight  | `#0e1118` | Hero/dark sections            |
| Background Alt | `#f9fafb` | Services, Process backgrounds |
| Text Main      | `#1f2937` | Body text, headings           |
| Text Muted     | `#6b7280` | Descriptions                  |

---

## Font Reference

| Font         | Weight  | Usage                               |
| ------------ | ------- | ----------------------------------- |
| **Poppins**  | 300–800 | Body text, buttons, nav, h2, h4, h5 |
| **Literata** | 400–700 | h1, h3, quotes, philosophy text     |

---

## Landing Page Sections (Elementor)

### Section 1: Hero

- **Layout**: Full-width section, min height 100vh, bg color `#0e1118`
- **Widgets**: Heading (badge text), Heading (h1), Text Editor (subtitle), 2 buttons
- **CSS Classes**: Add `hero-glow` div for background effect
- **Content**:
  - Badge: `SYSTEMS ARCHITECTURE 2026`
  - H1: `We Design Scalable Digital Systems`
  - Subtitle: _"Yfeey is a digital agency focused on software, intelligent automation..."_
  - Button 1: `Start a Project` → primary style
  - Button 2: `Book a Consultation` → outline style

### Section 2: Trusted By

- **Layout**: Full-width, bg `#f9fafb`, top/bottom border
- **Widgets**: Text Editor ("Trusted By"), 4 inline heading widgets
- **Logos**: TCN, KWARA STATE, UBEC, CHURCHGATE (bold text, greyscale filter)

### Section 3: Expertise

- **Layout**: Boxed, bg white, center-aligned
- **Widgets**: Heading (h2), Text Editor with highlighted span
- **Content**:
  - H2: `A Thoughtful Approach to High-Performance Tech`
  - Text: _"...precise, scalable, and inherently logical"_ (span in `#8062c0`)

### Section 4: Services

- **Layout**: Full-width, bg `#f9fafb`
- **Widgets**: 6 Icon Box widgets in 3-column grid
- **CSS Class**: Add `yfeey-bento` to each icon box for hover effects
- **Services**: AI & Automation, Custom Software, Content & Growth, Team Augmentation, Branding, Training

### Section 5: Selected Works

- **Layout**: Full-width, bg `#0e1118`
- **Widgets**: 4 Image Box widgets in 3-column grid (2 wide, 2 regular)
- **Images**: Use the Google-hosted URLs from the template parts
- **Projects**: Nova Financial Core (FinTech), Nexus AI (AI Model), Cipher Wallet (Web3), Fortress Cloud (Cybersecurity)

### Section 6: Process

- **Layout**: Full-width, bg `#f9fafb`, border-top
- **Widgets**: 4 columns with number + icon + title + description
- **Steps**: 01 Discovery, 02 System Design, 03 Build, 04 Launch

### Section 7: Testimonials

- **Layout**: Full-width, bg white, border-top
- **Widgets**: 3 Testimonial widgets or Text Editors
- **Badge**: "Impact" pill badge above heading
- **Cards**: 3 quotes with author names, roles, and categories

### Section 8: CTA

- **Layout**: Boxed, bg white, center-aligned
- **Widgets**: Heading (h2) + Text Editor + 2 Buttons
- **Heading**: `Ready to Automate the Future?` (with italic serif "the Future?")

---

## About Page Sections

### About Hero

- **Layout**: Full-width, min-height 80vh, bg `#0e1118`
- Badge: `Established MMXXIV`, H1: `A Studio Built on Structure.`

### About Narrative

- **Layout**: Boxed, bg white
- H2: `Clarity is the byproduct of discipline.`
- Two-column text about Yfeey's mission

### About Values

- **Layout**: Full-width, bg `rgba(249,250,251,0.3)`
- 4 bento cards: Clarity, Longevity, Structure, Partnership

### About Methodology

- **Layout**: Boxed, bg white
- Two sub-sections: Methodology (3 numbered steps) + Engagement (2 focus areas)

### About Trust

- **Layout**: Full-width, bg `#0e1118`
- Stats: 98% Retention Rate, 24/7 Systems Monitoring
- Quote card with testimonial

### About CTA

- **Layout**: Boxed, bg white
- H2: `Work With Us` + 2 buttons

---

## Custom CSS Classes Reference

Add these via Elementor's **Advanced → CSS Classes** field:

| Class                  | Effect                                  |
| ---------------------- | --------------------------------------- |
| `bento-card`           | Card with gradient bg + hover-to-purple |
| `bento-icon-container` | Icon wrapper with hover color invert    |
| `process-step`         | Left-bordered step with hover accent    |
| `work-card`            | Portfolio card with overlay             |
| `work-wide`            | Spans 2 columns in works grid           |
| `testimonial-card`     | Quote card with shadow                  |
| `hero-glow`            | Blurred purple radial gradient          |
| `bg-dot-pattern`       | Light dot matrix background             |
| `bg-dot-pattern-dark`  | Dark dot matrix background              |
| `trust-quote-card`     | Glass-effect quote card                 |
| `btn-primary`          | Purple rounded button                   |
| `btn-outline`          | Border-only button (light)              |
| `btn-outline-dark`     | Border-only button (dark)               |
| `btn-ghost`            | Light gray border button                |
| `animate-on-scroll`    | Fade-in-up on scroll                    |
