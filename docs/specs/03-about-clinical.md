# Section 03: About & Clinical Excellence (Split Presentation)

## Purpose
Establishes trust, highlights the clinic's patient-first philosophy, short wait times, and high satisfaction ratings compared to congested public facilities.

## DOM Structure & Semantic Layout
- `<section className="py-20 bg-white">`
  - `<div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">`
    - **Left Column**: Image container showcasing surgeon consultation, clinic diagnostic equipment with subtle shadow, rounded corners (`rounded-2xl shadow-xl`), and accent badge.
    - **Right Column**: Content block
      - Overline: `<span className="text-[#0f57fb] font-semibold text-sm tracking-wider uppercase">About Our Institute</span>`
      - Heading: `<h2 className="text-3xl sm:text-4xl font-bold text-[#00123A] mt-2 leading-tight">One of the leading ophthalmic surgical institutes</h2>`
      - Paragraph: Description of rapid examination turnaround, advanced retina and anterior segment care, and personalized treatment plans.
      - Key Metrics Grid: 15,000+ Surgeries, 99.4% Patient Satisfaction, < 15 Min Average Wait Time.
      - Action Link: "Read More About Our Story →" button (`bg-[#0f57fb] hover:bg-[#21252f] text-white px-6 py-3 rounded-md font-medium inline-flex items-center gap-2`).

## Design Tokens (Tailwind v4 / OKLCH)
- **Background**: `bg-white`
- **Headings**: `text-[#00123A]` (`oklch(0.22 0.08 265)`)
- **Body Text**: `text-[#484c50]` (`oklch(0.42 0.01 250)`)
- **Accent**: `text-[#0f57fb]` / `bg-[#0f57fb]`

## Responsive Behavior
- **Desktop (>= 1024px)**: 50/50 two-column layout.
- **Tablet & Mobile (< 1024px)**: Stacks vertically; image on top followed by content block with centered or left-aligned typography.
