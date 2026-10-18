# Section 02: Interactive Hero Ken-Burns Carousel

## Purpose
Acts as the central marquee highlighting the clinic's core strengths: Board-certified ophthalmologists, cutting-edge vitreoretinal surgical capabilities, patient-first diagnostic workflows, and urgent consultation hotlines.

## DOM Structure & Semantic Layout
- `<section className="relative w-full overflow-hidden bg-slate-900 text-white min-h-[520px] lg:min-h-[640px] flex items-center">`
  - Carousel track with 5 distinct slides:
    1. **Slide 1**: "Dr. Julian Vance, MD" (MCPS, FCPS, FRCS Glasgow - Vitreo Retina Specialist with 15,000+ completed procedures) + "View Surgeon Profile ➜"
    2. **Slide 2**: "Lumina Eye Care & Surgery" (Advanced eye diagnostics and preventative ophthalmic care) + "More About Us ➜"
    3. **Slide 3**: "Prioritize Your Vision Early" (Why a dilated comprehensive fundus exam cannot be replaced by quick glasses) + "Call Now ➜"
    4. **Slide 4**: "State-of-the-Art Surgical Laser & Vitrectomy Tech" (Constellation vitrectomy systems, Zeiss slit-lamps) + "View Facilities ➜"
    5. **Slide 5**: "Specialized Eye Health Inspection" (Precision diagnostic protocols designed for optimal ocular safety) + "Book Inspection ➜"
  - **Slide Background Visual**: Subtle zoom-in animation (Ken-Burns effect), dark gradient overlay (`from-[#00123A]/90 via-[#00123A]/70 to-transparent`) for optimal typographic legibility.
  - **Slide Content Container**:
    - Tagline / Badge
    - Massive Heading (`text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight`)
    - Subtitle narrative (`text-lg text-slate-200 max-w-2xl mt-4 leading-relaxed`)
    - Action button (`bg-[#0f57fb] hover:bg-white hover:text-[#00123A] font-medium px-7 py-3 rounded-md`)
  - **Carousel Controls**:
    - Previous and Next circular chevron arrow buttons (accessible with aria labels and keyboard arrow keys)
    - Bottom pagination indicator pills showing active slide with progress animation.

## Design Tokens (Tailwind v4 / OKLCH)
- **Overlay**: `bg-gradient-to-r from-[#00123A] to-[#00123A]/60`
- **Primary Button**: `bg-[#0f57fb] hover:bg-[#21252f] text-white shadow-lg`
- **Indicators**: Active slide `w-8 bg-[#0f57fb]`, inactive slide `w-2.5 bg-white/40`

## Responsive Behavior
- **Desktop (1440px)**: Left-aligned content container with 640px height, large typography (50px).
- **Tablet (768px)**: Centered or left-padded content, medium typography (36px).
- **Mobile (390px)**: 480px min-height, stacked CTA, responsive touch swiping, compact typography (28px).
