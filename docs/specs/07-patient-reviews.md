# Section 07: Patient Reviews & Clinical Outcomes

## Purpose
Showcases authentic patient recovery testimonials, verifying clinical excellence in treating digital eye strain, diabetic retinopathy, and surgical outcomes.

## DOM Structure & Semantic Layout
- `<section className="py-20 bg-white">`
  - `<div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">`
    - **Left Column**: Testimonial Video Feature Card
      - Video interview card with playback controls, patient portrait, and procedure tag: "Retina & Vitreous Surgery Recovery".
    - **Right Column**: Review Content Block
      - Overline: `<span className="text-[#0f57fb] font-semibold text-sm tracking-wider uppercase">Patient Testimonials</span>`
      - Heading: `<h2 className="text-3xl sm:text-4xl font-bold text-[#00123A] mt-2">William A. (Patient Story)</h2>`
      - Star Rating: 5 glowing gold stars (`text-amber-400 flex gap-1 mb-4`).
      - Testimonial Quote:
        > "I had frequent exposure to monitors and began suffering from sudden visual distortion and chronic headaches. The surgical and diagnostic precision at Lumina Eye Institute diagnosed my retinal condition instantly. Within two weeks of laser intervention, my sight is completely restored."
      - Narrative context on patient-centric care and short waiting time.
      - Action Link: "Explore More Patient Reviews →" button.

## Design Tokens (Tailwind v4 / OKLCH)
- **Quote Box**: `border-l-4 border-[#0f57fb] pl-4 italic text-[#243673] font-medium`
- **Heading**: `text-[#00123A]`
- **Button**: `bg-[#0f57fb] hover:bg-[#21252f] text-white`

## Responsive Behavior
- **Desktop**: 50/50 split side-by-side.
- **Tablet & Mobile**: Video preview on top, quote and story below with touch-friendly button.
