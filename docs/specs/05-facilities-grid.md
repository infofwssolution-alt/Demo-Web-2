# Section 05: Our Clinical Facilities

## Purpose
Exhibits the physical and technological environment of the hospital to instill reassurance regarding sterile operating theaters, advanced diagnostic imaging, and on-site pharmacy services.

## DOM Structure & Semantic Layout
- `<section className="py-24 bg-white" id="facilities">`
  - `<div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">`
    - **Header Block**:
      - Title: `<h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00123A]">Our Facilities</h2>`
      - Subtitle: "Purpose-built ophthalmic spaces equipped with international gold-standard diagnostic and surgical infrastructure."
    - **3-Card Grid (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12`)**:
      - **Card 1: Friendly & Calming Environment**
        - Image / SVG Icon: Warm reception, spacious waiting areas, natural light.
        - Heading: `Friendly Environment`
        - Description: Spacious, bright, and hygienic clinical halls. Attentive nursing staff and structured appointment slots ensure minimal wait times.
        - Pill / Link: "Explore Clinic Spaces →"
      - **Card 2: Modern Diagnostic Equipment**
        - Image / SVG Icon: OCT Scan, Fundus Fluorescein Angiography, Corneal Topographer.
        - Heading: `Modern Diagnostic Equipment`
        - Description: High-resolution anterior segment imaging, non-contact tonometry, and precision visual field analyzers for micro-accurate evaluations.
        - Pill / Link: "Diagnostic Equipment Specs →"
      - **Card 3: In-House Pharmacy & Dispensing Opticians**
        - Image / SVG Icon: Pharmacy counter & prescription eyewear fitting.
        - Heading: `Pharmacy & Optical Dispensary`
        - Description: Immediate fulfillment of doctor-prescribed eye drops, anti-VEGF medications, and custom-tailored anti-reflective corrective lenses.
        - Pill / Link: "Optical Services →"
    - **Bottom CTA**:
      - "View All Hospital Facilities →" button centered below the grid.

## Design Tokens (Tailwind v4 / OKLCH)
- **Card Background**: `bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- **Icon Container**: `w-14 h-14 rounded-xl bg-[#BFD1FF]/30 text-[#0f57fb] flex items-center justify-center mb-6`
- **Headings**: `text-xl font-bold text-[#00123A]`

## Responsive Behavior
- **>= 1024px**: 3 equal columns.
- **768px - 1023px**: 2 columns (Card 3 spans or centers).
- **< 768px**: 1 column stacked cards with 100% width.
