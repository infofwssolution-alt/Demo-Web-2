# Section 01: Top Utility & Main Navigation Header

## Purpose
Provides institutional branding, key patient contact points, accessible navigation with drop-down menus, and a prominent call-to-action button to schedule clinical appointments.

## DOM Structure & Semantic Layout
- `<header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-border transition-all">`
  - Top Announcement & Hotline Strip (optional subtle bar or integrated in header)
  - `<nav className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">`
    - **Branding**: Clinic logo icon (Eye emblem) + Title "Lumina Eye Care" (Manrope bold, navy `#00123A`)
    - **Desktop Navigation Links**:
      - `Home` (Active state)
      - `About` (With dropdown: "Our Specialists", "Mission & Story")
      - `Doctors`
      - `Facilities` (With dropdown: "Diagnostic Labs", "Day Care Suites")
      - `Surgeries` (With dropdown: "Cataract (MICS)", "Vitreo-Retina", "Glaucoma", "Corneal Grafting")
      - `Resources`
      - `Contact`
    - **Header CTA**:
      - Primary button "Book Appointment now →" with royal blue styling (`#0f57fb`), hover feedback (`#21252f`), pill/smooth rounded styling.
    - **Mobile Navigation Trigger**:
      - Hamburger button (`lg:hidden`) opening mobile drawer navigation with full menu and quick-call button.

## Design Tokens (Tailwind v4 / OKLCH)
- **Background**: `bg-white/95 backdrop-blur-sm` (`oklch(1 0 0 / 95%)`)
- **Nav Text**: `text-[#313c4d] hover:text-[#0f57fb]`
- **Active Nav Text**: `text-[#0f57fb] font-semibold`
- **CTA Button**: `bg-[#0f57fb] hover:bg-[#21252f] text-white transition-colors duration-200`
- **Border**: `border-[#BFD1FF]/40`

## Responsive Behavior
- **>= 1024px (Desktop)**: Full horizontal menu with animated hover dropdowns and appointment CTA button.
- **< 1024px (Tablet/Mobile)**: Nav links hidden, hamburger toggle button displayed. Tapping opens an accessible mobile drawer containing links, phone number, and appointment button.
