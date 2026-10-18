# Section 08: Consultation Hotline & Comprehensive Footer

## Purpose
Provides an urgent appointment hotline banner, clinical operating hours (daily morning/evening shifts), emergency telephone numbers, interactive location map, and social media links.

## DOM Structure & Semantic Layout
- `<div className="w-full">`
  - **Consultation Callout Banner**:
    - `<section className="bg-gradient-to-r from-[#00123A] to-[#0f57fb] text-white py-14">`
      - Split layout:
        - Left: "Looking For An Expert Consultation?" + "Book an appointment now with one of our board-certified ophthalmic surgeons."
        - Right: Phone hotline button: `(021) 3453-1810` / `+1 (800) 555-EYES` with telephone icon.
  - **Footer Component (`<footer className="bg-white text-[#484c50] pt-16 pb-12 border-t border-slate-200">`)**:
    - `<div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">`
      - **Column 1: Clinic Overview & Contact**:
        - Brand Logo + Lumina Eye Institute
        - Address: 187-B, Medical Enclave, Karachi
        - Hotlines: (021) 34531810, (021) 37441943, 0311-2845342
        - Email: appointments@luminaeyecare.org
      - **Column 2: Operating Timings**:
        - Heading: "Hospital Timings"
        - Morning OPD: 09:30 AM – 12:00 PM (Mon – Thu, Sat)
        - Evening OPD: 05:00 PM – 07:30 PM (Mon, Wed, Fri, Sat)
        - Emergency / Vitrectomy On-Call: 24/7
        - Sunday: Closed for routine appointments
      - **Column 3: Specializations & Quick Links**:
        - Vitreo-Retinal Surgery, Cataract Phacoemulsification, Glaucoma Laser, Refractive Evaluation, Optical Dispensary
      - **Column 4: Location Map & Social Channels**:
        - Google Maps interactive frame / clinical locator
        - Social icons: Facebook, Instagram, LinkedIn, YouTube
    - **Bottom Copyright Strip**:
      - `border-t border-slate-100 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500`
      - "© 2026 Lumina Eye Institute. Educational UI study reverse-engineered from dyzeyehospital.com."

## Design Tokens (Tailwind v4 / OKLCH)
- **Consultation Banner**: `bg-gradient-to-r from-[#00123A] via-[#102a6b] to-[#0f57fb]`
- **Footer Background**: `bg-white`
- **Border**: `border-slate-200`
- **Headings**: `text-[#00123A] font-bold text-lg mb-4`
- **Links**: `hover:text-[#0f57fb] transition-colors`

## Responsive Behavior
- **>= 1024px**: 4 distinct columns.
- **768px - 1023px**: 2x2 grid.
- **< 768px**: 1 column stacked layout with touch-friendly tel/map links.
